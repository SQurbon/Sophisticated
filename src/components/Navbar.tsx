import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLang = (e) => {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  };

  return (
    <div className="bg-[#faf9f6cc] fixed top-0 left-0 w-full bg-white shadow-md relative z-50s">
      <div className="w-[1280px] m-auto py-4 flex justify-around">
        <div className="">
          <h6 className="text-[#D4AF37] text-[10px] tracking-[0.2em] uppercase font-medium leading-none font-serif">
            Center of Islamic Civilization
          </h6>
          <h3 className="text-[#005F40] text-base font-semibold leading-tight ">
            Calligraphy Center
          </h3>
        </div>
        <ul className="hidden lg:flex items-center gap-10">
          <li>
            <a
              href=""
              className="text-[#005F40] text-sm font-medium tracking-wide hover:text-[#D4AF37] transition-colors duration-200 relative group"
            >
              {t("nav.home")}
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-[#005F40] text-sm font-medium tracking-wide hover:text-[#D4AF37] transition-colors duration-200 relative group"
            >
              {t("nav.about")}
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-[#005F40] text-sm font-medium tracking-wide hover:text-[#D4AF37] transition-colors duration-200 relative group"
            >
              {t("nav.gallery")}
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-[#005F40] text-sm font-medium tracking-wide hover:text-[#D4AF37] transition-colors duration-200 relative group"
            >
              {t("nav.courses")}
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-[#005F40] text-sm font-medium tracking-wide hover:text-[#D4AF37] transition-colors duration-200 relative group"
            >
              {t("nav.contact")}
            </a>
          </li>
        </ul>
        <div className="flex gap-4">
          <select
            onChange={changeLang}
            defaultValue={i18n.language}
            className="border p-2 rounded"
          >
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>
          <button className="hidden lg:flex items-center gap-4 bg-[#005F40] py-2 px-6 rounded-md text-white">
            {t("nav.explore")}
          </button>
        </div>
      </div>
    </div>
  );
}
