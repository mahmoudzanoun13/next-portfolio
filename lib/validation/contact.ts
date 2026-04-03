import { ContactFormValues, ContactFormErrors } from "@/types/contact";

export function validateContactForm(
  values: Partial<ContactFormValues>,
  t: (key: string) => string
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  // Name validation
  if (!values.name?.trim()) {
    errors.name = t("validation.name_required");
  } else if (values.name.trim().length < 2) {
    errors.name = t("validation.name_min");
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!values.email?.trim()) {
    errors.email = t("validation.email_required");
  } else if (!emailRegex.test(values.email)) {
    errors.email = t("validation.email_invalid");
  }

  // Message validation
  if (!values.message?.trim()) {
    errors.message = t("validation.message_required");
  } else if (values.message.trim().length < 10) {
    errors.message = t("validation.message_min");
  }

  return errors;
}
