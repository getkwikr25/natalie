
// Fix: Import React to resolve React.ReactNode namespace error in types.ts
import React from 'react';

export interface NavItem {
  label: string;
  path?: string;
  dropdown?: NavItem[];
}

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export interface ResourceItem {
  title: string;
  category: string;
  link: string;
  description: string;
}

export interface Testimonial {
  text: string;
  author: string;
}