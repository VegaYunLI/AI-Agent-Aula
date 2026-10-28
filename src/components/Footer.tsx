import Link from "next/link";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Seção Superior de Destaques e Newsletter */}
      <div className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-sitech-secondary-light">
                Vestibulinho 2026
              </span>
              <p className="text-lg font-bold text-white">
                Ensino Técnico Gratuito e de Qualidade Reconhecida
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#cursos"
                className="inline-flex items-center justify-center rounded-lg bg-sitech-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sitech-secondary-light transition-colors"
              >
                Consultar Matrizes Curriculares
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal do Rodapé */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Coluna 1: Sobre a Instituição */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sitech-primary text-white">
                <svg
                  className="h-5 w-5"
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
                </svg>
              </div>
              <span className="text-xl font-black tracking-tight text-white">SITECH</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Escola Técnica dedicada à excelência na formação profissional de jovens e adultos,
              com laboratórios de última geração e matrizes curriculares alinhadas às demandas do setor produtivo.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
              <span>Cursos 100% Presenciais e Gratuitos</span>
            </div>
          </div>

          {/* Coluna 2: Cursos Técnicos */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Cursos Técnicos
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#cursos" className="hover:text-white transition-colors">
                  Desenvolvimento de Sistemas
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-white transition-colors">
                  Mecatrônica & Automação
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-white transition-colors">
                  Administração & Gestão
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-white transition-colors">
                  Manutenção de Computadores
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-white transition-colors">
                  Química Industrial
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Links Institucionais */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Institucional
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Página Inicial
                </Link>
              </li>
              <li>
                <a href="#noticias" className="hover:text-white transition-colors">
                  Notícias e Comunicados
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">
                  Diferenciais & Infraestrutura
                </a>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition-colors">
                  Portal do Colaborador (Área Restrita)
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato e Localização */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Atendimento e Secretaria
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <svg
                  className="h-5 w-5 shrink-0 text-sitech-secondary-light mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Av. Universitária, 1500 - Polo Tecnológico</span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg
                  className="h-5 w-5 shrink-0 text-sitech-secondary-light"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>(15) 3251-4144 / (15) 3251-4200</span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg
                  className="h-5 w-5 shrink-0 text-sitech-secondary-light"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>secretaria@sitech.edu.br</span>
              </li>
              <li className="text-xs text-slate-500 pt-1">
                Atendimento: Segunda a Sexta, das 08h às 21h30
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra Inferior com Direitos Autorais */}
      <div className="border-t border-slate-800 bg-slate-950/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-slate-400">
            © {currentYear} Sitech - Escola Técnica. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-400">
            <span className="hover:text-slate-300">Educação Profissional Pública</span>
            <span>•</span>
            <span className="hover:text-slate-300">Inspirado na ETEC Sales Gomes</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
