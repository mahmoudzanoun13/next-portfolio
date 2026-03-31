"use client";

import { cn } from "@/lib/utils";

interface ContactFormFieldProps {
  id: string;
  label: string;
  name: string;
  value: string;
  error?: string;
  placeholder?: string;
  type?: "text" | "email" | "textarea";
  rows?: number;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export function ContactFormField({
  id,
  label,
  name,
  value,
  error,
  placeholder,
  type = "text",
  rows = 5,
  onChange,
}: ContactFormFieldProps) {
  const isTextArea = type === "textarea";
  const InputTag = isTextArea ? "textarea" : "input";

  return (
    <div className="space-y-2 group/field">
      <label
        htmlFor={id}
        className={cn(
          "text-[10px] uppercase font-bold tracking-[0.2em] px-1 transition-colors",
          error
            ? "text-error"
            : "text-on-surface-variant group-focus-within/field:text-primary",
        )}
      >
        {label}
      </label>

      <InputTag
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={isTextArea ? rows : undefined}
        type={!isTextArea ? type : undefined}
        className={cn(
          "w-full bg-white/5 border rounded-xl px-4 py-4 text-on-surface placeholder:text-outline/30 focus:outline-none focus:bg-white/8 transition-all",
          isTextArea && "resize-y min-h-[120px] max-h-[584px]",
          error
            ? "border-error/50 focus:border-error"
            : "border-white/10 focus:border-primary/50",
        )}
      />

      {error && (
        <p className="text-[10px] text-error px-1 animate-in fade-in slide-in-from-top-1">
          {error}
        </p>
      )}
    </div>
  );
}
