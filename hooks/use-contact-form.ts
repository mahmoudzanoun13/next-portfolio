import { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import { SUBJECT_OPTIONS, SubjectOption } from "@/constants/contact";
import { ContactFormValues, ContactFormErrors } from "@/types/contact";
import { validateContactForm } from "@/lib/validation/contact";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

export function useContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [values, setValues] = useState<Omit<ContactFormValues, "subject">>({
    name: "",
    email: "",
    message: "",
  });

  // Validation State
  const [fieldErrors, setFieldErrors] = useState<ContactFormErrors>({});

  // Custom Dropdown State
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<SubjectOption>(
    SUBJECT_OPTIONS[0]
  );

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const handleSelectSubject = (option: SubjectOption) => {
    setSelectedSubject(option);
    setIsOpen(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (fieldErrors[name as keyof ContactFormErrors]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof ContactFormErrors];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Run custom validation using the external validator
    const errors = validateContactForm(values);
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    // Check if configuration is missing
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setError(
        "The contact system is not configured yet. Please check again later."
      );
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      if (result.text === "OK") {
        setIsSuccess(true);
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    setError(null);
    setFieldErrors({});
    setValues({ name: "", email: "", message: "" });
    setSelectedSubject(SUBJECT_OPTIONS[0]);
  };

  return {
    formRef,
    dropdownRef,
    isSubmitting,
    isSuccess,
    error,
    fieldErrors,
    values,
    isOpen,
    selectedSubject,
    toggleDropdown,
    closeDropdown,
    handleSelectSubject,
    handleInputChange,
    handleSubmit,
    resetForm,
  };
}
