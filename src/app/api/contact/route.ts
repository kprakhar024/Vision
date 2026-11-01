import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { leads } from "@/db/schema";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  businessName: z.string().trim().optional().default(""),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().optional().default(""),
  businessType: z.string().trim().optional().default(""),
  service: z.string().trim().optional().default(""),
  budget: z.string().trim().optional().default(""),
  details: z.string().trim().optional().default(""),
  // Honeypot field — real users never fill this in.
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

  const { company_website: _honeypot, ...data } = parsed.data;

  try {
    await db.insert(leads).values({
      name: data.name,
      businessName: data.businessName || null,
      email: data.email,
      phone: data.phone || null,
      businessType: data.businessType || null,
      service: data.service || null,
      budget: data.budget || null,
      details: data.details || null,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to save lead", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong while saving your request. Please try again." },
      { status: 500 },
    );
  }
}
