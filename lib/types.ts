export type ConceptId = "datasheet" | "noir" | "constructivist";

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  href: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
}

export interface UseCase {
  id: string;
  industry: string;
  title: string;
  metric: string;
  metricLabel: string;
  description: string;
  bullets?: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  sector: string;
}

export interface ContactInfo {
  phone: string;
  phoneDisplay: string;
  email: string;
  address: string;
  city: string;
}

export interface SpecRow {
  code: string;
  label: string;
  value: string;
  footnote?: string;
}

export interface Footnote {
  id: string;
  text: string;
}
