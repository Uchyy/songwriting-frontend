import { apiRequest } from "./service";
import type { Enquiry } from "../models/Enquiry";

export type NewEnquiry = Pick< Enquiry, "name" | "email" | "subject" | "message">;

export async function submitEnquiry( enquiry: NewEnquiry): Promise<void> {
  return apiRequest<void>("/api/enquiries", {
    method: "POST",
    body: JSON.stringify(enquiry),
  });
}