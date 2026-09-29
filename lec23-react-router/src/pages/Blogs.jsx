import { useEffect, useRef, useState } from "react";
import news from "../data/news";
import { Link } from "react-router";

const Blogs = () => {
  const [activeStory, setActiveStory] = useState(null);
  const [readingAll, setReadingAll] = useState(false);
  const [paused, setPaused] = useState(false);
  const [speechError, setSpeechError] = useState("");
  const readingRun = useRef(0);

  useEffect(() => {
    return () => {
      readingRun.current += 1;
      window.speechSynthesis?.cancel();
    };
  }, []);

  const stopReading = () => {
    readingRun.current += 1;
    window.speechSynthesis?.cancel();
    setActiveStory(null);
    setReadingAll(false);
    setPaused(false);
  };

  const readNews = (startIndex = 0, readAll = false) => {
    if (!("speechSynthesis" in window) || !window.SpeechSynthesisUtterance) {
      setSpeechError("القراءة الصوتية غير مدعومة في هذا المتصفح.");
      return;
    }

    const runId = readingRun.current + 1;
    readingRun.current = runId;
    window.speechSynthesis.cancel();
    setSpeechError("");
    setActiveStory(startIndex);
    setReadingAll(readAll);
    setPaused(false);

    const stories = readAll ? news.slice(startIndex) : [news[startIndex]];
    const voices = window.speechSynthesis.getVoices();
    const arabicVoice = voices.find((voice) =>
      voice.lang.toLowerCase().startsWith("ar"),
    );

    stories.forEach((story, offset) => {
      const utterance = new window.SpeechSynthesisUtterance(
        `${story.title}. ${story.summary}`,
      );
      utterance.lang = "ar-SA";
      utterance.rate = 0.95;
      if (arabicVoice) utterance.voice = arabicVoice;
      utterance.onstart = () => {
        if (readingRun.current === runId) setActiveStory(startIndex + offset);
      };
      utterance.onend = () => {
        if (readingRun.current === runId && offset === stories.length - 1) {
          setActiveStory(null);
          setReadingAll(false);
        }
      };
      utterance.onerror = (event) => {
        if (readingRun.current === runId && event.error !== "canceled") {
          setSpeechError(
            "تعذرت القراءة الصوتية. جرّب متصفحًا يدعم الصوت العربي.",
          );
          setActiveStory(null);
          setReadingAll(false);
        }
      };
      window.speechSynthesis.speak(utterance);
    });
  };

  const togglePause = () => {
    if (paused) {
      window.speechSynthesis.resume();
    } else {
      window.speechSynthesis.pause();
    }
    setPaused((isPaused) => !isPaused);
  };

  return (
    <main dir="rtl" className="min-h-screen bg-[#f5f3ec] text-emerald-950">
      <section className="border-b border-emerald-950/10 bg-[#fbfaf6] px-5 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between gap-4 border-b border-emerald-950/10 pb-4 text-sm">
            <span className="font-bold">
              أمرك مولاي <span className="text-amber-700">/</span> النشرة
            </span>
            <span className="text-stone-500">محتوى عربي تجريبي</span>
          </div>

          <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-3 text-sm font-semibold text-amber-700">
                15 مادة للقراءة والاستماع
              </p>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
                النشرة <span className="text-amber-700">العربية</span>
              </h1>
              <p className="mt-4 max-w-2xl leading-7 text-stone-600">
                موجز متنوع في التقنية والعلوم والمجتمع، اقرأه أو استمع إليه بصوت
                عربي من متصفحك.
              </p>
            </div>

            <button
              type="button"
              onClick={() => readNews(0, true)}
              className="min-h-12 rounded-sm bg-emerald-950 px-6 py-3 text-sm font-semibold text-[#fbfaf6] transition-colors hover:bg-emerald-900"
            >
              اقرأ النشرة كاملة
            </button>
          </div>
        </div>
      </section>

      <section className="px-5 py-8 sm:px-8 sm:py-10">
        <div className="mx-auto max-w-7xl">
          {activeStory !== null && (
            <div
              aria-live="polite"
              className="mb-7 flex flex-wrap items-center justify-between gap-4 border-r-4 border-amber-600 bg-white px-5 py-4"
            >
              <p className="min-w-0 flex-1 text-sm font-semibold text-emerald-950">
                {readingAll ? "تُقرأ النشرة الآن: " : "يُقرأ الآن: "}
                <span className="font-normal">{news[activeStory].title}</span>
              </p>
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={togglePause}
                  className="rounded-sm border border-emerald-950/20 px-3 py-2 text-sm font-semibold hover:bg-emerald-950/5"
                >
                  {paused ? "استكمال" : "إيقاف مؤقت"}
                </button>
                <button
                  type="button"
                  onClick={stopReading}
                  className="rounded-sm border border-emerald-950/20 px-3 py-2 text-sm font-semibold hover:bg-emerald-950/5"
                >
                  إيقاف
                </button>
              </div>
            </div>
          )}

          {speechError && (
            <p
              role="alert"
              className="mb-6 border border-red-900/20 bg-white px-5 py-4 text-sm text-red-900"
            >
              {speechError}
            </p>
          )}

          <div className="mb-4 flex items-center justify-between border-b border-emerald-950/15 pb-3">
            <h2 className="text-lg font-bold">أخبار مختارة</h2>
            <span className="text-sm text-stone-500">
              01 - {String(news.length).padStart(2, "0")}
            </span>
          </div>

          <div className="grid gap-x-8 sm:grid-cols-2">
            {news.map((article, index) => (
              <article
                key={article.id}
                id={`category-${article.category}`}
                className={`border-b border-emerald-950/15 py-6 sm:py-7 ${activeStory === index ? "bg-amber-50/70 px-4" : ""}`}
              >
                <div className="mb-3 flex items-center gap-3 text-xs font-semibold">
                  <span className="text-amber-700">
                    {String(article.id).padStart(2, "0")}
                  </span>
                  <span className="text-stone-400" aria-hidden="true">
                    /
                  </span>
                  <span className="text-emerald-900">{article.category}</span>
                </div>
                <h3 className="text-xl font-bold leading-8">{article.title}</h3>
                <p className="mt-3 leading-7 text-stone-600">
                  {article.summary.substring(0, 50)}...
                </p>
                <Link
                  to={`/blogs/${article.id}`}
                  className="mt-4 text-sm font-semibold text-amber-700 underline decoration-amber-700/40 underline-offset-4 transition-colors hover:text-emerald-950"
                >
                  إقرا المزيد
                </Link>
              </article>
            ))}
          </div>

          <section className="mt-14 border-t border-emerald-950/15 pt-8">
            <p className="text-sm font-semibold text-amber-700">
              مسارات القراءة
            </p>
            <h2 className="mt-2 text-2xl font-bold">اختر زاوية تهمك</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {[...new Set(news.map((article) => article.category))].map(
                (category) => (
                  <a
                    key={category}
                    href={`#category-${category}`}
                    className="rounded-sm border border-emerald-950/15 px-3 py-2 text-sm font-medium text-emerald-900 transition-colors hover:border-amber-600 hover:bg-white"
                  >
                    {category}
                  </a>
                ),
              )}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Blogs;
