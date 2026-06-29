import { useTranslation } from "react-i18next";
// images
import aboutPhoto from "../../assets/imgs/aboutsection.avif";
export default function About() {
  const { t } = useTranslation();
  return (
    <div className="w-[1280px] m-auto">
      <h5 className="grid m-auto text-center font-montserrat text-[#D4AF37] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
        {t("about.sectionLabel")}
      </h5>
      <h1 className=" grid text-center font-playfair text-4xl lg:text-5xl text-[#1C2B3A] font-normal">
        {t("about.pageTitle")}
      </h1>
      <div className="flex items-center gap-4 my-6 justify-center">
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/50"></div>
          <div className="w-2 h-2 rotate-45 bg-[#D4AF37]"></div>
          <div className="w-1 h-1 rotate-45 bg-[#D4AF37]/60"></div>
          <div className="w-2 h-2 rotate-45 bg-[#D4AF37]"></div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#D4AF37]/50"></div>
        </div>
      </div>
      <div className="flex gap-16">
        <div className="relative w-[35%]">
          <div className="relative  bg-[#EDE8DC]">
            <img
              src={aboutPhoto}
              alt=""
              className="w-full h-[560px] object-cover"
            />
            <div className="absolute inset-4 border border-[#D4AF37]/40 pointer-events-none"></div>
            <div className="absolute inset-3 border border-[#D4AF37]/20 pointer-events-none"></div>
            <div className="absolute -bottom-10 -right-6  bg-[#005F40] text-white px-8 py-6 shadow-xl">
              <p className="text-4xl font-bold text-[#D4AF37] leading-none">
                35+
              </p>
              <p>{t("about.statYears")}</p>
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <h6 className="text-[#D4AF37] font-montserrat text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            {t("about.established")}
          </h6>
          <h1 className="text-3xl lg:text-4xl font-playfair text-[#1C2B3A] mb-6 font-normal leading-snug">
            {t("about.titleStart")}{" "}
            <span className="italic">{t("about.titleItalic")}</span>
          </h1>
          <div className="w-20 h-0.5 bg-[#d4af37]"></div>
          <p className="text-[#4A5568] leading-relaxed mt-4 text-[15px]">
            {t("about.p1")}
          </p>
          <br />
          <p className="text-[#4A5568] leading-relaxed mb-5 text-[15px]">
            {t("about.p2")}
          </p>
          <h5 className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase font-semibold">
            {t("about.mastersTitle")}
          </h5>
          <div className="flex gap-3 items-center">
            <div>
              <div className="flex gap-3 items-center">
                <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37] mt-2.5 flex-shrink-0"></div>
                <div className="mt-3">
                  <p className="text-[#1C2B3A] font-semibold text-lg ">
                    {t("about.masters.0.name")}
                  </p>
                  <p className="text-[#6B7280] text-[17px] font-extralight mt-0.5">
                    {t("about.masters.0.style")}
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex gap-3 items-center">
                  <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37] mt-2.5 flex-shrink-0"></div>
                  <div>
                    <p className="text-[#1C2B3A] font-semibold text-lg ">
                      {t("about.masters.1.name")}
                    </p>
                    <p className="text-[#6B7280] text-[17px] font-extralight mt-0.5">
                      {t("about.masters.1.style")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex gap-3 items-center">
                  <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37] mt-2.5 flex-shrink-0"></div>
                  <div>
                    <p className="text-[#1C2B3A] font-semibold text-lg ">
                      {t("about.masters.2.name")}
                    </p>
                    <p className="text-[#6B7280] text-[17px] font-extralight mt-0.5">
                      {t("about.masters.2.style")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
