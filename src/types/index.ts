/**
 * Definições de tipos comuns para o portal institucional Sitech
 */

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  publishedAt: string;
  author: string;
  imageUrl?: string;
}

export interface CourseSubject {
  name: string;
  workload: number;
  description?: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  durationSemesters: number;
  period: "Matutino" | "Vespertino" | "Noturno" | "Integral";
  subjects?: CourseSubject[];
}
