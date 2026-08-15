"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, Loader2, Send } from "lucide-react";
import { company } from "@/lib/site";
import { ENQUIRY_KEY } from "./ThankYou";
import { cn } from "@/lib/utils";

const CONTACT_EMAIL = company.emails.primary;

type Field = "name" | "email" | "company" | "phone" | "interest" | "message";
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;

const INTERESTS = [
  "Drug Development",
  "Specialty Chemical Development",
  "Healthcare Product Development",
  "Quality Assurance & Testing",
  "Third-Party Manufacturing",
  "Marketing & Distribution",
  "General Enquiry",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const PHONE_RE = /^[+()\d][\d\s\-()]{6,19}$/;

/**
 * The site is a static export, so there is no server to receive submissions.
 * Set NEXT_PUBLIC_FORM_ENDPOINT to a form backend (Formspree, Web3Forms,
 * Getform…) to post enquiries directly from the browser. Until that is
 * configured the form falls back to composing the enquiry as an email in the
 * visitor's own mail client, so no submission is silently dropped either way.
 */
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

function buildMailto(values: Values) {
  const subject = `Website enquiry - ${values.company.trim()} (${values.interest})`;
  const body = [
    `Name: ${values.name.trim()}`,
    `Organisation: ${values.company.trim()}`,
    `Email: ${values.email.trim()}`,
    `Phone: ${values.phone.trim() || "-"}`,
    `Area of interest: ${values.interest}`,
    "",
    "Requirement:",
    values.message.trim(),
  ].join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

const initialValues: Values = {
  name: "",
  email: "",
  company: "",
  phone: "",
  interest: INTERESTS[0],
  message: "",
};

/** Validates a single field. Returns undefined when the value is acceptable. */
function validateField(field: Field, value: string): string | undefined {
  const trimmed = value.trim();

  switch (field) {
    case "name":
      if (!trimmed) return "Please enter your full name.";
      if (trimmed.length < 2) return "Name must be at least 2 characters.";
      return undefined;
    case "email":
      if (!trimmed) return "Please enter your email address.";
      if (!EMAIL_RE.test(trimmed)) return "Enter a valid email address.";
      return undefined;
    case "company":
      if (!trimmed) return "Please enter your organisation name.";
      return undefined;
    case "phone":
      // Optional — validated only when supplied.
      if (trimmed && !PHONE_RE.test(trimmed))
        return "Enter a valid phone number.";
      return undefined;
    case "message":
      if (!trimmed) return "Please describe your requirement.";
      if (trimmed.length < 20)
        return `Please add a little more detail (${trimmed.length}/20 characters).`;
      if (trimmed.length > 2000) return "Please keep this under 2000 characters.";
      return undefined;
    default:
      return undefined;
  }
}

function validateAll(values: Values): Errors {
  return (Object.keys(values) as Field[]).reduce<Errors>((acc, field) => {
    const error = validateField(field, values[field]);
    if (error) acc[field] = error;
    return acc;
  }, {});
}

const fieldClass = (invalid: boolean) =>
  cn(
    "w-full rounded-[15px] border-none px-4 py-3 text-[0.95rem] text-navy-950 outline-none transition-all duration-300 ease-in-out placeholder:text-navy-400",
    "bg-[#cccccc] shadow-[inset_2px_5px_10px_rgba(0,0,0,0.3)]",
    "focus:bg-white focus:scale-[1.05] focus:shadow-[13px_13px_100px_#969696,-13px_-13px_100px_#ffffff]",
    invalid
      ? "text-red-700 placeholder:text-red-400"
      : "",
  );

export function ContactForm() {
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const router = useRouter();

  /** Hands the composed enquiry to the thank-you page, then routes there. */
  const confirm = (mailtoHref?: string) => {
    try {
      if (mailtoHref) sessionStorage.setItem(ENQUIRY_KEY, mailtoHref);
      else sessionStorage.removeItem(ENQUIRY_KEY);
    } catch {
      // sessionStorage can throw in private browsing modes — routing still works.
    }
    router.push("/thank-you/");
  };

  const setValue = (field: Field, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    // Re-validate live only once the field has been visited, so users
    // aren't scolded mid-keystroke on first entry.
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
    }
  };

  const handleBlur = (field: Field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, values[field]),
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateAll(values);
    setErrors(nextErrors);
    setTouched({
      name: true,
      email: true,
      company: true,
      phone: true,
      interest: true,
      message: true,
    });

    const firstInvalid = (Object.keys(nextErrors) as Field[])[0];
    if (firstInvalid) {
      setStatus("idle");
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    const honeypot =
      (event.currentTarget.elements.namedItem("website") as HTMLInputElement | null)
        ?.value ?? "";

    // A filled hidden field means an automated submission — accept it visually
    // and discard it.
    if (honeypot) {
      confirm();
      return;
    }

    // No form backend configured: hand the enquiry to the visitor's mail client,
    // then route to the confirmation page which can reopen it if needed.
    if (!FORM_ENDPOINT) {
      const href = buildMailto(values);
      confirm(href);
      window.location.href = href;
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Request failed");

      setValues(initialValues);
      setTouched({});
      confirm();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="site-card site-card-white relative p-7 sm:p-9"
    >
      <h3 className="text-xl font-semibold text-navy-950">
        Send us an enquiry
      </h3>
      <p className="mt-2 text-sm text-navy-700/80">
        Share your requirement and our team will respond within two working
        days. Fields marked with an asterisk are required.
      </p>

      {/* Honeypot — hidden from users, catches naive bots. */}
      <div className="absolute -left-[9999px]" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <FormField
          id="name"
          label="Full name"
          required
          value={values.name}
          error={touched.name ? errors.name : undefined}
          onChange={(v) => setValue("name", v)}
          onBlur={() => handleBlur("name")}
          autoComplete="name"
          placeholder="Priya Sharma"
        />
        <FormField
          id="email"
          label="Work email"
          type="email"
          required
          value={values.email}
          error={touched.email ? errors.email : undefined}
          onChange={(v) => setValue("email", v)}
          onBlur={() => handleBlur("email")}
          autoComplete="email"
          placeholder="you@company.com"
        />
        <FormField
          id="company"
          label="Organisation"
          required
          value={values.company}
          error={touched.company ? errors.company : undefined}
          onChange={(v) => setValue("company", v)}
          onBlur={() => handleBlur("company")}
          autoComplete="organization"
          placeholder="Company name"
        />
        <FormField
          id="phone"
          label="Phone"
          type="tel"
          value={values.phone}
          error={touched.phone ? errors.phone : undefined}
          onChange={(v) => setValue("phone", v)}
          onBlur={() => handleBlur("phone")}
          autoComplete="tel"
          placeholder="+91 98765 43210"
          hint="Optional"
        />

        <div className="sm:col-span-2">
          <label
            htmlFor="interest"
            className="block text-sm font-medium text-navy-900"
          >
            Area of interest
          </label>
          <select
            id="interest"
            name="interest"
            value={values.interest}
            onChange={(event) => setValue("interest", event.target.value)}
            className={cn(fieldClass(false), "mt-2 appearance-none bg-white")}
          >
            {INTERESTS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <div className="flex items-baseline justify-between gap-3">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-navy-900"
            >
              Your requirement <span className="text-accent-600">*</span>
            </label>
            <span className="text-xs text-navy-500">
              {values.message.trim().length}/2000
            </span>
          </div>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={(event) => setValue("message", event.target.value)}
            onBlur={() => handleBlur("message")}
            aria-invalid={touched.message && Boolean(errors.message)}
            aria-describedby={
              touched.message && errors.message ? "message-error" : undefined
            }
            placeholder="Product or specification, indicative volumes, timelines and any quality requirements."
            className={cn(
              fieldClass(Boolean(touched.message && errors.message)),
              "mt-2 resize-y",
            )}
          />
          <FieldError id="message-error" message={touched.message ? errors.message : undefined} />
        </div>
      </div>

      <AnimatePresence>
        {status === "error" ? (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="alert"
            className="mt-6 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            We couldn&apos;t submit your enquiry. Please try again, or email us
            directly at {CONTACT_EMAIL}.
          </motion.p>
        ) : null}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-950 px-7 py-3.5 text-sm font-semibold text-white shadow-elevate transition-all hover:bg-navy-800 hover:shadow-lift active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            Submit Enquiry
            <Send
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </>
        )}
      </button>

      <p className="mt-4 text-xs leading-relaxed text-navy-500">
        Your details are used solely to respond to this enquiry and are not
        shared with third parties.
      </p>
    </form>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  return (
    <AnimatePresence>
      {message ? (
        <motion.p
          id={id}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.18 }}
          className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600"
        >
          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden />
          {message}
        </motion.p>
      ) : null}
    </AnimatePresence>
  );
}

function FormField({
  id,
  label,
  value,
  onChange,
  onBlur,
  error,
  type = "text",
  required,
  placeholder,
  autoComplete,
  hint,
}: {
  id: Field;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  error?: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  hint?: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="block text-sm font-medium text-navy-900">
          {label} {required ? <span className="text-accent-600">*</span> : null}
        </label>
        {hint ? <span className="text-xs text-navy-500">{hint}</span> : null}
      </div>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldClass(Boolean(error)), "mt-2")}
      />
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}
