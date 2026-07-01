import { useTranslation } from "react-i18next";
import { BsDroplet } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa6";
import { LuPenLine } from "react-icons/lu";
import { TbClockHour3 } from "react-icons/tb";

export default function Education() {
  const { t } = useTranslation();

  return (
    <div className="max-w-[1280px] mx-auto my-12 px-4 sm:px-6 lg:px-8">
      {/* Sarlavha Qismi */}
      <h5 className="text-[#D4AF37] text-center text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase mb-2 sm:mb-3">
        {t("education.title")}
      </h5>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center text-[#1C2B3A] font-normal mb-4 sm:mb-5 px-2">
        {t("education.subtitle")}
      </h1>
      
      {/* Dekorativ Chiziq */}
      <div className="flex items-center justify-center gap-3 mb-5 max-w-xs sm:max-w-md mx-auto">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/50"></div>
        <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37] flex-shrink-0"></div>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#D4AF37]/50"></div>
      </div>
      
      {/* Tavsif matni */}
      <p className="text-[#6B7280] text-center max-w-xl mx-auto mb-10 text-sm sm:text-[15px] leading-relaxed px-2">
        {t("education.description")}
      </p>

      {/* Kartochkalar Grid tizimi */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        
        {/* 1. Beginner Card */}
        <div className="flex flex-col h-full transition-shadow duration-300 hover:shadow-xl bg-white border border-[#D4AF37]/25 hover:border-[#D4AF37]/60">
          <div className="p-6 sm:p-8 flex-1 flex flex-col">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-5 sm:mb-6 bg-[#EDE8DC] text-[#005F40] flex-shrink-0">
              <LuPenLine className="size-6 sm:size-8" />
            </div>
            <h5 className="text-[11px] sm:text-xs tracking-[0.2em] uppercase font-semibold mb-1 text-[#D4AF37]">
              {t("education.beginner.level")}
            </h5>
            <h1 className="text-lg sm:text-xl font-normal mb-3 sm:mb-4 text-[#1C2B3A]">
              {t("education.beginner.title")}
            </h1>
            <p className="text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 text-[#6B7280] flex-1">
              {t("education.beginner.description")}
            </p>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#6B7280]">
              <div className="flex items-center gap-2.5">
                <TbClockHour3 className="flex-shrink-0" />
                <span>{t("education.beginner.duration")}</span>
              </div>
              <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
                <CiCalendar className="flex-shrink-0" />
                <span>{t("education.beginner.schedule")}</span>
              </div>
            </div>
            <div className="space-y-2 mb-1 border-t border-[#D4AF37]/15 pt-5 sm:pt-6">
              <div className="flex items-start gap-2.5 text-xs text-[#6B7280]">
                <div className="w-1.5 h-1.5 rotate-45 mt-1.5 flex-shrink-0 bg-[#D4AF37]"></div>
                <h3>{t("education.beginner.feature1")}</h3>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#6B7280]">
                <div className="w-1.5 h-1.5 rotate-45 mt-1.5 flex-shrink-0 bg-[#D4AF37]"></div>
                <h3>{t("education.beginner.feature2")}</h3>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#6B7280]">
                <div className="w-1.5 h-1.5 rotate-45 mt-1.5 flex-shrink-0 bg-[#D4AF37]"></div>
                <h3>{t("education.beginner.feature3")}</h3>
              </div>
            </div>
          </div>
          <div className="px-6 sm:px-8 pt-5 sm:pt-6 pb-8 sm:pb-11 border-t border-[#D4AF37]/20 bg-gray-50/50">
            <div className="flex items-center justify-between mb-4 gap-2">
              <h5 className="text-[11px] sm:text-xs uppercase tracking-widest text-[#6B7280]">
                {t("education.beginner.fee")}
              </h5>
              <h5 className="text-lg sm:text-xl font-bold text-[#005F40] whitespace-nowrap">
                {t("education.beginner.price")}
              </h5>
            </div>
            <button className="w-full py-3 sm:py-3.5 text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-200 bg-[#005F40] text-white hover:bg-[#004530] focus:outline-none focus:ring-2 focus:ring-[#005F40]/50">
              {t("education.beginner.button")}
            </button>
          </div>
        </div>

        {/* 2. Intermediate Card (Premium/Highlighted) */}
        <div className="flex flex-col h-full transition-shadow duration-300 hover:shadow-xl bg-[#005F40] border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 md:col-span-2 lg:col-span-1">
          <div className="p-6 sm:p-8 flex-1 flex flex-col">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-5 sm:mb-6 bg-white/10 text-[#D4AF37] flex-shrink-0">
              <BsDroplet className="size-6 sm:size-8" />
            </div>
            <h5 className="text-[11px] sm:text-xs tracking-[0.2em] uppercase font-semibold mb-1 text-[#D4AF37]">
              {t("education.intermediate.level")}
            </h5>
            <h1 className="text-lg sm:text-xl font-normal mb-3 sm:mb-4 text-white">
              {t("education.intermediate.title")}
            </h1>
            <p className="text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 text-white/75 flex-1">
              {t("education.beginner.description")}
            </p>
            <div className="space-y-2.5 text-xs sm:text-sm text-white/75">
              <div className="flex items-center gap-2.5">
                <TbClockHour3 className="flex-shrink-0" />
                <span>{t("education.intermediate.duration")}</span>
              </div>
              <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
                <CiCalendar className="flex-shrink-0" />
                <span>{t("education.intermediate.schedule")}</span>
              </div>
            </div>
            <div className="space-y-2 mb-1 border-t border-[#D4AF37]/15 pt-5 sm:pt-6 text-white/75">
              <div className="flex items-start gap-2.5 text-xs">
                <div className="w-1.5 h-1.5 rotate-45 mt-1.5 flex-shrink-0 bg-[#D4AF37]"></div>
                <h3>{t("education.intermediate.feature1")}</h3>
              </div>
              <div className="flex items-start gap-2.5 text-xs">
                <div className="w-1.5 h-1.5 rotate-45 mt-1.5 flex-shrink-0 bg-[#D4AF37]"></div>
                <h3>{t("education.intermediate.feature2")}</h3>
              </div>
              <div className="flex items-start gap-2.5 text-xs">
                <div className="w-1.5 h-1.5 rotate-45 mt-1.5 flex-shrink-0 bg-[#D4AF37]"></div>
                <h3>{t("education.intermediate.feature3")}</h3>
              </div>
            </div>
          </div>
          <div className="px-6 sm:px-8 pt-5 sm:pt-6 pb-8 sm:pb-11 border-t border-white/20 bg-black/10">
            <div className="flex items-center justify-between mb-4 gap-2">
              <h5 className="text-[11px] sm:text-xs uppercase tracking-widest text-white/50">
                {t("education.intermediate.fee")}
              </h5>
              <h5 className="text-lg sm:text-xl font-bold text-[#D4AF37] whitespace-nowrap">
                {t("education.intermediate.price")}
              </h5>
            </div>
            <button className="w-full py-3 sm:py-3.5     text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-200 bg-[#D4AF37] text-[#1C2B3A] hover:bg-[#C49D2A] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50">
              {t("education.intermediate.button")}
            </button>
          </div>
        </div>

        {/* 3. Masterclass Card */}
        <div className="flex flex-col h-full transition-shadow duration-300 hover:shadow-xl bg-white border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 md:col-span-2 md:mx-auto lg:mx-0 md:max-w-md lg:max-w-none lg:col-span-1">
          <div className="p-6 sm:p-8 flex-1 flex flex-col">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-5 sm:mb-6 bg-[#EDE8DC] text-[#005F40] flex-shrink-0">
              <FaRegStar className="size-6 sm:size-8" />
            </div>
            <h5 className="text-[11px] sm:text-xs tracking-[0.2em] uppercase font-semibold mb-1 text-[#D4AF37]">
              {t("education.masterclass.level")}
            </h5>
            <h1 className="text-lg sm:text-xl font-normal mb-3 sm:mb-4 text-[#1C2B3A]">
              {t("education.masterclass.title")}
            </h1>
            <p className="text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 text-[#6B7280] flex-1">
              {t("education.masterclass.description")}
            </p>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#6B7280]">
              <div className="flex items-center gap-2.5">
                <TbClockHour3 className="flex-shrink-0" />
                <span>{t("education.masterclass.duration")}</span>
              </div>
              <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
                <CiCalendar className="flex-shrink-0" />
                <span>{t("education.masterclass.schedule")}</span>
              </div>
            </div>
            <div className="space-y-2 mb-1 border-t border-[#D4AF37]/15 pt-5 sm:pt-6">
              <div className="flex items-start gap-2.5 text-xs text-[#6B7280]">
                <div className="w-1.5 h-1.5 rotate-45 mt-1.5 flex-shrink-0 bg-[#D4AF37]"></div>
                <h3>{t("education.masterclass.feature1")}</h3>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#6B7280]">
                <div className="w-1.5 h-1.5 rotate-45 mt-1.5 flex-shrink-0 bg-[#D4AF37]"></div>
                <h3>{t("education.masterclass.feature2")}</h3>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#6B7280]">
                <div className="w-1.5 h-1.5 rotate-45 mt-1.5 flex-shrink-0 bg-[#D4AF37]"></div>
                <h3>{t("education.masterclass.feature3")}</h3>
              </div>
            </div>
          </div>
          <div className="px-6 sm:px-8 pt-5 sm:pt-6 pb-8 sm:pb-11 border-t border-[#D4AF37]/20 bg-gray-50/50">
            <div className="flex items-center justify-between mb-4 gap-2">
              <h5 className="text-[11px] sm:text-xs uppercase tracking-widest text-[#6B7280]">
                {t("education.masterclass.fee")}
              </h5>
              <h5 className="text-lg sm:text-xl font-bold text-[#005F40] whitespace-nowrap">
                {t("education.masterclass.price")}
              </h5>
            </div>
            <button className="w-full py-3 sm:py-3.5 text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-200 bg-[#005F40] text-white hover:bg-[#004530] focus:outline-none focus:ring-2 focus:ring-[#005F40]/50">
              {t("education.masterclass.button")}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}