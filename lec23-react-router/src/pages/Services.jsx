import { Link } from "react-router";

const services = [
  {
    number: "01",
    title: "نشرة عربية متنوعة",
    description: "موضوعات مختارة في التقنية والعلوم والبيئة والثقافة والمجتمع.",
  },
  {
    number: "02",
    title: "قراءة متصلة",
    description: "ملخصات واضحة تقودك إلى تفاصيل كل خبر في صفحة مستقلة.",
  },
  {
    number: "03",
    title: "استماع مدمج",
    description: "حوّل النص إلى صوت عربي عبر أدوات القراءة المتاحة في متصفحك.",
  },
  {
    number: "04",
    title: "تجربة مرنة",
    description: "تصفح مريح على الهاتف والحاسوب، مع تنقل مباشر بين الصفحات.",
  },
];

const Services = () => (
  <main dir="rtl" className="text-emerald-950">
    <section className="bg-[#fbfaf6] px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold text-amber-700">ما نقدمه</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
          قراءة على <span className="text-amber-700">طريقتك.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600">
          أدوات بسيطة ومحتوى متنوع تجعل الوصول إلى الخبر أسهل، من أول نظرة إلى
          القراءة الكاملة.
        </p>
      </div>
    </section>

    <section className="px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-x-10 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.number}
            className="grid grid-cols-[3rem_1fr] gap-4 border-b border-emerald-950/15 py-7"
          >
            <span className="pt-1 text-sm font-bold text-amber-700">
              {service.number}
            </span>
            <div>
              <h2 className="text-xl font-bold">{service.title}</h2>
              <p className="mt-2 leading-7 text-stone-600">
                {service.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="bg-emerald-950 px-5 py-12 text-white sm:px-8 sm:py-14">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-bold">اختر موضوعك التالي</h2>
          <p className="mt-2 text-emerald-100/75">
            تصفح القائمة واقرأ الخبر كاملًا أو استمع إليه.
          </p>
        </div>
        <Link
          to="/blogs"
          className="rounded-sm bg-amber-400 px-5 py-3 text-center text-sm font-bold text-emerald-950 hover:bg-amber-300"
        >
          افتح النشرة
        </Link>
      </div>
    </section>
  </main>
);

export default Services;
