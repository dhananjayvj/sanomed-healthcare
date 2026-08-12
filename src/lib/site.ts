/**
 * Single source of truth for corporate identity, registry details and
 * brand narrative. Registry figures are drawn from the MCA/ROC filing record.
 */
export const company = {
  legalName: "SANOMED HEALTH CARE PRIVATE LIMITED",
  shortName: "Sanomed Health Care",
  tagline: "Precision Chemical & Healthcare Solutions",
  promise: "Revolutionising Healthcare through Innovation and Excellence",
  cin: "U24290KA2022PTC159246",
  incorporated: "2022",
  registrar: "ROC Bengaluru",
  classification: "Private, Non-government Company · Limited by Shares",
  activity: "Manufacture of chemicals and chemical products (NIC 24290)",
  address: {
    line1: "D - 41, 4th Main, KSSIDC Industrial Estate",
    line2: "6th Block, Rajajinagar",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560044",
    country: "India",
  },
  emails: {
    primary: "contact@sanomedhealthcare.com",
    secondary: "info@sanomedhealthcare.com",
    admin: "admin@sanomedhealthcare.com",
  },
  phone: {
    display: "+91 93803 30849",
    /** E.164 form for tel: links and structured data. */
    href: "+919380330849",
  },
  hours: "Monday – Saturday · 9:30 AM – 6:30 PM IST",
} as const;

export const contactEmails = Object.values(company.emails);

export const addressLines = [
  company.address.line1,
  company.address.line2,
  `${company.address.city}, ${company.address.state} ${company.address.pincode}`,
  company.address.country,
];

export const addressOneLine = addressLines.join(", ");

export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/products", label: "Products" },
  { href: "/careers", label: "Careers" },
  { href: "/#contact", label: "Contact" },
] as const;

export const vision =
  "To revolutionise healthcare by developing breakthrough therapies and delivering them to patients worldwide.";

export const mission =
  "To improve and save lives through relentless innovation, scientific excellence and ethical business practices.";

export const coreValues = [
  {
    title: "Integrity",
    copy: "Ethical conduct in every transaction, filing and clinical claim we make — without exception.",
  },
  {
    title: "Excellence",
    copy: "Scientific and operational rigour applied consistently, from bench research to batch release.",
  },
  {
    title: "Collaboration",
    copy: "Partnerships with academia, industry and healthcare professionals that compound our capability.",
  },
  {
    title: "Patient-Centricity",
    copy: "Every decision measured against a single question: does this serve the patient better?",
  },
  {
    title: "Sustainability",
    copy: "Responsible sourcing and production that conserves resources and minimises environmental impact across our operations and partner network.",
  },
] as const;

export const therapyAreas = [
  {
    name: "Cardiovascular & Metabolic",
    type: "Chronic",
    copy: "Formulations supporting long-term management of cardiac, hypertensive and metabolic conditions.",
  },
  {
    name: "Anti-Infectives",
    type: "Acute",
    copy: "Antibacterial and antimicrobial preparations for acute infection management under clinical supervision.",
  },
  {
    name: "Analgesics & Anti-Inflammatory",
    type: "Acute",
    copy: "Pain and inflammation therapies formulated for rapid, predictable onset and tolerability.",
  },
  {
    name: "Gastrointestinal",
    type: "Chronic & Acute",
    copy: "Preparations addressing acid-related disorders and gastrointestinal function across therapy durations.",
  },
  {
    name: "Nutraceuticals & Supplements",
    type: "Chronic",
    copy: "Vitamin, mineral and nutritional support products manufactured to pharmaceutical-grade standards.",
  },
  {
    name: "Dermatology & Topical",
    type: "Chronic & Acute",
    copy: "Topical formulations engineered for stability, spreadability and consistent active delivery.",
  },
] as const;

export const dosageForms = [
  "Tablets",
  "Capsules",
  "Oral liquids & syrups",
  "Topical creams & ointments",
  "Powders & granules",
  "Specialty intermediates",
] as const;
