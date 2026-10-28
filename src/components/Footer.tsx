import Link from "next/link";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Faixa Superior de Atendimento & Comunicado */}
      <div className="bg-slate-950/60 border-b border-slate-800/80 py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold text-blue-400">
                Vestibulinho 2026 • 1º Semestre Letivo
              </p>
              <p className="text-sm font-medium text-slate-200">
                Ensino Técnico Público Estadual e 100% Gratuito
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#cursos"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-xs font-semibold rounded-xl shadow-xs transition-colors"
            >
              Consultar Matrizes Curriculares
            </a>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal do Rodapé */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1: Marca & Missão */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-base shadow-sm">
                S
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight">SITECH</span>
                <span className="text-xs font-medium text-slate-400 block">
                  Escola Técnica Estadual
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Instituição dedicada à formação profissional técnica de excelência. Laboratórios modernos com equipamentos práticos e matrizes curriculares alinhadas às demandas produtivas.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-xs text-emerald-300 font-medium">
              <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
              <span>100% Gratuito • Sem Mensalidade</span>
            </div>
          </div>

          {/* Coluna 2: Cursos Técnicos */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 mb-4">
              Cursos Técnicos (Noturno)
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#cursos" className="hover:text-blue-400 transition-colors">
                  Desenvolvimento de Sistemas
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-blue-400 transition-colors">
                  Mecatrônica & Automação
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-blue-400 transition-colors">
                  Eletrotécnica & Energia
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-blue-400 transition-colors">
                  Mecânica Industrial
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-blue-400 transition-colors">
                  Farmácia & Química
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-blue-400 transition-colors">
                  Administração & Gestão
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Institucional */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 mb-4">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#cursos" className="hover:text-blue-400 transition-colors">
                  Catálogo de Cursos
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-blue-400 transition-colors">
                  Oficinas & Laboratórios
                </a>
              </li>
              <li>
                <a href="#noticias" className="hover:text-blue-400 transition-colors">
                  Comunicados Oficiais
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-blue-400 transition-colors">
                  Localização & Secretaria
                </a>
              </li>
              <li>
                <Link href="/login" className="hover:text-blue-400 transition-colors">
                  Área Administrativa (Login)
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Atendimento & Secretaria */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 mb-4">
              Secretaria Acadêmica
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div>
                <span className="text-slate-500 block text-xs font-medium">Endereço</span>
                <span className="text-slate-300">Av. Universitária, 1500 - Polo Tecnológico</span>
              </div>
              <div>
                <span className="text-slate-500 block text-xs font-medium">Telefones</span>
                <span className="text-slate-300">(15) 3251-4144 / (15) 3251-4200</span>
              </div>
              <div>
                <span className="text-slate-500 block text-xs font-medium">Atendimento</span>
                <span className="text-slate-300">Segunda a Sexta, das 08h00 às 21h30</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Faixa Inferior de Direitos Autorais */}
      <div className="bg-slate-950 border-t border-slate-800/80 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {currentYear} Sitech - Escola Técnica Estadual. Todos os direitos reservados.</p>
          <p>
            Matrizes curriculares com base técnica referenciada no modelo da ETEC Sales Gomes.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
