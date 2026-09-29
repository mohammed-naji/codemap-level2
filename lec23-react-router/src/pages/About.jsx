import { Link } from "react-router";

const About = () => (
  <main dir="rtl" className="text-emerald-950">
    <section className="bg-[#fbfaf6] px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold text-amber-700">
          الحكاية وراء أمرك مولاي
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
          نؤمن أن المعرفة الجيدة تبدأ من{" "}
          <span className="text-amber-700">سؤال واضح.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
          أمرك مولاي مساحة رقمية عربية تجمع الأخبار والموضوعات في تجربة قراءة
          منظمة، وتمنح كل قصة سياقًا ومساحة تستحقها.
        </p>
      </div>
    </section>

    <section className="px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold text-amber-700">ما الذي يهمنا؟</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight">
            معلومة مفهومة، وتجربة تحترم وقتك.
          </h2>
        </div>
        <div className="grid gap-7 sm:grid-cols-2">
          <article className="border-t-2 border-amber-600 pt-4">
            <h3 className="text-lg font-bold">الوضوح</h3>
            <p className="mt-3 leading-7 text-stone-600">
              نرتب الأفكار ونستخدم لغة عربية مباشرة تساعد القارئ على الوصول إلى
              لبّ الموضوع.
            </p>
          </article>
          <article className="border-t-2 border-emerald-900 pt-4">
            <h3 className="text-lg font-bold">التنوع</h3>
            <p className="mt-3 leading-7 text-stone-600">
              نفتح نافذة على التقنية والعلوم والثقافة والمجتمع في مكان واحد.
            </p>
          </article>
          <article className="border-t-2 border-emerald-900 pt-4">
            <h3 className="text-lg font-bold">سهولة الوصول</h3>
            <p className="mt-3 leading-7 text-stone-600">
              نصمم صفحات مريحة لمختلف الشاشات، مع خيار الاستماع إلى المواد
              صوتيًا.
            </p>
          </article>
          <article className="border-t-2 border-amber-600 pt-4">
            <h3 className="text-lg font-bold">فضول مستمر</h3>
            <p className="mt-3 leading-7 text-stone-600">
              نعتبر كل موضوع بداية لأسئلة جديدة وفرصة لفهم ما حولنا بصورة أعمق.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section className="bg-emerald-950 px-5 py-12 text-white sm:px-8 sm:py-14">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-bold">ابدأ من آخر ما نُشر</h2>
          <p className="mt-2 text-emerald-100/75">
            اختر موضوعًا واقرأه بالطريقة التي تناسبك.
          </p>
        </div>
        <Link
          to="/blogs"
          className="rounded-sm bg-amber-400 px-5 py-3 text-center text-sm font-bold text-emerald-950 hover:bg-amber-300"
        >
          إلى النشرة
        </Link>
      </div>
    </section>
  </main>
);

export default About;
