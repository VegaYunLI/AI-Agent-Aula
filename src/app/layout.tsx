import type { Metadata } from "next";
import { Header, Footer } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sitech | Escola Técnica Institucional",
  description:
    "Portal oficial da escola técnica Sitech. Conheça nossos cursos técnicos gratuitos, matrizes curriculares completas e comunicados oficiais.",
  keywords: [
    "escola técnica",
    "ensino técnico",
    "cursos técnicos",
    "sitech",
    "etec",
    "desenvolvimento de sistemas",
    "mecatrônica",
    "educação profissional",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased font-sans">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
