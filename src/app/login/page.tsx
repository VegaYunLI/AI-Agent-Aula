"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-slate-50">
      <div className="w-full max-w-md space-y-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-xs">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-sitech-primary text-white shadow-xs">
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
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
            Acesso Administrativo
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Área restrita à coordenação e docentes para publicação de comunicados e notícias.
          </p>
        </div>

        <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-slate-700">
              E-mail Institucional
            </label>
            <input
              type="email"
              placeholder="admin@sitech.edu.br"
              disabled
              className="mt-1 block w-full rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 text-sm text-slate-500 shadow-2xs cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Senha
            </label>
            <input
              type="password"
              placeholder="••••••••"
              disabled
              className="mt-1 block w-full rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 text-sm text-slate-500 shadow-2xs cursor-not-allowed"
            />
          </div>

          <div className="rounded-lg bg-blue-50 p-3 text-xs text-sitech-primary border border-blue-200">
            <strong>Fase Preparatória:</strong> O módulo de autenticação e sessão com SQLite será ativado na Fase 3 do projeto.
          </div>

          <div className="pt-2">
            <Link
              href="/"
              className="flex w-full justify-center rounded-lg border border-slate-300 bg-white py-2.5 px-4 text-sm font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 transition-colors"
            >
              Voltar à Página Inicial
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
