import { SubjectOption } from "@/constants/contact";

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
  subject: SubjectOption;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}
