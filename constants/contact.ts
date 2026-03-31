export const SUBJECT_OPTIONS = [
  "General Inquiry",
  "Project Proposal",
  "Technical Consultation",
  "Speaking/Mentoring",
] as const;

export type SubjectOption = (typeof SUBJECT_OPTIONS)[number];
