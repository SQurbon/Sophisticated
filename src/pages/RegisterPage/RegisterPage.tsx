import { useState } from "react";
import { useTranslation } from "react-i18next";
const COLORS = {
  cream: "#F7F3E9", // page background
  creamHeader: "#F3EEE0", // header strip
  forest: "#155843", // primary green (cards, buttons)
  forestDark: "#0E4033", // hover state
  gold: "#C79A3C", // accent / "most popular" badge / bullets
  ink: "#1F2A24", // headings on cream
  slate: "#5B6B78", // body copy
  line: "#E4DFCF", // hairline borders
};

interface Course {
  id: string;
  level: string;
  title: string;
  duration: string;
  schedule: string;
  fee: string;
}

const COURSES: Course[] = [
  {
    id: "foundation",
    level: "Beginner",
    title: "Foundation of Script",
    duration: "12 Weeks",
    schedule: "Saturdays 10:00–13:00",
    fee: "AED 2,400",
  },
  {
    id: "naskh-thuluth",
    level: "Intermediate",
    title: "Naskh & Thuluth Mastery",
    duration: "16 Weeks",
    schedule: "Wednesdays 18:00–21:00",
    fee: "AED 3,800",
  },
  {
    id: "illumination",
    level: "Masterclass",
    title: "The Art of Illumination",
    duration: "20 Weeks",
    schedule: "Fridays 09:00–14:00",
    fee: "AED 6,200",
  },
];

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  courseId: string;
  experience: string;
  message: string;
};

const INITIAL_STATE: FormState = {
  fullName: "",
  email: "",
  phone: "",
  courseId: COURSES[0].id,
  experience: "none",
  message: "",
};

export default function RegisterPage() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});

  const selectedCourse =
    COURSES.find((c) => c.id === form.courseId) ?? COURSES[0];

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) next.fullName = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "Enter a valid email address.";
    if (!form.phone.trim()) next.phone = "Please enter a phone number.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    // Wire this up to your backend / API route.
    console.log("Register submission:", form);
    setSubmitted(true);
  }

  return (
    <div
      className="min-h-screen font-sans"
      style={{ backgroundColor: COLORS.cream, color: COLORS.ink }}
    >
      {/* ---------------------------------------------------------------- */}
      {/* Header — mirrors the source site's nav                          */}
      {/* ---------------------------------------------------------------- */}
      <header
        className="border-b"
        style={{
          backgroundColor: COLORS.creamHeader,
          borderColor: COLORS.line,
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
          <a href="/" className="flex items-center gap-3">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke={COLORS.gold}
              strokeWidth="1.5"
            >
              <path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5L12 2z" />
            </svg>
            <span>
              <span
                className="block text-[11px] font-semibold tracking-[0.18em]"
                style={{ color: COLORS.gold }}
              >
                CENTER OF ISLAMIC CIVILIZATION
              </span>
              <span
                className="block font-serif text-lg leading-tight"
                style={{ color: COLORS.forest }}
              >
                Calligraphy Center
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-10 text-[15px] md:flex">
            {["Home", "About", "Gallery", "Courses", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="transition-colors hover:opacity-70"
                style={{ color: COLORS.ink }}
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#register-form"
            className="hidden rounded-sm px-5 py-2.5 text-sm font-semibold text-white transition-colors sm:inline-block"
            style={{ backgroundColor: COLORS.forest }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.forestDark)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.forest)
            }
          >
            Explore Now
          </a>
        </div>
      </header>

      {/* ---------------------------------------------------------------- */}
      {/* Page hero                                                        */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-3xl px-6 pb-4 pt-16 text-center sm:px-10">
        <span
          className="text-[11px] font-semibold tracking-[0.2em]"
          style={{ color: COLORS.gold }}
        >
          JOIN THE CENTER
        </span>
        <h1
          className="mt-3 font-serif text-4xl leading-tight sm:text-5xl"
          style={{ color: COLORS.forest }}
        >
          Register for a Course
        </h1>
        <p
          className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed"
          style={{ color: COLORS.slate }}
        >
          Reserve your place in one of our classical Arabic calligraphy
          programs. Choose a course below, share your details, and our team will
          confirm your enrollment within two business days.
        </p>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Form + course summary                                            */}
      {/* ---------------------------------------------------------------- */}
      <section
        id="register-form"
        className="mx-auto max-w-6xl px-6 pb-24 pt-8 sm:px-10"
      >
        {submitted ? (
          <SuccessPanel
            course={selectedCourse}
            onReset={() => {
              setForm(INITIAL_STATE);
              setSubmitted(false);
            }}
          />
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            {/* ---- Form card ---- */}
            <form
              onSubmit={handleSubmit}
              noValidate
              className="border bg-white p-8 sm:p-10"
              style={{ borderColor: COLORS.line }}
            >
              <Field label="Full Name" error={errors.fullName}>
                <input
                  type="text"
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  placeholder="e.g. Amina Yusuf"
                  className={inputClass(!!errors.fullName)}
                />
              </Field>

              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Email" error={errors.email}>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="you@example.com"
                    className={inputClass(!!errors.email)}
                  />
                </Field>

                <Field label="Phone" error={errors.phone}>
                  <input
                    type="tel"
                    value={form.phone}
                    inputMode="numeric"
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="+971 5X XXX XXXX"
                    className={inputClass(!!errors.phone)}
                  />
                </Field>
              </div>

              <Field label="Course">
                <select
                  value={form.courseId}
                  onChange={(e) => update("courseId", e.target.value)}
                  className={inputClass(false)}
                >
                  {COURSES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title} — {c.fee}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Prior Experience">
                <div className="flex flex-wrap gap-3">
                  {[
                    { id: "none", label: "None" },
                    { id: "some", label: "Some practice" },
                    { id: "trained", label: "Formally trained" },
                  ].map((opt) => (
                    <button
                      type="button"
                      key={opt.id}
                      onClick={() => update("experience", opt.id)}
                      className="rounded-sm border px-4 py-2 text-sm transition-colors"
                      style={
                        form.experience === opt.id
                          ? {
                              backgroundColor: COLORS.forest,
                              borderColor: COLORS.forest,
                              color: "#fff",
                            }
                          : { borderColor: COLORS.line, color: COLORS.slate }
                      }
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </Field>

              <Field label="Message (optional)">
                <textarea
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  rows={4}
                  placeholder="Tell us anything that will help us prepare for your first session."
                  className={inputClass(false)}
                />
              </Field>

              <button
                type="submit"
                className="mt-2 w-full rounded-sm py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors"
                style={{ backgroundColor: COLORS.forest }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = COLORS.forestDark)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = COLORS.forest)
                }
              >
                Register Now
              </button>
            </form>

            {/* ---- Selected course summary — echoes the pricing cards ---- */}
            <aside
              className="h-fit border p-8"
              style={{
                backgroundColor: COLORS.forest,
                borderColor: COLORS.forest,
              }}
            >
              <span
                className="text-[11px] font-semibold tracking-[0.2em]"
                style={{ color: COLORS.gold }}
              >
                {selectedCourse.level.toUpperCase()}
              </span>
              <h3 className="mt-2 font-serif text-2xl text-white">
                {selectedCourse.title}
              </h3>

              <div className="mt-6 space-y-3 text-sm text-white/85">
                <SummaryRow label="Duration" value={selectedCourse.duration} />
                <SummaryRow label="Schedule" value={selectedCourse.schedule} />
              </div>

              <div
                className="mt-6 border-t pt-6"
                style={{ borderColor: "rgba(255,255,255,0.18)" }}
              >
                <span className="text-[11px] tracking-[0.15em] text-white/60">
                  PROGRAM FEE
                </span>
                <div
                  className="mt-1 font-serif text-3xl"
                  style={{ color: COLORS.gold }}
                >
                  {selectedCourse.fee}
                </div>
              </div>

              <p className="mt-6 text-xs leading-relaxed text-white/60">
                A confirmation email with payment instructions and your welcome
                pack will be sent once we review your registration.
              </p>
            </aside>
          </div>
        )}
      </section>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Small building blocks
// ---------------------------------------------------------------------------

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="mb-6 block last:mb-0">
      <span
        className="mb-2 block text-[11px] font-semibold tracking-[0.15em]"
        style={{ color: "#5B6B78" }}
      >
        {label.toUpperCase()}
      </span>
      {children}
      {error && (
        <span className="mt-1.5 block text-xs text-red-600">{error}</span>
      )}
    </label>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-2">
      <span
        className="mt-[3px] h-1.5 w-1.5 rotate-45"
        style={{ backgroundColor: "#C79A3C" }}
      />
      <span>
        <span className="text-white/60">{label}: </span>
        {value}
      </span>
    </div>
  );
}

function SuccessPanel({
  course,
  onReset,
}: {
  course: Course;
  onReset: () => void;
}) {
  return (
    <div
      className="mx-auto max-w-xl border bg-white p-12 text-center"
      style={{ borderColor: "#E4DFCF" }}
    >
      <div
        className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full"
        style={{ backgroundColor: "#155843" }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
        >
          <path
            d="M20 6L9 17l-5-5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h2 className="font-serif text-2xl" style={{ color: "#155843" }}>
        Registration received
      </h2>
      <p className="mt-3 text-sm leading-relaxed" style={{ color: "#5B6B78" }}>
        Thank you for registering for <strong>{course.title}</strong>. Our team
        will reach out within two business days to confirm your seat and share
        payment details.
      </p>
      <button
        onClick={onReset}
        className="mt-8 rounded-sm border px-6 py-2.5 text-sm font-semibold"
        style={{ borderColor: "#155843", color: "#155843" }}
      >
        Register another student
      </button>
    </div>
  );
}

function inputClass(hasError: boolean) {
  return [
    "w-full border bg-white px-4 py-2.5 text-[15px] outline-none transition-colors",
    "focus:border-[#155843]",
    hasError ? "border-red-400" : "border-[#E4DFCF]",
  ].join(" ");
}
