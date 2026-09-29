import { useState } from "react";
import { Link, NavLink } from "react-router";

const navigation = [
  { label: "الرئيسية", to: "/" },
  { label: "من نحن", to: "/about" },
  { label: "الفريق", to: "/team" },
  { label: "الخدمات", to: "/services" },
  { label: "المقالات", to: "/blogs" },
  { label: "تواصل معنا", to: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header dir="rtl" className="border-b border-emerald-950/10 bg-[#fbfaf6]">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-3 text-emerald-950"
          aria-label="أمرك مولاي، الرئيسية"
        >
          <span className="grid size-11 place-items-center rounded-sm bg-emerald-950 text-xl font-bold text-amber-300">
            أ
          </span>
          <span className="text-xl font-bold tracking-normal">أمرك مولاي</span>
        </Link>

        <nav
          aria-label="التنقل الرئيسي"
          className="hidden items-center gap-8 md:flex"
        >
          {navigation.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `border-b-2 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-amber-600 text-emerald-950"
                    : "border-transparent text-stone-600 hover:border-amber-600/60 hover:text-emerald-950"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-sm border border-emerald-950/15 text-emerald-950 transition-colors hover:bg-emerald-950/5 md:hidden"
          aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span className="h-0.5 w-full bg-current" />
            <span className="h-0.5 w-full bg-current" />
            <span className="h-0.5 w-full bg-current" />
          </span>
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="التنقل الرئيسي"
          className="border-t border-emerald-950/10 px-5 py-3 md:hidden"
        >
          {navigation.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block border-b border-emerald-950/5 px-2 py-3 text-sm font-medium last:border-0 ${
                  isActive ? "text-emerald-950" : "text-stone-600"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
