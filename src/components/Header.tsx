"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
  tag?: string;
}

const navItems: NavItem[] = [
  { label: "Cursos & Matrizes", href: "#cursos", tag: "9 Cursos" },
  { label: "Oficinas & Laboratórios", href: "#diferenciais" },
  { label: "Editais & Notícias", href: "#noticias" },
  { label: "Secretaria & Local", href: "#contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-2.5"
          : "bg-white/90 backdrop-blur-sm border-b border-slate-200/60 py-3.5"
      }`}
      aria-label="Navegação Principal da Escola"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logotipo e Identidade da Escola */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 rounded-xl"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white font-bold transition-all duration-200 group-hover:bg-blue-700 shadow-sm">
              {/* Ícone Arquitetural / Compasso e Prancheta */}
              <svg className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <div className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-amber-500 border-2 border-white" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                  SITECH
                </span>
                <span className="hidden sm:inline-flex px-1.5 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                  Pública
                </span>
              </div>
              <span className="text-xs font-medium text-slate-500">
                Escola Técnica Estadual
              </span>
            </div>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Menu Principal">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-xl transition-all duration-150"
              >
                <span>{item.label}</span>
                {item.tag && (
                  <span className="rounded-md bg-blue-50 text-blue-700 px-2 py-0.5 text-xs font-semibold border border-blue-100">
                    {item.tag}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Ações Direitas (Área Restrita + CTA) */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Link
              href="/login"
              className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
            >
              Área Restrita
            </Link>

            <a
              href="#cursos"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-xs font-semibold rounded-xl shadow-sm hover:shadow transition-all duration-150 active:scale-[0.98]"
            >
              <span>Grade dos Cursos</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Botão Menu Mobile */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center p-2 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Gaveta Mobile */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 space-y-3 shadow-lg animate-fade-in">
          <div className="space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/60 rounded-xl transition-colors"
              >
                <span>{item.label}</span>
                {item.tag && (
                  <span className="rounded bg-blue-50 text-blue-700 px-2 py-0.5 text-xs font-semibold">
                    {item.tag}
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="#cursos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center bg-blue-600 text-white py-2.5 px-4 text-xs font-semibold rounded-xl"
            >
              Consultar Matrizes Curriculares
            </a>
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center bg-slate-100 text-slate-700 py-2.5 px-4 text-xs font-semibold rounded-xl"
            >
              Área Restrita (Docentes)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
