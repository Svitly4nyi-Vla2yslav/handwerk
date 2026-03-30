export type IconName =
  | 'heat'
  | 'pump'
  | 'bath'
  | 'maintenance'
  | 'repair'
  | 'funding'
  | 'phone'
  | 'location'
  | 'clock'
  | 'process'
  | 'check';

export interface NavigationItem {
  label: string;
  href: string;
}

export interface HeroStat {
  label: string;
  value: string;
}

export interface ServiceIntentCard {
  icon: IconName;
  title: string;
  description: string;
  cta: string;
  preset: string;
}

export interface TrustItem {
  title: string;
  description: string;
}

export interface TrustChip {
  label: string;
  emphasis: string;
}

export interface MainService {
  id: string;
  slug: string;
  icon: IconName;
  eyebrow: string;
  title: string;
  description: string;
  problems: string[];
  solutions: string[];
  cta: string;
  preset: string;
}

export interface Advantage {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
