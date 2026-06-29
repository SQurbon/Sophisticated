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

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#faf9f6ee] backdrop-blur-md border-b border-[#D4AF37]/10 shadow-sm">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
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
            <li>
              <a
                href="#"
                className="text-[#005F40] text-sm font-medium tracking-wide hover:text-[#D4AF37] transition-colors"
              >
                {t("nav.home")}
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[#005F40] text-sm font-medium tracking-wide hover:text-[#D4AF37] transition-colors"
              >
                {t("nav.about")}
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[#005F40] text-sm font-medium tracking-wide hover:text-[#D4AF37] transition-colors"
              >
                {t("nav.gallery")}
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[#005F40] text-sm font-medium tracking-wide hover:text-[#D4AF37] transition-colors"
              >
                {t("nav.courses")}
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[#005F40] text-sm font-medium tracking-wide hover:text-[#D4AF37] transition-colors"
              >
                {t("nav.contact")}
              </a>
            </li>
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <select
              onChange={changeLang}
              defaultValue={i18n.language}
              className="border border-[#D4AF37]/20 bg-white px-3 py-2 rounded-md text-sm outline-none focus:border-[#D4AF37]"
            >
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>

            <button className="hidden lg:flex items-center gap-4 bg-[#005F40] py-3 px-6 rounded-md text-white hover:bg-[#00412c] transition-all duration-200">
              {t("nav.explore")}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#005F40] text-3xl"
            >
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[400px] pb-6" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-5 pt-4 border-t border-[#D4AF37]/10">
            <li>
              <a className="text-[#005F40] font-medium" href="#">
                {t("nav.home")}
              </a>
            </li>

            <li>
              <a className="text-[#005F40] font-medium" href="#">
                {t("nav.about")}
              </a>
            </li>

            <li>
              <a className="text-[#005F40] font-medium" href="#">
                {t("nav.gallery")}
              </a>
            </li>

            <li>
              <a className="text-[#005F40] font-medium" href="#">
                {t("nav.courses")}
              </a>
            </li>

            <li>
              <a className="text-[#005F40] font-medium" href="#">
                {t("nav.contact")}
              </a>
            </li>

            <button className="w-full bg-[#005F40] text-white py-3 rounded-md">
              {t("nav.explore")}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}