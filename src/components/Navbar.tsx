import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  };

  const navLinks = [
    { key: "nav.home", href: "/" },
    { key: "nav.about", href: "/about" },
    { key: "nav.gallery", href: "/gallery" },
    { key: "nav.courses", href: "/courses" },
    { key: "nav.contact", href: "/contact" },
  ];

  return (
    // 1. <div> o'rniga semantik <header> va ichida <nav>
    <header className="fixed top-0 left-0 w-full z-50 bg-[#faf9f6ee] backdrop-blur-md border-b border-[#D4AF37]/10 shadow-sm">
      <nav
        aria-label={t("nav.mainNavigation") || "Main navigation"}
        className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <div>
            <h6 className="text-[#D4AF37] text-[10px] tracking-[0.2em] uppercase font-medium leading-none font-serif">
              Center of Islamic Civilization
            </h6>
            <h3 className="text-[#005F40] text-base sm:text-lg font-semibold leading-tight">
              Calligraphy Center
            </h3>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.key}>
                {/* 2. href="#" o'rniga haqiqiy manzil */}
                <a
                  href={link.href}
                  className="text-[#005F40] text-sm font-medium tracking-wide hover:text-[#D4AF37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] focus-visible:outline-offset-2 transition-colors rounded-sm"
                >
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* 3. Til tanlash uchun aria-label */}
            <select
              onChange={changeLang}
              defaultValue={i18n.language}
              aria-label={t("nav.selectLanguage") || "Select language"}
              className="border border-[#D4AF37]/20 bg-white px-3 py-2 rounded-md text-sm outline-none focus-visible:border-[#D4AF37] focus-visible:ring-2 focus-visible:ring-[#D4AF37]/40"
            >
              <option value="uz">Uz</option>
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>

            <button className="hidden lg:flex items-center gap-4 bg-[#005F40] py-3 px-6 rounded-md text-white hover:bg-[#00412c] focus-visible:ring-2 focus-visible:ring-[#D4AF37] transition-all duration-200">
              {t("nav.explore")}
            </button>

            {/* 4. Mobil menyu tugmasi: aria-label, aria-expanded, aria-controls */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={
                isOpen
                  ? t("nav.closeMenu") || "Close menu"
                  : t("nav.openMenu") || "Open menu"
              }
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="lg:hidden text-[#005F40] text-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] rounded"
            >
              {isOpen ? <HiX aria-hidden="true" /> : <HiMenuAlt3 aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* 5. Mobil menyu: id qo'shildi, ikkinchi <nav> emas — shu bitta nav ichida */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[400px] pb-6" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-5 pt-4 border-t border-[#D4AF37]/10">
            {navLinks.map((link) => (
              <li key={link.key}>
                <a
                  className="text-[#005F40] font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] rounded-sm"
                  href={link.href}
                  tabIndex={isOpen ? 0 : -1}
                >
                  {t(link.key)}
                </a>
              </li>
            ))}

            <li>
              <button className="w-full bg-[#005F40] text-white py-3 rounded-md focus-visible:ring-2 focus-visible:ring-[#D4AF37]">
                {t("nav.explore")}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}