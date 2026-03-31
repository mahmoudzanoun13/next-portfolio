import { ContactFormValues, ContactFormErrors } from "@/types/contact";

export function validateContactForm(values: Partial<ContactFormValues>): ContactFormErrors {
  const errors: ContactFormErrors = {};

  // Name validation
  if (!values.name?.trim()) {
    errors.name = "Your name is required.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!values.email?.trim()) {
    errors.email = "Email address is required.";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  // Message validation
  if (!values.message?.trim()) {
    errors.message = "Message content is required.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return errors;
}
