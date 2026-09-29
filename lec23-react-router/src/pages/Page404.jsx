import { Link } from "react-router";

const Page404 = () => (
  <main
    dir="rtl"
    className="grid min-h-[65vh] place-items-center bg-[#f5f3ec] px-5 py-16 text-center text-emerald-950"
  >
    <section className="max-w-xl">
      <p className="text-sm font-bold text-amber-700">404 · خارج النشرة</p>
      <h1 className="mt-4 text-5xl font-bold sm:text-7xl">
        هذه الصفحة غير موجودة
      </h1>
      <p className="mt-5 leading-7 text-stone-600">
        يبدو أن الرابط تغيّر أو أن الصفحة انتقلت إلى مكان آخر.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="rounded-sm bg-emerald-950 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-900"
        >
          العودة للرئيسية
        </Link>
        <Link
          to="/blogs"
          className="rounded-sm border border-emerald-950/20 px-5 py-3 text-sm font-semibold hover:bg-emerald-950/5"
        >
          تصفح الأخبار
        </Link>
      </div>
    </section>
  </main>
);

export default Page404;
