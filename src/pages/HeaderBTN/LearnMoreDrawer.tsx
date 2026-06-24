import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";


interface LearnMoreDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}
const INFO_SECTIONS = [
  {
    icon: "✦",
    title: "Our Heritage",
    body:
      "Founded in the heart of Abu Dhabi, the Center of Islamic Civilization has dedicated over three decades to preserving and teaching the ancient art of Arabic calligraphy — one of Islam's most revered visual traditions.",
  },
  {
    icon: "✦",
    title: "The Styles We Teach",
    body:
      "From the geometric precision of Kufic to the flowing curves of Naskh, Thuluth, Diwani, and Riq'a — our master calligraphers guide students through every major script tradition.",
  },
  {
    icon: "✦",
    title: "Who Can Join",
    body:
      "Beginners, students, and seasoned artists are all welcome. Courses run in Arabic and English, with flexible scheduling for in-person and online learners worldwide.",
  },
  {
    icon: "✦",
    title: "Our Mission",
    body:
      "We believe calligraphy is not merely decoration — it is a meditative practice and a living language. Our mission: to carry this sacred script into the next generation.",
  },
];

export default function LearnMoreDrawer({ isOpen, onClose }: LearnMoreDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
const navigate = useNavigate();

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Trap focus inside drawer
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => drawerRef.current?.focus(), 50);
    }
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
          zIndex: 40,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.35s ease",
          backdropFilter: isOpen ? "blur(2px)" : "blur(0px)",
        }}
      />

      {/* Drawer panel */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Learn more about the Calligraphy Center"
        tabIndex={-1}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          /* Mobile: full width, Desktop: 420px */
          width: "min(100vw, 420px)",
          background: "#0D2B1F",
          zIndex: 50,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          outline: "none",
        }}
      >
        {/* Gold top accent line */}
        <div style={{ height: 3, background: "linear-gradient(90deg, #C9A84C, #E8C96A, #C9A84C)", flexShrink: 0 }} />

        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            padding: "28px 28px 0",
            flexShrink: 0,
          }}
        >
          <div>
            <p
              style={{
                color: "#C9A84C",
                fontSize: 10,
                letterSpacing: "0.28em",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                margin: "0 0 8px",
              }}
            >
              ABOUT US
            </p>
            <h2
              style={{
                color: "#FFFFFF",
                fontSize: 26,
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Eternal Script,<br />
              <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Living Tradition</em>
            </h2>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close drawer"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#FFFFFF",
              width: 36,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
              marginLeft: 16,
              fontSize: 18,
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.15)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
          >
            ✕
          </button>
        </div>

        {/* Divider */}
        <div
          style={{
            margin: "24px 28px 0",
            height: 1,
            background: "rgba(201,168,76,0.3)",
            flexShrink: 0,
          }}
        />

        {/* Content */}
        <div style={{ padding: "24px 28px 32px", flex: 1 }}>
          {INFO_SECTIONS.map((section, i) => (
            <div
              key={i}
              style={{
                marginBottom: i < INFO_SECTIONS.length - 1 ? 28 : 0,
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.4s ease ${0.15 + i * 0.08}s, transform 0.4s ease ${0.15 + i * 0.08}s`,
              }}
            >
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span
                  style={{
                    color: "#C9A84C",
                    fontSize: 10,
                    marginTop: 5,
                    flexShrink: 0,
                  }}
                >
                  {section.icon}
                </span>
                <div>
                  <h3
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 17,
                      fontWeight: 400,
                      margin: "0 0 6px",
                    }}
                  >
                    {section.title}
                  </h3>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 13,
                      fontWeight: 300,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {section.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div
          style={{
            padding: "20px 28px 32px",
            borderTop: "1px solid rgba(201,168,76,0.2)",
            flexShrink: 0,
            opacity: isOpen ? 1 : 0,
            transition: "opacity 0.4s ease 0.5s",
          }}
        >
          <a
            href="/courses"
            style={{
              display: "block",
              textAlign: "center",
              background: "#C9A84C",
              color: "#0D2B1F",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "0.18em",
              padding: "14px 24px",
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#B8922A")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#C9A84C")}
            onClick={() => { navigate("/courses"); onClose(); }}
          >
            View Our Courses →
          </a>
        </div>
      </div>
    </>
  );
}