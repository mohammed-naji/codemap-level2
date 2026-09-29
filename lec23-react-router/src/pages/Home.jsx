import { Link } from "react-router";
import news from "../data/news";

const Home = () => (
  <main dir="rtl" className="text-emerald-950">
    <section className="bg-[#fbfaf6] px-5 py-10 sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-9 md:grid-cols-[1fr_0.9fr]">
        <div className="py-4">
          <p className="mb-4 text-sm font-bold text-amber-700">
            أمرك مولاي · مساحة عربية
          </p>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-6xl">
            الخبر حين يُروى <span className="text-amber-700">بوضوح.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-stone-600">
            نقرّب إليك موضوعات اليوم في نشرة عربية تجمع المعرفة والقراءة
            الهادئة.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/blogs"
              className="rounded-sm bg-emerald-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-900"
            >
              اقرأ النشرة
            </Link>
            <Link
              to="/about"
              className="rounded-sm border border-emerald-950/20 px-5 py-3 text-sm font-semibold hover:bg-emerald-950/5"
            >
              تعرّف علينا
            </Link>
          </div>
        </div>
        <div className="relative min-h-64 overflow-hidden bg-emerald-950 sm:min-h-80">
          <img
            src="https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=85"
            alt="صحيفة مفتوحة على طاولة"
            className="absolute inset-0 size-full object-cover opacity-80"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-emerald-950/90 to-transparent p-6 pt-20 text-white">
            <p className="text-sm font-semibold text-amber-300">قراءة اليوم</p>
            <p className="mt-2 text-xl font-bold">أفكار تستحق أن نتوقف عندها</p>
          </div>
        </div>
      </div>
    </section>

    <section className="px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4 border-b border-emerald-950/15 pb-4">
          <div>
            <p className="text-sm font-semibold text-amber-700">
              مختارات المحرر
            </p>
            <h2 className="mt-2 text-2xl font-bold">مساحة أوسع للخبر</h2>
          </div>
          <Link
            to="/blogs"
            className="text-sm font-semibold text-emerald-900 underline underline-offset-4"
          >
            كل الأخبار
          </Link>
        </div>
        <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {news.slice(0, 3).map((article) => (
            <article
              key={article.id}
              className="border-b border-emerald-950/15 py-6"
            >
              <p className="text-xs font-bold text-amber-700">
                {article.category}
              </p>
              <h3 className="mt-3 text-xl font-bold leading-8">
                {article.title}
              </h3>
              <p className="mt-3 leading-7 text-stone-600">{article.summary}</p>
              <Link
                to={`/blogs/${article.id}`}
                className="mt-4 inline-block text-sm font-semibold text-emerald-900 underline underline-offset-4"
              >
                اقرأ التفاصيل
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="border-y border-emerald-950/10 bg-[#eeece3] px-5 py-12 sm:px-8 sm:py-14">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold text-amber-700">منهجنا</p>
          <h2 className="mt-2 text-2xl font-bold">
            محتوى يضع القارئ في قلب الحكاية
          </h2>
          <p className="mt-2 max-w-2xl leading-7 text-stone-600">
            من اختيار الموضوع إلى تنظيم القراءة، نعمل على تقديم تجربة عربية سهلة
            وواضحة.
          </p>
        </div>
        <Link
          to="/services"
          className="shrink-0 text-sm font-bold text-emerald-950 underline decoration-amber-600 underline-offset-4"
        >
          اكتشف خدماتنا
        </Link>
      </div>
    </section>
  </main>
);

export default Home;
