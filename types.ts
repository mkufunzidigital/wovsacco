import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
  dropdown?: NavLink[];
}

export interface Stat {
  icon: LucideIcon;
  end: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  link: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  image: string;
}

export interface TeamMember {
  name: string;
  title: string;
  qualifications: string;
  description: string;
  image: string;
}

export interface LoanProduct {
    icon: LucideIcon;
    title: string;
    description: string;
    idealFor: string[];
    benefits: string[];
    color: string;
    interestRate: number; // Annual interest rate in percent
    term: number; // Max term in months
}