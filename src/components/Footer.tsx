import React from "react";
import { useTranslation } from "react-i18next";
import { BsInstagram } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlineMail } from "react-icons/md";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#003020] text-white mt-20 lg:mt-30">
      <div className="w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start m-auto px-4 sm:px-6 lg:px-6 py-12 sm:py-16 lg:py-24">
        <div>
          <h4 className="text-[#D4AF37] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            {t("contact.title")}
          </h4>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white mb-8 leading-tight">
            {t("contact.subtitle")}
          </h2>

          <div className="grid gap-5">
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                <IoLocationOutline className="text-[#D4AF37]" />
              </div>

              <div>
                <h4 className="text-[#D4AF37] text-[13px] tracking-[0.2em] uppercase font-medium mb-1">
                  {t("contact.addressTitle")}
                </h4>

                <h4 className="text-white/80 text-sm leading-relaxed whitespace-pre-line">
                  {t("contact.address")}
                </h4>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                <FaPhoneAlt className="text-[#D4AF37]" />
              </div>

              <div>
                <h4 className="text-[#D4AF37] text-[13px] tracking-[0.2em] uppercase font-medium mb-1">
                  {t("contact.phoneTitle")}
                </h4>

                <h4 className="text-white/80 text-sm leading-relaxed whitespace-pre-line">
                  +998 99 999 99 99
                </h4>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                <MdOutlineMail className="text-[#D4AF37]" />
              </div>

              <div>
                <h4 className="text-[#D4AF37] text-[13px] tracking-[0.2em] uppercase font-medium mb-1">
                  {t("contact.emailTitle")}
                </h4>

                <h4 className="text-white/80 text-sm leading-relaxed whitespace-pre-line break-all">
                  calligraphy@islamicciv.ae
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-[#D4AF37] text-xs tracking-[0.25em] uppercase font-semibold mb-4">
            {t("contact.newsletterTitle")}
          </h4>

          <h4 className="text-xl sm:text-2xl font-normal text-white mb-6">
            {t("contact.newsletterSubtitle")}
          </h4>

          <form action="" className="space-y-4">
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-medium mb-2">
                {t("contact.fullName")}
              </label>

              <input
                type="text"
                className="w-full bg-[#002A1C] border border-[#D4AF37]/20 focus:border-[#D4AF37]/60 text-white placeholder-white/25 px-4 py-3 text-sm outline-none transition-colors duration-200"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-medium mb-2">
                {t("contact.email")}
              </label>

              <input
                type="text"
                className="w-full bg-[#002A1C] border border-[#D4AF37]/20 focus:border-[#D4AF37]/60 text-white placeholder-white/25 px-4 py-3 text-sm outline-none transition-colors duration-200"
                placeholder="Your email"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-medium mb-2">
                {t("contact.message")}
              </label>

              <textarea
                rows={5}
                className="w-full bg-[#002A1C] border border-[#D4AF37]/20 focus:border-[#D4AF37]/60 text-white placeholder-white/25 px-4 py-3 text-sm outline-none transition-colors duration-200 resize-none"
                placeholder={t("contact.message")}
              ></textarea>
            </div>

            <button className="w-full py-4 bg-[#D4AF37] text-[#1C2B3A] text-sm font-bold tracking-widest uppercase hover:bg-[#C49D2A] transition-colors duration-200 cursor-pointer">
              {t("contact.send")}
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-[#D4AF37]">
        <div className="w-full max-w-[1280px] flex flex-col lg:flex-row gap-6 lg:gap-0 m-auto justify-between items-center px-4 sm:px-6 py-6">
          <div className="text-center lg:text-left">
            <h5 className="font-medium">Calligraphy Center</h5>
            <h4 className="text-sm text-white/70">
              Center of Islamic Civilization
            </h4>
          </div>

          <h5 className="text-center text-sm text-white/70 max-w-lg">
            © 2024 Center of Islamic Civilization — Abu Dhabi. All rights
            reserved. 
          </h5>

          <div className="flex items-center gap-2">
            <div className="w-9 h-9 border border-[#D4AF37]/25 flex items-center justify-center text-[#D4AF37]/70 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-all duration-200 cursor-pointer">
              <BsInstagram />
            </div>

            <div className="w-9 h-9 border border-[#D4AF37]/25 flex items-center justify-center text-[#D4AF37]/70 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-all duration-200 cursor-pointer">
              <FiYoutube />
            </div>

            <div className="w-9 h-9 border border-[#D4AF37]/25 flex items-center justify-center text-[#D4AF37]/70 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-all duration-200 cursor-pointer">
              <MdOutlineEmail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
