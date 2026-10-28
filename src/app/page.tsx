"use client";

import { useState } from "react";
import Link from "next/link";

interface CourseSubject {
  name: string;
  semester: number;
}

interface CourseItem {
  id: string;
  title: string;
  category: "TI" | "Industria" | "Gestao" | "Saude";
  categoryLabel: string;
  badgeColor: string;
  duration: string;
  period: string;
  workload: string;
  summary: string;
  subjects: CourseSubject[];
  highlights: string[];
}

const allCourses: CourseItem[] = [
  {
    id: "ds",
    title: "Técnico em Desenvolvimento de Sistemas",
    category: "TI",
    categoryLabel: "Tecnologia & Software",
    badgeColor: "bg-[#1340E8] text-white",
    duration: "3 Semestres (1 ano e meio)",
    period: "Noturno (19h às 23h)",
    workload: "1.200 horas",
    summary:
      "Formação completa para programadores: arquitetura de software, desenvolvimento frontend e backend, bancos de dados relacionais e mobile apps.",
    highlights: ["React & TypeScript", "Node.js & Python", "SQL & Bancos de Dados", "Projetos Reais"],
    subjects: [
      { name: "Lógica de Programação e Algoritmos", semester: 1 },
      { name: "Fundamentos de Redes e Sistemas Operacionais", semester: 1 },
      { name: "Modelagem e Banco de Dados", semester: 1 },
      { name: "Desenvolvimento Web I (HTML5, CSS3, JS)", semester: 1 },
      { name: "Programação Orientada a Objetos", semester: 2 },
      { name: "Desenvolvimento Web II (APIs e Fullstack)", semester: 2 },
      { name: "Desenvolvimento para Dispositivos Móveis", semester: 2 },
      { name: "Segurança de Sistemas e Informação", semester: 3 },
      { name: "Testes e Qualidade de Software", semester: 3 },
      { name: "Trabalho de Conclusão de Curso (TCC Aplicado)", semester: 3 },
    ],
  },
  {
    id: "mecatronica",
    title: "Técnico em Mecatrônica",
    category: "Industria",
    categoryLabel: "Indústria & Automação",
    badgeColor: "bg-[#FF5500] text-white",
    duration: "3 Semestres (1 ano e meio)",
    period: "Noturno (19h às 23h)",
    workload: "1.200 horas",
    summary:
      "Integra mecânica de precisão, eletroeletrônica e computação aplicada ao controle de linhas industriais, robótica e processos automatizados.",
    highlights: ["Robótica Industrial", "Programação de CLP", "Pneumática & Hidráulica", "Indústria 4.0"],
    subjects: [
      { name: "Desenho Técnico Mecânico e CAD", semester: 1 },
      { name: "Eletroeletrônica Básica e Medições", semester: 1 },
      { name: "Tecnologia dos Materiais Mecânicos", semester: 1 },
      { name: "Sistemas Pneumáticos e Hidráulicos", semester: 2 },
      { name: "Controladores Lógicos Programáveis (CLP)", semester: 2 },
      { name: "Eletrônica Digital e Microcontroladores", semester: 2 },
      { name: "Robótica e Manipuladores Industriais", semester: 3 },
      { name: "Sistemas Integrados de Manufatura", semester: 3 },
      { name: "Manutenção de Sistemas Mecatrônicos", semester: 3 },
      { name: "TCC em Automação Industrial", semester: 3 },
    ],
  },
  {
    id: "eletrotecnica",
    title: "Técnico em Eletrotécnica",
    category: "Industria",
    categoryLabel: "Engenharia Elétrica",
    badgeColor: "bg-[#FF5500] text-white",
    duration: "3 Semestres (1 ano e meio)",
    period: "Noturno (19h às 23h)",
    workload: "1.200 horas",
    summary:
      "Instalação, operação e manutenção de sistemas elétricos prediais e industriais, com ênfase em comandos, segurança NR-10 e energia sustentável.",
    highlights: ["Comandos Elétricos", "Norma NR-10", "Subestações & Alta Tensão", "Projetos Elétricos"],
    subjects: [
      { name: "Circuitos Elétricos e Medidas", semester: 1 },
      { name: "Instalações Elétricas Prediais", semester: 1 },
      { name: "Normas de Segurança e NR-10", semester: 1 },
      { name: "Comandos Elétricos e Acionamentos", semester: 2 },
      { name: "Máquinas Elétricas e Transformadores", semester: 2 },
      { name: "Projetos de Instalações Industriais", semester: 2 },
      { name: "Geração, Transmissão e Distribuição", semester: 3 },
      { name: "Sistemas Fotovoltaicos e Renováveis", semester: 3 },
      { name: "Automação Predial e Industrial", semester: 3 },
      { name: "TCC em Instalações Elétricas", semester: 3 },
    ],
  },
  {
    id: "edificacoes",
    title: "Técnico em Edificações",
    category: "Industria",
    categoryLabel: "Construção Civil",
    badgeColor: "bg-[#00A86B] text-white",
    duration: "3 Semestres (1 ano e meio)",
    period: "Noturno (19h às 23h)",
    workload: "1.200 horas",
    summary:
      "Acompanhamento e execução de obras civis, elaboração de projetos arquitetônicos, levantamentos topográficos e ensaios de materiais de construção.",
    highlights: ["AutoCAD & BIM", "Topografia Prática", "Ensaios de Concreto", "Orçamento de Obras"],
    subjects: [
      { name: "Desenho Arquitetônico e BIM", semester: 1 },
      { name: "Materiais de Construção Civil", semester: 1 },
      { name: "Topografia Geral e Nivelamento", semester: 1 },
      { name: "Mecânica dos Solos e Fundações", semester: 2 },
      { name: "Instalações Hidráulicas e Sanitárias", semester: 2 },
      { name: "Resistência das Estruturas", semester: 2 },
      { name: "Planejamento e Orçamento de Obras", semester: 3 },
      { name: "Gerenciamento e Segurança em Canteiro", semester: 3 },
      { name: "Projetos e Patologias das Construções", semester: 3 },
      { name: "TCC em Construção Civil", semester: 3 },
    ],
  },
  {
    id: "farmacia",
    title: "Técnico em Farmácia",
    category: "Saude",
    categoryLabel: "Saúde & Farmácia",
    badgeColor: "bg-[#7C3AED] text-white",
    duration: "3 Semestres (1 ano e meio)",
    period: "Noturno (19h às 23h)",
    workload: "1.200 horas",
    summary:
      "Atuação em drogarias, farmácias de manipulação e indústrias farmacêuticas, dominando controle de estoque, dispensação e farmacotécnica.",
    highlights: ["Farmacotécnica Prática", "Controle de Qualidade", "Dispensação Ética", "Laboratório Farmacêutico"],
    subjects: [
      { name: "Anatomia e Fisiologia Humana", semester: 1 },
      { name: "Microbiologia e Imunologia Básica", semester: 1 },
      { name: "Química Aplicada e Biossegurança", semester: 1 },
      { name: "Farmacotécnica e Manipulação de Fórmulas", semester: 2 },
      { name: "Farmacologia Geral e Medicamentos", semester: 2 },
      { name: "Dispensação e Atenção Farmacêutica", semester: 2 },
      { name: "Controle de Qualidade em Medicamentos", semester: 3 },
      { name: "Cosmetologia e Produtos para Saúde", semester: 3 },
      { name: "Legislação e Boas Práticas Farmacêuticas", semester: 3 },
      { name: "TCC em Ciências Farmacêuticas", semester: 3 },
    ],
  },
  {
    id: "administracao",
    title: "Técnico em Administração",
    category: "Gestao",
    categoryLabel: "Gestão & Estratégia",
    badgeColor: "bg-[#0B2559] text-white",
    duration: "3 Semestres (1 ano e meio)",
    period: "Noturno (19h às 23h)",
    workload: "1.000 horas",
    summary:
      "Desenvolvimento de competências em gestão financeira, logística, recursos humanos, compras, marketing digital e modelos de negócios inovadores.",
    highlights: ["Finanças Corporativas", "Logística & Supply Chain", "Planejamento Estratégico", "Simulação Empresarial"],
    subjects: [
      { name: "Teoria Geral da Administração", semester: 1 },
      { name: "Comunicação Empresarial e Negociação", semester: 1 },
      { name: "Matemática Financeira e Estatística", semester: 1 },
      { name: "Gestão de Custos e Contabilidade", semester: 2 },
      { name: "Gestão de Pessoas e Relações de Trabalho", semester: 2 },
      { name: "Logística e Cadeia de Suprimentos", semester: 2 },
      { name: "Marketing e Inteligência Comercial", semester: 3 },
      { name: "Planejamento Estratégico e Inovação", semester: 3 },
      { name: "Legislação Tributária e Empresarial", semester: 3 },
      { name: "Plano de Negócios e TCC", semester: 3 },
    ],
  },
  {
    id: "mecanica",
    title: "Técnico em Mecânica",
    category: "Industria",
    categoryLabel: "Indústria Mecânica",
    badgeColor: "bg-[#FF5500] text-white",
    duration: "3 Semestres (1 ano e meio)",
    period: "Noturno (19h às 23h)",
    workload: "1.200 horas",
    summary:
      "Operação de máquinas industriais, usinagem convencional e CNC, soldagem técnica, metrologia rigorosa e manutenção mecânica preventiva.",
    highlights: ["Usinagem em Torno e Fresa", "Torno CNC e CAD/CAM", "Soldagem Industrial", "Metrologia Dimensional"],
    subjects: [
      { name: "Metrologia Dimensional e Tolerâncias", semester: 1 },
      { name: "Processos de Usinagem Convencional", semester: 1 },
      { name: "Desenho Mecânico Técnico", semester: 1 },
      { name: "Processos de Soldagem e União", semester: 2 },
      { name: "Usinagem a Comando Numérico (CNC)", semester: 2 },
      { name: "Ciência e Ensaio dos Materiais", semester: 2 },
      { name: "Manutenção Mecânica e Lubrificação", semester: 3 },
      { name: "Elementos de Máquinas e Transmissão", semester: 3 },
      { name: "Gestão da Produção e Qualidade", semester: 3 },
      { name: "TCC em Manufatura Mecânica", semester: 3 },
    ],
  },
  {
    id: "quimica",
    title: "Técnico em Química",
    category: "Saude",
    categoryLabel: "Química & Processos",
    badgeColor: "bg-[#00A86B] text-white",
    duration: "3 Semestres (1 ano e meio)",
    period: "Noturno (19h às 23h)",
    workload: "1.200 horas",
    summary:
      "Execução de ensaios laboratoriais e físico-químicos, controle de processos em indústrias químicas, ambientais, de tintas e tratamento de efluentes.",
    highlights: ["Análise Instrumental", "Química Orgânica Prática", "Tratamento de Efluentes", "Controle de Processos"],
    subjects: [
      { name: "Química Geral e Prática de Laboratório", semester: 1 },
      { name: "Físico-Química e Termodinâmica Básica", semester: 1 },
      { name: "Biossegurança e Boas Práticas", semester: 1 },
      { name: "Análise Química Quantitativa e Qualitativa", semester: 2 },
      { name: "Química Orgânica Experimental", semester: 2 },
      { name: "Processos Químicos Industriais", semester: 2 },
      { name: "Análise Química Instrumental", semester: 3 },
      { name: "Tratamento de Águas e Efluentes", semester: 3 },
      { name: "Controle Estatístico de Qualidade", semester: 3 },
      { name: "TCC em Tecnologia Química", semester: 3 },
    ],
  },
  {
    id: "nutricao",
    title: "Técnico em Nutrição e Dietética",
    category: "Saude",
    categoryLabel: "Alimentação & Saúde",
    badgeColor: "bg-[#7C3AED] text-white",
    duration: "3 Semestres (1 ano e meio)",
    period: "Noturno (19h às 23h)",
    workload: "1.200 horas",
    summary:
      "Supervisão e preparo de alimentos em cozinhas industriais, hospitais e restaurantes, assegurando normas sanitárias e qualidade nutricional.",
    highlights: ["Técnica Dietética", "Higiene dos Alimentos", "Gestão de Restaurantes", "Cardápios Hospitalares"],
    subjects: [
      { name: "Anatomia e Nutrição Básica", semester: 1 },
      { name: "Microbiologia e Parasitologia dos Alimentos", semester: 1 },
      { name: "Higiene Sanitária e Boas Práticas (BP)", semester: 1 },
      { name: "Técnica Dietética e Gastronomia Básica", semester: 2 },
      { name: "Composição e Avaliação de Alimentos", semester: 2 },
      { name: "Gestão de Unidades de Alimentação (UAN)", semester: 2 },
      { name: "Nutrição Clínica e Dietoterapia", semester: 3 },
      { name: "Nutrição em Saúde Coletiva", semester: 3 },
      { name: "Controle de Custos e Estoques Alimentares", semester: 3 },
      { name: "TCC em Nutrição e Dietética", semester: 3 },
    ],
  },
];

const mockNews = [
  {
    id: "vestibulinho-2026",
    tag: "PROCESSO SELETIVO",
    tagBg: "bg-[#FF5500] text-white",
    date: "26 OUTUBRO 2026",
    title: "Publicado o Edital Oficial do Vestibulinho 2026 com 360 Vagas Gratuitas",
    summary:
      "A Direção da Sitech divulgou as diretrizes completas para o exame classificatório do primeiro semestre letivo de 2026. Provas presenciais e isenção de taxa disponíveis.",
    author: "Comissão de Vestibulinho",
  },
  {
    id: "lab-robotica",
    tag: "INFRAESTRUTURA",
    tagBg: "bg-[#1340E8] text-white",
    date: "21 OUTUBRO 2026",
    title: "Parceria com Polo Fabril viabiliza novos 12 Kits Didáticos de Robótica e CLP",
    summary:
      "Estudantes de Mecatrônica e Eletrotécnica já contam com bancadas renovadas para montagem de comandos pneumáticos e esteiras industriais automatizadas.",
    author: "Coordenação de Mecatrônica",
  },
  {
    id: "premio-inovacao",
    tag: "CONQUISTA ACADÊMICA",
    tagBg: "bg-[#00A86B] text-white",
    date: "15 OUTUBRO 2026",
    title: "Projeto de Software de Alunos de Desenvolvimento vence Desafio Tecnológico",
    summary:
      "O aplicativo desenvolvido para gestão logística do comércio local foi laureado em feira estadual; os alunos foram convidados para incubação acelerada.",
    author: "Núcleo de Tecnologia e Inovação",
  },
];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("TODOS");
  const [selectedCourseModal, setSelectedCourseModal] = useState<CourseItem | null>(null);

  const filteredCourses =
    selectedCategory === "TODOS"
      ? allCourses
      : allCourses.filter((c) => c.category === selectedCategory);

  return (
    <div className="flex flex-col w-full bg-[#f4f5f8] text-[#0f172a]">
      {/* ============================================================ */}
      {/* 1. HERO INSTITUCIONAL (AUTÊNTICO, VIBRANTE, SEM GRADIENTE IA) */}
      {/* ============================================================ */}
      <section className="relative w-full bg-[#0b2559] text-white border-b-4 border-[#ff5500] pt-6 pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Bar da Hero: Logo & Status do Campus */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 mb-10 border-b border-slate-700/60">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-[#ff5500] flex items-center justify-center font-black text-white text-lg shadow-neo-sm">
                S
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white block">SITECH</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-sky-300">
                  Escola Técnica Estadual de Excelência
                </span>
              </div>
            </div>

            {/* Badge dinâmico de status */}
            <div className="flex items-center gap-2.5 bg-[#07193b] px-3.5 py-1.5 border border-slate-700 text-xs font-mono">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-emerald-300">CAMPUS ATIVO</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300 font-bold">VESTIBULINHO 2026 ABERTO</span>
            </div>
          </div>

          {/* Grid Principal da Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Lado Esquerdo: Mensagem Forte e Ações */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block bg-[#ffe600] text-slate-950 font-black px-3 py-1 text-xs uppercase tracking-wider shadow-neo-sm">
                ESTRUTURA BASEADA NA ETEC SALES GOMES
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
                FORMAÇÃO TÉCNICA <br />
                <span className="inline-block bg-[#ff5500] text-white px-2 py-0.5 mt-2 shadow-neo-sm">
                  100% GRATUITA.
                </span>{" "}
                <br />
                PRONTA PRO MERCADO.
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-medium">
                Cursos técnicos noturnos presenciais de alta densidade prática. Laboratórios industriais reais de 
                robótica, computação e química, sem mensalidades e com diploma oficial de valor nacional.
              </p>

              {/* Botões de Ação com Estilo Neo-Técnico */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#cursos"
                  className="inline-flex items-center justify-center gap-2 bg-[#ff5500] hover:bg-[#e04a00] text-white px-7 py-4 text-sm font-black uppercase tracking-wider shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                >
                  <span>Explorar 9 Cursos Técnicos</span>
                  <span className="text-lg">↓</span>
                </a>

                <a
                  href="#noticias"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#0b2559] px-6 py-4 text-sm font-bold uppercase tracking-wider shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                >
                  <span>Comunicados Oficiais</span>
                </a>
              </div>

              {/* Placas de Estatísticas Sólidas */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-700/60">
                <div className="bg-[#07193b] p-3 border border-slate-700">
                  <div className="text-2xl font-black text-[#ffe600]">9</div>
                  <div className="text-[11px] font-bold text-slate-300 uppercase">Cursos Técnicos</div>
                </div>
                <div className="bg-[#07193b] p-3 border border-slate-700">
                  <div className="text-2xl font-black text-white">R$ 0</div>
                  <div className="text-[11px] font-bold text-slate-300 uppercase">Mensalidade</div>
                </div>
                <div className="bg-[#07193b] p-3 border border-slate-700">
                  <div className="text-2xl font-black text-emerald-400">1.200h</div>
                  <div className="text-[11px] font-bold text-slate-300 uppercase">Carga Horária</div>
                </div>
                <div className="bg-[#07193b] p-3 border border-slate-700">
                  <div className="text-2xl font-black text-[#ff5500]">88%</div>
                  <div className="text-[11px] font-bold text-slate-300 uppercase">Empregabilidade</div>
                </div>
              </div>
            </div>

            {/* Lado Direito: Terminal Interativo de Destaques Técnicos */}
            <div className="lg:col-span-5">
              <div className="bg-[#07193b] border-2 border-slate-600 shadow-neo-lg text-white overflow-hidden">
                {/* Header do Terminal */}
                <div className="bg-[#0f172a] px-4 py-2.5 flex items-center justify-between border-b border-slate-700">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 bg-[#ff5500] inline-block"></span>
                    <span className="h-3 w-3 bg-[#ffe600] inline-block"></span>
                    <span className="h-3 w-3 bg-[#00a86b] inline-block"></span>
                    <span className="ml-2 text-xs font-mono font-bold text-slate-400">
                      sitech-lab-matrix.sh
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-sky-300 bg-blue-950 px-2 py-0.5 font-bold">
                    ENSINO PÚBLICO
                  </span>
                </div>

                {/* Conteúdo do Card Técnico */}
                <div className="p-5 space-y-4">
                  <div className="space-y-1">
                    <div className="text-[11px] font-mono text-[#ffe600]">
                      &gt; DESTAQUE EM ALTA DEMANDA INDUSTRIAL
                    </div>
                    <div className="text-xl font-black text-white">
                      Técnico em Desenvolvimento de Sistemas
                    </div>
                    <div className="text-xs text-slate-300 font-mono">
                      Período Noturno • Duração: 3 semestres • 1.200h
                    </div>
                  </div>

                  <div className="bg-[#0b2559] p-3 border border-slate-700 space-y-2">
                    <div className="text-xs font-bold text-sky-300 uppercase tracking-wider">
                      Matérias de Destaque da Grade:
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-200">
                      <div className="flex items-center gap-1">
                        <span className="text-[#ff5500]">▸</span> Programação Web
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-[#ff5500]">▸</span> Banco de Dados SQL
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-[#ff5500]">▸</span> Apps Mobile
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-[#ff5500]">▸</span> Segurança & Nuvem
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="text-xs text-slate-400 font-mono">
                      Sem taxa de matrícula
                    </div>
                    <a
                      href="#cursos"
                      className="bg-[#ffe600] text-slate-950 font-black px-3.5 py-1.5 text-xs uppercase tracking-wider hover:bg-yellow-300 transition-colors"
                    >
                      Ver Matriz Completa
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. TICKER MARQUEE ANIMADO (VIBRANTE, CONTINUO, ALERTA 2026) */}
      {/* ============================================================ */}
      <div className="w-full bg-[#ffe600] text-slate-950 border-b-2 border-slate-950 overflow-hidden py-2.5 font-mono font-black text-xs sm:text-sm tracking-wider select-none">
        <div className="animate-ticker">
          <span className="px-6 flex items-center gap-2">
            ⚡ VESTIBULINHO SITECH 2026: INSCRIÇÕES ABERTAS
          </span>
          <span className="px-6 flex items-center gap-2">
            ★ CURSOS TÉCNICOS 100% GRATUITOS
          </span>
          <span className="px-6 flex items-center gap-2">
            ⚙️ 9 OPÇÕES PRESENCIAIS NO PERÍODO NOTURNO
          </span>
          <span className="px-6 flex items-center gap-2">
            🏢 MATRIZES CURRICULARES INSPIRADAS NA ETEC SALES GOMES
          </span>
          <span className="px-6 flex items-center gap-2">
            ⚡ LABORATÓRIOS INDUSTRIAIS COM TECNOLOGIA DE PONTA
          </span>
          <span className="px-6 flex items-center gap-2">
            ★ DIPLOMA TÉCNICO OFICIAL RECONHECIDO NACIONALMENTE
          </span>
          {/* Repetição para loop contínuo perfeito */}
          <span className="px-6 flex items-center gap-2">
            ⚡ VESTIBULINHO SITECH 2026: INSCRIÇÕES ABERTAS
          </span>
          <span className="px-6 flex items-center gap-2">
            ★ CURSOS TÉCNICOS 100% GRATUITOS
          </span>
          <span className="px-6 flex items-center gap-2">
            ⚙️ 9 OPÇÕES PRESENCIAIS NO PERÍODO NOTURNO
          </span>
          <span className="px-6 flex items-center gap-2">
            🏢 MATRIZES CURRICULARES INSPIRADAS NA ETEC SALES GOMES
          </span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. CATÁLOGO COMPLETO DE CURSOS TÉCNICOS (#cursos) */}
      {/* ============================================================ */}
      <section id="cursos" className="py-16 sm:py-24 bg-[#f4f5f8] border-b-2 border-slate-300 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="inline-block bg-[#0b2559] text-white px-2.5 py-1 text-xs font-black uppercase tracking-wider mb-2">
                Catálogo Oficial 2026
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                CURSOS TÉCNICOS PRESENCIAIS
              </h2>
              <p className="text-slate-600 mt-1 max-w-2xl font-medium">
                Conheça a grade curricular completa dos 9 cursos técnicos inspirados na ETEC Sales Gomes.
                Clique em qualquer curso para visualizar a matriz de matérias semestre por semestre.
              </p>
            </div>

            {/* Filtros por Categoria com Botões Neo-Técnicos */}
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: "TODOS", label: "Todos (9)" },
                { id: "TI", label: "Tecnologia" },
                { id: "Industria", label: "Indústria & Automação" },
                { id: "Gestao", label: "Gestão" },
                { id: "Saude", label: "Saúde & Farmácia" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider transition-all ${
                    selectedCategory === cat.id
                      ? "bg-[#ff5500] text-white shadow-neo-sm translate-x-[-1px] translate-y-[-1px]"
                      : "bg-white text-slate-700 border border-slate-300 hover:border-slate-800"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid dos Cards de Cursos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="flex flex-col justify-between bg-white border-2 border-[#0b2559] p-6 shadow-neo hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-neo-lg transition-all group"
              >
                <div>
                  {/* Tag superior de categoria e carga horária */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-[11px] font-black uppercase px-2 py-0.5 ${course.badgeColor}`}
                    >
                      {course.categoryLabel}
                    </span>
                    <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5">
                      {course.workload}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 group-hover:text-[#1340e8] transition-colors leading-tight">
                    {course.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {course.summary}
                  </p>

                  {/* Highlights técnicos */}
                  <div className="mt-4 flex flex-wrap gap-1">
                    {course.highlights.map((h) => (
                      <span
                        key={h}
                        className="bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-bold px-2 py-0.5 uppercase"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t-2 border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-600 font-mono">
                    <span>{course.duration}</span>
                    <span className="text-[#0b2559]">{course.period}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedCourseModal(course)}
                    className="w-full py-2.5 bg-[#0b2559] hover:bg-[#1340e8] text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-neo-sm"
                  >
                    <span>Ver Matriz Curricular & Matérias</span>
                    <span className="text-sm">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. MODAL / GAVETA DE MATRIZ CURRICULAR DO CURSO SELECIONADO */}
      {/* ============================================================ */}
      {selectedCourseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl bg-white border-4 border-[#0b2559] shadow-neo-lg max-h-[90vh] flex flex-col">
            {/* Header do Modal */}
            <div className="bg-[#0b2559] text-white p-5 flex items-start justify-between border-b-2 border-[#ff5500]">
              <div>
                <span className="bg-[#ffe600] text-slate-950 font-black text-[10px] uppercase px-2 py-0.5">
                  {selectedCourseModal.categoryLabel} • {selectedCourseModal.workload}
                </span>
                <h3 className="text-xl sm:text-2xl font-black mt-1 leading-snug">
                  {selectedCourseModal.title}
                </h3>
                <p className="text-xs text-sky-200 mt-1 font-mono">
                  {selectedCourseModal.duration} | {selectedCourseModal.period}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCourseModal(null)}
                className="bg-[#ff5500] hover:bg-[#e04a00] text-white h-8 w-8 flex items-center justify-center font-black text-sm transition-colors"
                aria-label="Fechar matriz"
              >
                ✕
              </button>
            </div>

            {/* Corpo do Modal com a Matriz Semestre a Semestre */}
            <div className="p-6 overflow-y-auto space-y-5 text-slate-900">
              <p className="text-xs text-slate-600 font-medium">
                {selectedCourseModal.summary}
              </p>

              <div className="space-y-4">
                <h4 className="text-sm font-black uppercase tracking-wider text-[#0b2559] border-b-2 border-slate-200 pb-1">
                  Disciplinas da Matriz Curricular (Por Semestre):
                </h4>

                {[1, 2, 3].map((sem) => {
                  const subs = selectedCourseModal.subjects.filter((s) => s.semester === sem);
                  if (subs.length === 0) return null;
                  return (
                    <div key={sem} className="bg-slate-50 border border-slate-300 p-3.5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-black text-xs uppercase text-[#ff5500]">
                          {sem}º Semestre Letivo
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 font-bold">
                          {subs.length} matérias
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {subs.map((s, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-xs font-mono text-slate-800"
                          >
                            <span className="text-slate-400">▪</span>
                            <span className="font-semibold">{s.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              <div className="bg-amber-50 border border-amber-300 p-3 text-xs text-amber-900 font-medium">
                <strong>Observação de Matrícula:</strong> Aulas práticas ministradas em laboratórios especializados. Não há cobrança de taxas de laboratório ou material didático.
              </div>
            </div>

            {/* Rodapé do Modal */}
            <div className="bg-slate-100 p-4 border-t border-slate-200 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedCourseModal(null)}
                className="px-5 py-2 bg-[#0b2559] text-white text-xs font-black uppercase tracking-wider hover:bg-[#1340e8]"
              >
                Fechar Matriz
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 5. DIFERENCIAIS DA ESCOLA TÉCNICA (#diferenciais) */}
      {/* ============================================================ */}
      <section id="diferenciais" className="py-16 sm:py-24 bg-white border-b-2 border-slate-300 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-[#ff5500] text-white px-3 py-1 text-xs font-black uppercase tracking-wider">
              Pilares da Nossa Formação
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mt-3">
              POR QUE A SITECH É REFERÊNCIA REGIONAL?
            </h2>
            <p className="text-slate-600 mt-2 font-medium">
              Ambiente de aprendizado projetado para replicar as condições do mercado de trabalho e indústrias modernas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#f4f5f8] border-2 border-[#0b2559] p-6 shadow-neo">
              <div className="h-12 w-12 bg-[#1340e8] text-white font-black text-xl flex items-center justify-center mb-4 shadow-neo-sm">
                01
              </div>
              <h3 className="text-lg font-black text-slate-900 uppercase">
                Laboratórios Especializados
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Workstations configuradas, bancadas de soldagem, tornos CNC, impressoras 3D e braços robóticos industriais para práticas diárias.
              </p>
            </div>

            <div className="bg-[#f4f5f8] border-2 border-[#0b2559] p-6 shadow-neo">
              <div className="h-12 w-12 bg-[#ff5500] text-white font-black text-xl flex items-center justify-center mb-4 shadow-neo-sm">
                02
              </div>
              <h3 className="text-lg font-black text-slate-900 uppercase">
                Professores do Mercado
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Corpo docente composto por engenheiros, químicos, farmacêuticos e desenvolvedores atuantes nos principais polos de tecnologia e indústria.
              </p>
            </div>

            <div className="bg-[#f4f5f8] border-2 border-[#0b2559] p-6 shadow-neo">
              <div className="h-12 w-12 bg-[#00a86b] text-white font-black text-xl flex items-center justify-center mb-4 shadow-neo-sm">
                03
              </div>
              <h3 className="text-lg font-black text-slate-900 uppercase">
                Encaminhamento para Estágio
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Convênios ativos com mais de 45 indústrias e empresas regionais para contratação imediata de estudantes a partir do 2º semestre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. NOTÍCIAS & COMUNICADOS OFICIAIS (#noticias) */}
      {/* ============================================================ */}
      <section id="noticias" className="py-16 sm:py-24 bg-[#f4f5f8] border-b-2 border-slate-300 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="bg-[#00a86b] text-white px-2.5 py-1 text-xs font-black uppercase tracking-wider mb-2 inline-block">
                Comunicação Oficial
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                NOTÍCIAS & COMUNICADOS DA DIREÇÃO
              </h2>
              <p className="text-slate-600 mt-1 max-w-2xl font-medium">
                Avisos institucionais, editais de vestibulinho e conquistas dos nossos estudantes.
              </p>
            </div>

            <Link
              href="/login"
              className="inline-flex items-center gap-2 bg-white border-2 border-[#0b2559] px-4 py-2 text-xs font-black uppercase tracking-wider text-slate-900 shadow-neo-sm hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
            >
              <span>Painel de Publicação (Docentes)</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockNews.map((news) => (
              <article
                key={news.id}
                className="bg-white border-2 border-[#0b2559] p-6 shadow-neo flex flex-col justify-between hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3 font-mono">
                    <span className={`px-2 py-0.5 font-bold uppercase text-[10px] ${news.tagBg}`}>
                      {news.tag}
                    </span>
                    <span className="text-slate-500 font-bold">{news.date}</span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 leading-snug">
                    {news.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {news.summary}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500 font-bold">{news.author}</span>
                  <span className="text-[#ff5500] font-black uppercase cursor-pointer hover:underline">
                    Ler edital
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. CONTATO & LOCALIZAÇÃO DO CAMPUS (#contato) */}
      {/* ============================================================ */}
      <section id="contato" className="py-16 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0b2559] text-white border-4 border-slate-950 p-8 sm:p-12 shadow-neo-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="bg-[#ffe600] text-slate-950 font-black text-xs uppercase px-2.5 py-1">
                  Atendimento e Secretaria Escolar
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  VENHA CONHECER NOSSOS LABORATÓRIOS E INSTALAÇÕES
                </h2>
                <p className="text-slate-200 text-sm max-w-2xl font-medium">
                  Nossa secretaria acadêmica atende de segunda a sexta, das 08h às 21h30.
                  Visitas guiadas para futuros alunos e escolas podem ser agendadas gratuitamente.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs font-mono">
                  <div className="bg-[#07193b] p-3 border border-slate-700">
                    <div className="font-bold text-[#ffe600]">ENDEREÇO</div>
                    <div className="text-slate-300 mt-1">Av. Universitária, 1500 - Polo Tecnológico</div>
                  </div>
                  <div className="bg-[#07193b] p-3 border border-slate-700">
                    <div className="font-bold text-[#ffe600]">TELEFONE</div>
                    <div className="text-slate-300 mt-1">(15) 3251-4144 / 3251-4200</div>
                  </div>
                  <div className="bg-[#07193b] p-3 border border-slate-700">
                    <div className="font-bold text-[#ffe600]">E-MAIL</div>
                    <div className="text-slate-300 mt-1">secretaria@sitech.edu.br</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
                <a
                  href="#cursos"
                  className="w-full text-center bg-[#ff5500] hover:bg-[#e04a00] text-white py-3.5 text-xs font-black uppercase tracking-wider shadow-neo-sm hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
                >
                  Consultar Todos os Cursos
                </a>
                <Link
                  href="/login"
                  className="w-full text-center bg-white hover:bg-slate-100 text-[#0b2559] py-3.5 text-xs font-black uppercase tracking-wider shadow-neo-sm transition-all"
                >
                  Portal Administrativo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
