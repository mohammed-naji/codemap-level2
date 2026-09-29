import { Link } from "react-router";

const Contact = () => (
  <main dir="rtl" className="text-emerald-950">
    <section className="bg-[#fbfaf6] px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold text-amber-700">نحن نقرأ ما تكتب</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
          خلّينا نعرف <span className="text-amber-700">رأيك.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600">
          يساعدنا تفاعلك على اختيار موضوعات أقرب إلى اهتمامات القراء. تصفح
          النشرة، ثم عد إلى هنا لأي سؤال أو اقتراح.
        </p>
      </div>
    </section>

    <section className="px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold text-amber-700">رسالتك تهمنا</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight">
            ما الذي ترغب بمشاركته؟
          </h2>
        </div>
        <div className="divide-y divide-emerald-950/15 border-y border-emerald-950/15">
          <div className="py-5">
            <h3 className="font-bold">اقتراح موضوع</h3>
            <p className="mt-2 leading-7 text-stone-600">
              شاركنا فكرة تستحق أن تكون ضمن الأخبار القادمة.
            </p>
          </div>
          <div className="py-5">
            <h3 className="font-bold">ملاحظة على المحتوى</h3>
            <p className="mt-2 leading-7 text-stone-600">
              أخبرنا إذا وجدت معلومة تحتاج إلى مراجعة أو توضيح.
            </p>
          </div>
          <div className="py-5">
            <h3 className="font-bold">استفسار عن الموقع</h3>
            <p className="mt-2 leading-7 text-stone-600">
              تعرّف على طريقة عمل الموقع والخيارات المتاحة للقراءة.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-[#eeece3] px-5 py-12 sm:px-8 sm:py-14">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-bold">ابدأ من أحدث الموضوعات</h2>
          <p className="mt-2 leading-7 text-stone-600">
            ستجد في النشرة أخبارًا يمكنك فتحها ومشاركتها مباشرة.
          </p>
        </div>
        <Link
          to="/blogs"
          className="rounded-sm bg-emerald-950 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-emerald-900"
        >
          اذهب إلى الأخبار
        </Link>
      </div>
    </section>
  </main>
);

export default Contact;
