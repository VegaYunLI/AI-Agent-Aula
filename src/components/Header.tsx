"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Início", href: "/" },
  { label: "Cursos Técnicos", href: "/#cursos" },
  { label: "Notícias", href: "/#noticias" },
  { label: "Diferenciais", href: "/#diferenciais" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
        {/* Logotipo Institucional */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-hidden focus:ring-2 focus:ring-sitech-secondary rounded-lg p-1"
          onClick={closeMobileMenu}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sitech-primary to-sitech-secondary text-white shadow-md shadow-blue-900/10 transition-transform group-hover:scale-105">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14v6.5"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-sitech-primary">
              SITECH
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Escola Técnica
            </span>
          </div>
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Navegação Principal">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "text-sitech-primary font-semibold bg-slate-100"
                    : "text-slate-600 hover:text-sitech-primary hover:bg-slate-50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Ação Desktop: Acesso Administrativo */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 hover:border-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sitech-secondary transition-all"
          >
            <svg
              className="h-4 w-4 text-slate-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>Área Administrativa</span>
          </Link>
          <a
            href="#cursos"
            className="inline-flex items-center gap-1.5 rounded-lg bg-sitech-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sitech-primary-light focus:outline-hidden focus:ring-2 focus:ring-sitech-primary focus:ring-offset-2 transition-all"
          >
            <span>Cursos 2026</span>
          </a>
        </div>

        {/* Botão Menu Hambúrguer (Mobile/Tablet) */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center rounded-lg p-2.5 text-slate-700 hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-sitech-primary transition-colors"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Gaveta Retrátil Mobile */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="border-b border-slate-200 bg-white px-4 pt-2 pb-6 md:hidden shadow-lg animate-in slide-in-from-top duration-200"
        >
          <div className="space-y-1">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-sitech-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200 space-y-2">
            <Link
              href="/login"
              onClick={closeMobileMenu}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 transition-colors"
            >
              <svg
                className="h-4 w-4 text-slate-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>Área Administrativa</span>
            </Link>

            <a
              href="#cursos"
              onClick={closeMobileMenu}
              className="flex w-full items-center justify-center rounded-lg bg-sitech-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sitech-primary-light transition-colors"
            >
              Cursos Técnicos 2026
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
