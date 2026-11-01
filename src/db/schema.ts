import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

// Stores leads captured from the public contact / quote request form.
export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  businessName: text("business_name"),
  email: text("email").notNull(),
  phone: text("phone"),
  businessType: text("business_type"),
  service: text("service"),
  budget: text("budget"),
  details: text("details"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export type Lead = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;
