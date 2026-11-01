import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  businessName: z.string().trim().optional().default(""),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().optional().default(""),
  businessType: z.string().trim().optional().default(""),
  service: z.string().trim().optional().default(""),
  budget: z.string().trim().optional().default(""),
  details: z.string().trim().optional().default(""),
  company_website: z.string().trim().max(0).optional().default(""),
});

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid form data." },
      { status: 400 },
    );
  }

  // This is a front-end-only portfolio site, so we validate the enquiry
  // but do not persist it to a database.
  return NextResponse.json({ ok: true });
}
