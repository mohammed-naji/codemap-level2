import { Link } from "react-router";

const roles = [
  {
    number: "01",
    title: "التحرير",
    description: "اختيار الموضوعات وصياغة المحتوى بلغة عربية واضحة ومتوازنة.",
  },
  {
    number: "02",
    title: "المراجعة",
    description: "مراجعة النصوص وتنظيمها لتكون سهلة القراءة والوصول.",
  },
  {
    number: "03",
    title: "التجربة الرقمية",
    description: "بناء صفحات سريعة ومتجاوبة تجعل القراءة والاستماع أكثر سلاسة.",
  },
];

const Team = () => (
  <main dir="rtl" className="text-emerald-950">
    <section className="bg-[#fbfaf6] px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold text-amber-700">كيف نعمل معًا</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
          فريق يجمع <span className="text-amber-700">الكلمة والتقنية.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600">
          تجربة أمرك مولاي ثمرة أدوار متكاملة تهتم بالمحتوى من الفكرة الأولى حتى
          وصوله إلى القارئ.
        </p>
      </div>
    </section>

    <section className="px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-7 border-b border-emerald-950/15 pb-4 text-2xl font-bold">
          مسؤولياتنا
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {roles.map((role) => (
            <article
              key={role.number}
              className="border-t-2 border-amber-600 pt-5"
            >
              <span className="text-sm font-bold text-amber-700">
                {role.number}
              </span>
              <h3 className="mt-4 text-2xl font-bold">{role.title}</h3>
              <p className="mt-3 leading-7 text-stone-600">
                {role.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-[#eeece3] px-5 py-12 sm:px-8 sm:py-14">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-bold">كل قصة تبدأ بفكرة</h2>
          <p className="mt-2 leading-7 text-stone-600">
            اكتشف الموضوعات التي يعمل عليها فريقنا في النشرة.
          </p>
        </div>
        <Link
          to="/blogs"
          className="text-sm font-bold underline decoration-amber-600 underline-offset-4"
        >
          تصفح الأخبار
        </Link>
      </div>
    </section>
  </main>
);

export default Team;
