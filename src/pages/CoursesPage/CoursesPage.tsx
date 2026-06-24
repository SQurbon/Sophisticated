import { useState } from "react";

const COURSES = [
  {
    level: "Beginner",
    badge: "Boshlang'ich",
    title: "Naskh Script",
    subtitle: "The Foundation of Arabic Writing",
    duration: "8 weeks",
    sessions: "2x per week",
    lang: "Arabic & English",
    desc: "The most widely used script in the Arab world. Learn the foundational letterforms, proportions, and ink techniques used by scribes for centuries.",
    color: "#1A5C3A",
  },
  {
    level: "Intermediate",
    badge: "O'rta",
    title: "Thuluth Script",
    subtitle: "The Script of Grandeur",
    duration: "10 weeks",
    sessions: "2x per week",
    lang: "Arabic & English",
    desc: "One of the most majestic scripts in Islamic art. Master the sweeping curves and architectural proportions that adorn mosques and manuscripts worldwide.",
    color: "#0D4A2F",
  },
  {
    level: "Intermediate",
    badge: "O'rta",
    title: "Diwani Script",
    subtitle: "The Ottoman Court Style",
    duration: "10 weeks",
    sessions: "2x per week",
    lang: "Arabic & English",
    desc: "Developed in the Ottoman imperial court, Diwani is celebrated for its flowing, ornate style. A script of elegance and prestige.",
    color: "#0D4A2F",
  },
  {
    level: "Advanced",
    badge: "Ilg'or",
    title: "Kufic Script",
    subtitle: "The Oldest Arabic Script",
    duration: "12 weeks",
    sessions: "3x per week",
    lang: "Arabic",
    desc: "The earliest Arabic script — angular, geometric, and deeply spiritual. Study the ancient forms found in the oldest copies of the Quran.",
    color: "#0D2B1F",
  },
  {
    level: "Advanced",
    badge: "Ilg'or",
    title: "Riq'a Script",
    subtitle: "Speed and Simplicity",
    duration: "8 weeks",
    sessions: "2x per week",
    lang: "Arabic & English",
    desc: "The everyday script of the Arab world — fast, clear, and elegant. Learn the cursive style used in daily handwriting across the Arab world.",
    color: "#0D2B1F",
  },
  {
    level: "Master",
    badge: "Master",
    title: "Jali Thuluth",
    subtitle: "The Art of Monumental Script",
    duration: "16 weeks",
    sessions: "3x per week",
    lang: "Arabic",
    desc: "The pinnacle of Arabic calligraphy. Jali Thuluth is used for monumental inscriptions on mosques and palaces. Reserved for dedicated students.",
    color: "#7A4A00",
  },
];

const LEVELS = ["Barchasi", "Beginner", "Intermediate", "Advanced", "Master"];

const LEVEL_COLORS: Record<string, string> = {
  Beginner: "#1A5C3A",
  Intermediate: "#0D4A2F",
  Advanced: "#0D2B1F",
  Master: "#7A4A00",
};

export default function CoursesPage() {
  const [activeLevel, setActiveLevel] = useState("Barchasi");

  const filtered =
    activeLevel === "Barchasi"
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

        /* Responsive grid */
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
          .hero-title { font-size: 38px !important; }
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
          CENTER OF ISLAMIC CIVILIZATION
        </p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 18 }}>
          <div style={{ height: 1, width: 56, background: "#C9A84C", opacity: 0.5 }} />
          <div style={{ width: 6, height: 6, background: "#C9A84C", transform: "rotate(45deg)" }} />
          <div style={{ height: 1, width: 56, background: "#C9A84C", opacity: 0.5 }} />
        </div>

        <h1
          className="hero-title"
          style={{
            color: "#FFFFFF",
            fontSize: 58,
            fontWeight: 300,
            margin: "0 0 14px",
            lineHeight: 1.1,
          }}
        >
          Our <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Courses</em>
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
          From the first stroke to monumental inscription — find the course that matches your journey.
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
              key={level}
              onClick={() => setActiveLevel(level)}
              className={`filter-btn ${activeLevel === level ? "active" : "inactive"}`}
            >
              {level}
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
              {/* Card top — dark */}
              <div
                style={{
                  background: course.color,
                  padding: "28px 28px 24px",
                }}
              >
                {/* Badge */}
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
                  {course.badge.toUpperCase()}
                </span>

                <h2
                  style={{
                    color: "#FFFFFF",
                    fontSize: 26,
                    fontWeight: 400,
                    margin: "0 0 4px",
                    lineHeight: 1.2,
                  }}
                >
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

              {/* Card bottom — light */}
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
                  {course.desc}
                </p>

                {/* Meta info */}
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
                    { label: "Davomiyligi", value: course.duration },
                    { label: "Darslar", value: course.sessions },
                    { label: "Til", value: course.lang },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                    >
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
                      <span
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 12,
                          color: "#333",
                          fontWeight: 500,
                        }}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Enroll button */}
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
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#C9A84C") && (e.currentTarget.style.color = "#0D2B1F")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#0D2B1F") && (e.currentTarget.style.color = "#C9A84C")}
                >
                  Ro'yxatdan o'tish →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#999", fontFamily: "'Montserrat', sans-serif" }}>
            Hozircha bu darajada kurs yo'q.
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div
        style={{
          background: "#0D2B1F",
          padding: "60px 24px",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#C9A84C", fontSize: 11, fontFamily: "'Montserrat', sans-serif", fontWeight: 600, letterSpacing: "0.3em", margin: "0 0 12px" }}>
          SAVOLINGIZ BORMI?
        </p>
        <h2 style={{ color: "#FFFFFF", fontSize: 36, fontWeight: 300, margin: "0 0 24px" }}>
          Biz bilan <em style={{ color: "#C9A84C" }}>bog'laning</em>
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
          Murojaat qilish →
        </a>
      </div>
    </div>
  );
}