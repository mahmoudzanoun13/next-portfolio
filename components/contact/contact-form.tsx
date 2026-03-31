"use client";

import { useContactForm } from "@/hooks/use-contact-form";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";

import { ContactFormHeader } from "./contact-form-header";
import { SubjectDropdown } from "./contact-form-subject-dropdown";
import { ContactFormSuccess } from "./contact-form-success";
import { ContactFormField } from "./contact-form-field";

export function ContactForm() {
  const {
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
    handleSelectSubject,
    handleInputChange,
    handleSubmit,
    resetForm,
  } = useContactForm();

  if (isSuccess) {
    return <ContactFormSuccess onReset={resetForm} />;
  }

  return (
    <GlassCard
      variant="medium"
      className="p-8 md:p-12 relative overflow-hidden group"
    >
      <div
        className="absolute top-0 right-0 p-8 text-primary/10 select-none pointer-events-none"
        aria-hidden="true"
      >
        <span className="material-symbols-outlined text-9xl">mail</span>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="relative z-10 flex flex-col gap-8"
        noValidate
      >
        <ContactFormHeader />

        {/* Global Error Feedback */}
        {error && (
          <div className="p-4 bg-error/10 border border-error/20 rounded-xl text-error text-xs flex items-center gap-3 animate-in slide-in-from-top-2">
            <span className="material-symbols-outlined text-base">error</span>
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContactFormField
            id="name"
            name="name"
            label="Your Name"
            value={values.name}
            onChange={handleInputChange}
            error={fieldErrors.name}
            placeholder="John Doe"
          />

          <ContactFormField
            id="email"
            name="email"
            label="Email Address"
            type="email"
            value={values.email}
            onChange={handleInputChange}
            error={fieldErrors.email}
            placeholder="john@example.com"
          />
        </div>

        <SubjectDropdown
          dropdownRef={dropdownRef}
          isOpen={isOpen}
          selectedSubject={selectedSubject}
          onToggle={toggleDropdown}
          onSelect={handleSelectSubject}
        />

        <ContactFormField
          id="message"
          name="message"
          label="Message Payload"
          type="textarea"
          value={values.message}
          onChange={handleInputChange}
          error={fieldErrors.message}
          placeholder="Tell me about your project or inquiry..."
        />

        <Button
          type="submit"
          size="xl"
          loading={isSubmitting}
          icon="send"
          className="w-full md:w-max ml-auto group-hover:shadow-[0_0_40px_-5px_rgba(186,158,255,0.4)]"
        >
          {isSubmitting ? "Broadcasting..." : "Transmit Signal"}
        </Button>
      </form>
    </GlassCard>
  );
}
