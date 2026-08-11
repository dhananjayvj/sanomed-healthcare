import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  interest?: string;
  message?: string;
  website?: string;
};

/**
 * Server-side validation mirror of the client form. The client can be
 * bypassed, so every rule is re-checked here before an enquiry is accepted.
 *
 * Delivery is intentionally left as a single integration point: wire an email
 * provider (Resend/SES/SMTP) or CRM webhook where noted below.
 */
export async function POST(request: Request) {
  let body: Payload;

  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Malformed request body." },
      { status: 400 },
    );
  }

  // Honeypot: a filled hidden field means an automated submission.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "A valid full name is required.";
  if (!EMAIL_RE.test(email)) errors.email = "A valid email address is required.";
  if (!company) errors.company = "An organisation name is required.";
  if (message.length < 20 || message.length > 2000)
    errors.message = "Message must be between 20 and 2000 characters.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const enquiry = {
    name,
    email,
    company,
    phone: body.phone?.trim() ?? "",
    interest: body.interest?.trim() || "General Enquiry",
    message,
    receivedAt: new Date().toISOString(),
  };

  // TODO: forward `enquiry` to contact@sanomedhealthcare.com via the chosen
  // email provider or CRM. Logged server-side until that is configured.
  console.log("[contact] enquiry received", enquiry);

  return NextResponse.json({ ok: true });
}
