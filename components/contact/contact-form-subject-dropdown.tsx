"use client";

import { cn } from "@/lib/utils";
import { RefObject } from "react";
import { SUBJECT_OPTIONS, SubjectOption } from "@/constants/contact";

interface SubjectDropdownProps {
  isOpen: boolean;
  selectedSubject: SubjectOption;
  dropdownRef: RefObject<HTMLDivElement | null>;
  onToggle: () => void;
  onSelect: (option: SubjectOption) => void;
}

export function SubjectDropdown({
  isOpen,
  selectedSubject,
  dropdownRef,
  onToggle,
  onSelect,
}: SubjectDropdownProps) {
  return (
    <div className="space-y-2 group/field relative z-50">
      <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-[0.2em] px-1 group-focus-within/field:text-primary transition-colors">
        Subject line
      </label>
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={onToggle}
          className={cn(
            "w-full bg-white/5 border rounded-xl px-4 py-4 text-left text-on-surface focus:outline-none transition-all flex items-center justify-between cursor-pointer",
            isOpen ? "border-primary/50 bg-white/8" : "border-white/10",
          )}
        >
          <span className={cn(!selectedSubject && "text-outline/30 font-bold")}>
            {selectedSubject || "Select Subject"}
          </span>
          <span
            className={cn(
              "material-symbols-outlined text-on-surface-variant transition-transform duration-300",
              isOpen && "rotate-180 text-primary",
            )}
          >
            expand_more
          </span>
        </button>

        {/* Custom Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-[#0f072e] border border-white/10 rounded-xl py-2 px-1 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
            {SUBJECT_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => onSelect(option)}
                className={cn(
                  "w-full text-left px-4 py-3 rounded-lg text-sm transition-all flex items-center justify-between group/opt cursor-pointer",
                  selectedSubject === option
                    ? "bg-primary text-on-primary font-bold shadow-lg shadow-primary/20"
                    : "text-on-surface-variant hover:bg-white/5 hover:text-on-surface",
                )}
              >
                {option}
                {selectedSubject === option && (
                  <span className="material-symbols-outlined text-sm">
                    check
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
      {/* Hidden input to pass value to EmailJS */}
      <input type="hidden" name="subject" value={selectedSubject} />
    </div>
  );
}
