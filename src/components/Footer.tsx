import Link from "next/link";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-[#07193b] text-white border-t-4 border-[#ff5500]">
      {/* Faixa Superior de Atendimento Rápido */}
      <div className="bg-[#0b2559] border-b border-slate-700 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 bg-[#ffe600] text-slate-950 font-black text-lg flex items-center justify-center">
              !
            </div>
            <div>
              <p className="text-xs font-black uppercase text-[#ffe600] tracking-wider">
                Vestibulinho 2026 • 1º Semestre Letivo
              </p>
              <p className="text-sm font-bold text-white">
                Ensino Técnico Público Estadual e 100% Gratuito
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#cursos"
              className="bg-[#ff5500] hover:bg-[#e04a00] text-white px-4 py-2 text-xs font-black uppercase tracking-wider shadow-neo-sm transition-transform hover:translate-x-[-1px] hover:translate-y-[-1px]"
            >
              Consultar Matrizes
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
              <div className="h-9 w-9 bg-[#ff5500] text-white font-black flex items-center justify-center text-base">
                S
              </div>
              <div>
                <span className="text-xl font-black text-white">SITECH</span>
                <span className="text-[10px] font-bold text-sky-300 block uppercase tracking-widest">
                  Escola Técnica
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              Instituição dedicada à formação profissional técnica de excelência. Laboratórios 
              modernos com equipamentos reais e matrizes alinhadas às demandas produtivas.
            </p>
            <div className="bg-[#0b2559] p-2.5 border border-slate-700 text-[11px] font-mono text-emerald-300 font-bold">
              ✓ Cursos 100% Gratuitos • Sem Mensalidade
            </div>
          </div>

          {/* Coluna 2: Cursos Técnicos */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-[#ffe600] mb-4">
              Cursos Técnicos (Noturno)
            </h4>
            <ul className="space-y-2 text-xs font-bold text-slate-300">
              <li>
                <a href="#cursos" className="hover:text-white transition-colors">
                  ▸ Desenvolvimento de Sistemas
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-white transition-colors">
                  ▸ Mecatrônica & Automação
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-white transition-colors">
                  ▸ Eletrotécnica & Comandos
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-white transition-colors">
                  ▸ Edificações & Construção
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-white transition-colors">
                  ▸ Farmácia & Química
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-white transition-colors">
                  ▸ Administração & Negócios
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Institucional */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-[#ffe600] mb-4">
              Navegação Direta
            </h4>
            <ul className="space-y-2 text-xs font-bold text-slate-300">
              <li>
                <a href="#cursos" className="hover:text-white transition-colors">
                  ▸ Catálogo de Cursos
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">
                  ▸ Laboratórios & Infraestrutura
                </a>
              </li>
              <li>
                <a href="#noticias" className="hover:text-white transition-colors">
                  ▸ Comunicados Oficiais
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  ▸ Localização & Visitas
                </a>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition-colors">
                  ▸ Portal do Docente (Login)
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Atendimento & Secretaria */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-[#ffe600] mb-4">
              Secretaria & Atendimento
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300 font-mono">
              <div>
                <span className="text-slate-400 block font-bold">ENDEREÇO</span>
                <span>Av. Universitária, 1500 - Polo Tecnológico</span>
              </div>
              <div>
                <span className="text-slate-400 block font-bold">TELEFONES</span>
                <span>(15) 3251-4144 / (15) 3251-4200</span>
              </div>
              <div>
                <span className="text-slate-400 block font-bold">HORÁRIO</span>
                <span>Segunda a Sexta, das 08h às 21h30</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Faixa Inferior */}
      <div className="bg-[#051128] border-t border-slate-800 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-mono">
          <p>© {currentYear} Sitech - Escola Técnica. Todos os direitos reservados.</p>
          <p className="text-slate-500">
            Base Curricular inspirada na ETEC Sales Gomes • Educação Pública de Qualidade
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
