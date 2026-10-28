"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
  tag?: string;
}

const navItems: NavItem[] = [
  { label: "Cursos Técnicos", href: "#cursos", tag: "9 Opções" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Notícias", href: "#noticias" },
  { label: "Contato & Local", href: "#contato" },
];

export function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Exibe a navbar somente quando o usuário scrollar além de 380px (saindo da área inicial da Hero)
      if (window.scrollY > 380) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Executa na montagem caso a página já tenha sido recarregada com scroll
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out transform ${
        isVisible
          ? "translate-y-0 opacity-100 shadow-xl"
          : "-translate-y-full opacity-0 pointer-events-none"
      } bg-[#0b2559] text-white border-b-4 border-[#ff5500]`}
      aria-label="Navegação Fixa"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logotipo com Indicador Técnico */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-hidden"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-none bg-[#ff5500] font-black text-white text-base shadow-neo-sm transform group-hover:rotate-6 transition-transform">
              S
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight leading-none text-white">
                SITECH
              </span>
              <span className="text-[10px] font-bold tracking-widest text-sky-300 uppercase">
                Escola Técnica
              </span>
            </div>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Menu Principal">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-white hover:bg-white/10 rounded-none transition-colors"
              >
                <span>{item.label}</span>
                {item.tag && (
                  <span className="rounded-none bg-[#ffe600] px-1.5 py-0.5 text-[9px] font-black text-slate-900">
                    {item.tag}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Ações Direitas (Área Administrativa + CTA) */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Link
              href="/login"
              className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-white border border-slate-600 hover:border-white transition-colors"
            >
              Área Restrita
            </Link>
            <a
              href="#cursos"
              className="inline-flex items-center gap-1.5 bg-[#ff5500] hover:bg-[#e04a00] text-white px-4 py-1.5 text-xs font-black uppercase tracking-wider shadow-neo-sm hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
            >
              <span>Matrículas 2026</span>
              <span className="text-sm">→</span>
            </a>
          </div>

          {/* Botão Menu Mobile */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center p-2 text-white hover:bg-white/10 focus:outline-hidden"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Gaveta Mobile */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t-2 border-slate-800 bg-[#07193b] px-4 pt-3 pb-6 space-y-3">
          <div className="space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-sm font-bold uppercase tracking-wider text-slate-100 hover:text-[#ffe600] border-b border-slate-800"
              >
                <span>{item.label}</span>
                {item.tag && (
                  <span className="bg-[#ffe600] px-1.5 py-0.5 text-[10px] font-black text-slate-900">
                    {item.tag}
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-2 text-xs font-bold uppercase tracking-wider border border-slate-600 text-white hover:bg-white/10"
            >
              Área Administrativa
            </Link>
            <a
              href="#cursos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center bg-[#ff5500] py-2 text-xs font-black uppercase tracking-wider text-white shadow-neo-sm"
            >
              Ver Todos os Cursos Técnicos
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
