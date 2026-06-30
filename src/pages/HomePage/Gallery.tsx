import { products } from "@/components/GalleryCollections";
import React, { useTransition } from "react";
import { useTranslation } from "react-i18next";

export default function Gallery() {
  const { t } = useTranslation();
  return (
    <div className="max-w-[1280px] m-auto">
      <h5 className="text-[#D4AF37] text-center text-xs font-semibold tracking-[0.25em] uppercase mb-3">
        {t("gallery.title")}
      </h5>
      <h1 className="text-4xl lg:text-5xl text-center text-[#1C2B3A] font-normal mb-5 ">
        {t("gallery.subtitle")}
      </h1>
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#D4AF37]/50"></div>
        <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]"></div>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#D4AF37]/50"></div>
      </div>
      <p className="text-[#6B7280] max-w-xl mx-auto my-5 text-[15px] leading-relaxed">
        {t("gallery.description")}
      </p>
      <div className="columns-1 sm:columns-2 lg:columns-3  gap-6 space-y-6 mt-20">
        {products.map((items) => (
          <div className="shadow-lg  break-inside-avoid group relative overflow-hidden bg-white border border-[#D4AF37]/20 cursor-pointer">
              <img
                className="h-75 w-full overflow-hidden bg-[#EDE8DC]"
                src={items.image}
                alt=""
              />
            <div className="px-5 py-4 border-t border-[#D4AF37]/20">
              <h4 className="text-[#1C2B3A] font-medium text-sm">{items.title}</h4>
              <h4 className="text-[#D4AF37] text-xs tracking-wide font-medium mt-0.5">{items.span}</h4>
            </div>
          </div>
        ))}
      </div>
        <button className="px-10 py-4 border flex m-auto justify-center   border-[#005F40] text-[#005F40] text-sm font-semibold tracking-widest uppercase hover:bg-[#005F40] hover:text-white transition-all duration-300">{t("gallery.button")}</button>
    </div>
  );
}
