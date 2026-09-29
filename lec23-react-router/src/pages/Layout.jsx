import { Link, Outlet } from "react-router";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#fbfaf6]">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <footer dir="rtl" className="bg-emerald-950 text-[#fbfaf6]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr] md:py-16">
          <div>
            <Link to="/" className="inline-flex items-center gap-3 font-bold">
              <span className="grid size-11 place-items-center rounded-sm bg-amber-400 text-xl text-emerald-950">
                أ
              </span>
              <span className="text-xl">أمرك مولاي</span>
            </Link>
            <p className="mt-5 max-w-sm leading-7 text-emerald-100/75">
              مساحة عربية للخبر والمعرفة، تجمع القصص والأفكار في قراءة واضحة
              وقريبة.
            </p>
            <Link
              to="/blogs"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition-colors hover:text-white"
            >
              تصفح النشرة <span aria-hidden="true">←</span>
            </Link>
          </div>

          <div>
            <h2 className="text-sm font-bold text-amber-300">اكتشف الموقع</h2>
            <nav
              aria-label="روابط التذييل"
              className="mt-5 grid gap-3 text-sm text-emerald-100/75"
            >
              <Link className="transition-colors hover:text-white" to="/about">
                من نحن
              </Link>
              <Link className="transition-colors hover:text-white" to="/team">
                فريق العمل
              </Link>
              <Link
                className="transition-colors hover:text-white"
                to="/services"
              >
                خدماتنا
              </Link>
              <Link
                className="transition-colors hover:text-white"
                to="/contact"
              >
                تواصل معنا
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-bold text-amber-300">من النشرة</h2>
            <p className="mt-5 leading-7 text-emerald-100/75">
              اقرأ ملخصات عربية متنوعة، أو افتح أي خبر لقراءة تفاصيله كاملة.
            </p>
            <Link
              to="/blogs"
              className="mt-4 inline-flex border-b border-amber-300/50 pb-1 text-sm font-semibold text-white hover:border-amber-300"
            >
              آخر الأخبار
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-5 text-xs text-emerald-100/60 sm:px-8">
            <p>© {new Date().getFullYear()} أمرك مولاي. جميع الحقوق محفوظة.</p>
            <Link to="/" className="transition-colors hover:text-white">
              العودة إلى البداية
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
