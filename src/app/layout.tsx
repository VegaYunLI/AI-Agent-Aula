import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sitech | Escola Técnica",
  description: "Portal institucional da escola técnica Sitech. Conheça nossos cursos técnicos, matrizes curriculares e novidades.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen antialiased bg-sitech-neutral-50 text-sitech-neutral-900">
        {children}
      </body>
    </html>
  );
}
