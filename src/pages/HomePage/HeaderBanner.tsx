import { FaArrowRightLong } from "react-icons/fa6";
import banner from "../../assets/imgs/Снимок экрана 2026-06-23 152209.png";
import { useTranslation } from "react-i18next";

interface HeaderBannerProps {
  onLearnMore: () => void;
}

export default function HeaderBanner({ onLearnMore }: HeaderBannerProps) {
  const { t } = useTranslation();
  return (
    <div className="relative mb-110">
      <img
        className="absolute h-screen top-0 left-0 z-[-50]"
        src={banner}
        alt=""
      />
      <div className="text-center pt-[100px]">
        <h5 className="text-[#D4AF37] text-xs tracking-[0.35em] uppercase mb-6 font-medium">
          {t("hero.title")}
        </h5>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-px bg-[#D4AF37]/60"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]"></div>
          <div className="w-12 h-px bg-[#D4AF37]/60"></div>
        </div>
        <h1 className="text-[70px] text-white font-playfair">
          {t("hero.subtitleStart")}{" "}
          <span className="text-[#d4af37] italic">{t("hero.subtitleItalic")}</span>
        </h1>
        <div className="flex items-center justify-center gap-3 mt-4 mb-6">
          <div className="w-12 h-px bg-[#D4AF37]/60"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]"></div>
          <div className="w-12 h-px bg-[#D4AF37]/60"></div>
        </div>
        <p className="text-[#ede8dccc] text-[20px] font-light">
          {t("hero.description")}
        </p>
        <div className="flex items-center m-auto justify-center mt-6 gap-4">
          <button className="flex bg-[#D4AF37] px-10 py-4 items-center gap-3 font-bold text-[15px]">
            {t("hero.btn1")} <FaArrowRightLong />
          </button>
          <button
            onClick={onLearnMore}
            className="border border-[#D4AF37] text-[16px] px-10 py-4 items-center text-white font-bold text-[15px]"
          >
            {t("hero.btn2")}
          </button>
        </div>
      </div>
    </div>
  );
}