import { initEmailSender } from "./core/index.js";
import { EmailSender } from "./core/types.js";

// TODO: We need to validate all the env variables
// For now, we are letting the runtime throw if they are not provided
const emailProvider = {
  type: "sendgrid",
  apiKey: process.env.SENDGRID_API_KEY!,
} as const;

// PUBLIC API
export const emailSender: EmailSender = initEmailSender(emailProvider);

// PUBLIC API
export type { Email, EmailFromField, EmailSender, SentMessageInfo } from "./core/types.js";
