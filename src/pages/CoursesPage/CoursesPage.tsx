import { useState } from "react";
import { useTranslation } from "react-i18next";

const COURSES = [
  {
    level: "Beginner",
    badgeKey: "courses.levels.beginner",
    title: "Naskh Script",
    subtitle: "The Foundation of Arabic Writing",
    duration: "8 weeks",
    sessions: "2x per week",
    lang: "Arabic & English",
    descKey: "courses.cards.0.desc",
    color: "#1A5C3A",
  },
  {
    level: "Intermediate",
    badgeKey: "courses.levels.intermediate",
    title: "Thuluth Script",
    subtitle: "The Script of Grandeur",
    duration: "10 weeks",
    sessions: "2x per week",
    lang: "Arabic & English",
    descKey: "courses.cards.1.desc",
    color: "#0D4A2F",
  },
  {
    level: "Intermediate",
    badgeKey: "courses.levels.intermediate",
    title: "Diwani Script",
    subtitle: "The Ottoman Court Style",
    duration: "10 weeks",
    sessions: "2x per week",
    lang: "Arabic & English",
    descKey: "courses.cards.2.desc",
    color: "#0D4A2F",
  },
  {
    level: "Advanced",
    badgeKey: "courses.levels.advanced",
    title: "Kufic Script",
    subtitle: "The Oldest Arabic Script",
    duration: "12 weeks",
    sessions: "3x per week",
    lang: "Arabic",
    descKey: "courses.cards.3.desc",
    color: "#0D2B1F",
  },
  {
    level: "Advanced",
    badgeKey: "courses.levels.advanced",
    title: "Riq'a Script",
    subtitle: "Speed and Simplicity",
    duration: "8 weeks",
    sessions: "2x per week",
    lang: "Arabic & English",
    descKey: "courses.cards.4.desc",
    color: "#0D2B1F",
  },
  {
    level: "Master",
    badgeKey: "courses.levels.master",
    title: "Jali Thuluth",
    subtitle: "The Art of Monumental Script",
    duration: "16 weeks",
    sessions: "3x per week",
    lang: "Arabic",
    descKey: "courses.cards.5.desc",
    color: "#7A4A00",
  },
];

export default function CoursesPage() {
  const { t } = useTranslation();
  const [activeLevel, setActiveLevel] = useState("All");

  const LEVELS = [
    { key: "All", label: t("courses.filterAll") },
    { key: "Beginner", label: t("courses.levels.beginner") },
    { key: "Intermediate", label: t("courses.levels.intermediate") },
    { key: "Advanced", label: t("courses.levels.advanced") },
    { key: "Master", label: t("courses.levels.master") },
  ];

  const filtered =
    activeLevel === "All"
      ? COURSES
      : COURSES.filter((c) => c.level === activeLevel);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F5F2EC",
        fontFamily: "'Cormorant Garamond', serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Montserrat:wght@300;400;600;700&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .course-card {
          animation: fadeUp 0.5s ease both;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .course-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.13);
        }
        .filter-btn {
          transition: all 0.2s ease;
          cursor: pointer;
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          padding: 8px 20px;
          border: 1.5px solid transparent;
        }
        .filter-btn.active {
          background: #0D2B1F;
          color: #C9A84C;
          border-color: #0D2B1F;
        }
        .filter-btn.inactive {
          background: transparent;
          color: #0D2B1F;
          border-color: rgba(13,43,31,0.3);
        }
        .filter-btn.inactive:hover {
          border-color: #0D2B1F;
        }
        .courses-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) {
          .courses-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .courses-grid { grid-template-columns: 1fr; }
          .courses-hero-title { font-size: 38px !important; }
          .filter-row { flex-wrap: wrap !important; gap: 8px !important; }
          .page-padding { padding: 0 16px !important; }
        }
      `}</style>

      {/* Hero banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #0D2B1F 0%, #0D4A2F 50%, #1A5C3A 100%)",
          padding: "80px 24px 60px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#C9A84C",
            fontSize: 11,
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600,
            letterSpacing: "0.3em",
            margin: "0 0 16px",
          }}
        >
          {t("courses.badge")}
        </p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 18 }}>
          <div style={{ height: 1, width: 56, background: "#C9A84C", opacity: 0.5 }} />
          <div style={{ width: 6, height: 6, background: "#C9A84C", transform: "rotate(45deg)" }} />
          <div style={{ height: 1, width: 56, background: "#C9A84C", opacity: 0.5 }} />
        </div>

        <h1
          className="courses-hero-title"
          style={{ color: "#FFFFFF", fontSize: 58, fontWeight: 300, margin: "0 0 14px", lineHeight: 1.1 }}
        >
          {t("courses.titleStart")}{" "}
          <em style={{ color: "#C9A84C", fontStyle: "italic" }}>{t("courses.titleItalic")}</em>
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            fontSize: 15,
            margin: "0 auto",
            maxWidth: 480,
            lineHeight: 1.7,
          }}
        >
          {t("courses.description")}
        </p>
      </div>

      {/* Filter */}
      <div
        style={{
          background: "#FFFFFF",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="filter-row" style={{ display: "flex", gap: 10 }}>
          {LEVELS.map((level) => (
            <button
              key={level.key}
              onClick={() => setActiveLevel(level.key)}
              className={`filter-btn ${activeLevel === level.key ? "active" : "inactive"}`}
            >
              {level.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div
        className="page-padding"
        style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px 80px" }}
      >
        <div className="courses-grid">
          {filtered.map((course, i) => (
            <div
              key={course.title}
              className="course-card"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {/* Card top */}
              <div style={{ background: course.color, padding: "28px 28px 24px" }}>
                <span
                  style={{
                    display: "inline-block",
                    background: "rgba(201,168,76,0.15)",
                    border: "1px solid rgba(201,168,76,0.4)",
                    color: "#C9A84C",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    padding: "4px 12px",
                    marginBottom: 16,
                  }}
                >
                  {t(course.badgeKey).toUpperCase()}
                </span>
                <h2 style={{ color: "#FFFFFF", fontSize: 26, fontWeight: 400, margin: "0 0 4px", lineHeight: 1.2 }}>
                  {course.title}
                </h2>
                <p
                  style={{
                    color: "#C9A84C",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 12,
                    fontWeight: 400,
                    margin: 0,
                    letterSpacing: "0.05em",
                    fontStyle: "italic",
                  }}
                >
                  {course.subtitle}
                </p>
              </div>

              {/* Card bottom */}
              <div
                style={{
                  background: "#FFFFFF",
                  padding: "24px 28px 28px",
                  border: "1px solid rgba(0,0,0,0.07)",
                  borderTop: "none",
                }}
              >
                <p
                  style={{
                    color: "#555",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 13,
                    fontWeight: 300,
                    lineHeight: 1.7,
                    margin: "0 0 20px",
                  }}
                >
                  {t(course.descKey)}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    marginBottom: 22,
                    paddingBottom: 20,
                    borderBottom: "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  {[
                    { label: t("courses.duration"), value: course.duration },
                    { label: t("courses.sessions"), value: course.sessions },
                    { label: t("courses.language"), value: course.lang },
                  ].map((item) => (
                    <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 11,
                          color: "#999",
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}
                      >
                        {item.label}
                      </span>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: "#333", fontWeight: 500 }}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  style={{
                    width: "100%",
                    background: "#0D2B1F",
                    color: "#C9A84C",
                    border: "none",
                    padding: "13px 24px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "background 0.2s ease, color 0.2s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#C9A84C"; e.currentTarget.style.color = "#0D2B1F"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#0D2B1F"; e.currentTarget.style.color = "#C9A84C"; }}
                >
                  {t("courses.enroll")}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#999", fontFamily: "'Montserrat', sans-serif" }}>
            {t("courses.empty")}
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div style={{ background: "#0D2B1F", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#C9A84C", fontSize: 11, fontFamily: "'Montserrat', sans-serif", fontWeight: 600, letterSpacing: "0.3em", margin: "0 0 12px" }}>
          {t("courses.ctaBadge")}
        </p>
        <h2 style={{ color: "#FFFFFF", fontSize: 36, fontWeight: 300, margin: "0 0 24px" }}>
          {t("courses.ctaTitleStart")}{" "}
          <em style={{ color: "#C9A84C" }}>{t("courses.ctaTitleItalic")}</em>
        </h2>
        <a
          href="/contact"
          style={{
            display: "inline-block",
            background: "#C9A84C",
            color: "#0D2B1F",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: "0.18em",
            padding: "14px 36px",
            textDecoration: "none",
            textTransform: "uppercase",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#B8922A")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#C9A84C")}
        >
          {t("courses.ctaBtn")}
        </a>
      </div>
    </div>
  );
}