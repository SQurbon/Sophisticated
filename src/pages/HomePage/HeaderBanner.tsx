import { FaArrowRightLong } from "react-icons/fa6";
import banner from "../../assets/imgs/Снимок экрана 2026-06-23 152209.webp";
import { useTranslation } from "react-i18next";

interface HeaderBannerProps {
  onLearnMore: () => void;
}

export default function HeaderBanner({
  onLearnMore,
}: HeaderBannerProps) {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <img
        className="absolute inset-0 w-full h-full object-cover z-[-2]"
        src={banner}
        alt=""
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45 z-[-1]" />

      {/* Content */}
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-6xl mx-auto">
          <h5 className="text-[#D4AF37] text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.35em] uppercase mb-4 sm:mb-6 font-medium">
            {t("hero.title")}
          </h5>

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 sm:w-12 h-px bg-[#D4AF37]/60"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]"></div>
            <div className="w-8 sm:w-12 h-px bg-[#D4AF37]/60"></div>
          </div>

          <h1 className="text-[38px] sm:text-[52px] md:text-[65px] lg:text-[80px] xl:text-[90px] text-white font-playfair leading-tight">
            {t("hero.subtitleStart")}{" "}
            <span className="text-[#D4AF37] italic">
              {t("hero.subtitleItalic")}
            </span>
          </h1>

          <div className="flex items-center justify-center gap-3 mt-4 mb-6">
            <div className="w-8 sm:w-12 h-px bg-[#D4AF37]/60"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]"></div>
            <div className="w-8 sm:w-12 h-px bg-[#D4AF37]/60"></div>
          </div>

          <p className="text-[#ede8dccc] text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center mt-8 gap-4">
            <button className="w-full sm:w-auto flex justify-center items-center bg-[#D4AF37] px-8 lg:px-10 py-4 gap-3 font-bold text-[15px] text-[#1c2b3a] hover:bg-[#c7a22f] transition-all duration-300">
              {t("hero.btn1")}
              <FaArrowRightLong />
            </button>

            <button
              onClick={onLearnMore}
              className="w-full sm:w-auto border border-[#D4AF37] px-8 lg:px-10 py-4 text-white font-bold text-[15px] hover:bg-[#D4AF37] hover:text-[#1c2b3a] transition-all duration-300"
            >
              {t("hero.btn2")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}