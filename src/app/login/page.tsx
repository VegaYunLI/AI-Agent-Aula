"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8 bg-slate-50 bg-blueprint-grid">
      <div className="w-full max-w-md space-y-6 rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-tactile animate-fade-in">
        <div className="text-center space-y-2">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-blue-400 shadow-sm">
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
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Acesso Administrativo
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xs mx-auto">
            Área restrita à coordenação e docentes para publicação de comunicados e editais.
          </p>
        </div>

        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              E-mail institucional
            </label>
            <input
              type="email"
              placeholder="docente@sitech.edu.br"
              disabled
              className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-500 shadow-2xs cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Senha de acesso
            </label>
            <input
              type="password"
              placeholder="••••••••"
              disabled
              className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-500 shadow-2xs cursor-not-allowed"
            />
          </div>

          <div className="rounded-xl bg-blue-50/80 p-3.5 text-xs text-blue-900 border border-blue-200/80 leading-relaxed">
            <strong>Fase Preparatória:</strong> O módulo de autenticação e sessão com SQLite será ativado na Fase 3 do projeto.
          </div>

          <div className="pt-2">
            <Link
              href="/"
              className="flex w-full justify-center rounded-xl border border-slate-200 bg-white py-2.5 px-4 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 transition-colors"
            >
              Voltar à Página Inicial
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
