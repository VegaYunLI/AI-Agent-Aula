"use client";

import { useState, useMemo } from "react";
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
  badgeTheme: {
    bg: string;
    text: string;
    border: string;
    dot: string;
  };
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
    badgeTheme: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      border: "border-blue-200/60",
      dot: "bg-blue-600",
    },
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
    badgeTheme: {
      bg: "bg-amber-50",
      text: "text-amber-800",
      border: "border-amber-200/60",
      dot: "bg-amber-600",
    },
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
    badgeTheme: {
      bg: "bg-amber-50",
      text: "text-amber-800",
      border: "border-amber-200/60",
      dot: "bg-amber-600",
    },
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
    badgeTheme: {
      bg: "bg-amber-50",
      text: "text-amber-800",
      border: "border-amber-200/60",
      dot: "bg-amber-600",
    },
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
    badgeTheme: {
      bg: "bg-emerald-50",
      text: "text-emerald-800",
      border: "border-emerald-200/60",
      dot: "bg-emerald-600",
    },
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
    badgeTheme: {
      bg: "bg-sky-50",
      text: "text-sky-800",
      border: "border-sky-200/60",
      dot: "bg-sky-600",
    },
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
    badgeTheme: {
      bg: "bg-amber-50",
      text: "text-amber-800",
      border: "border-amber-200/60",
      dot: "bg-amber-600",
    },
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
    badgeTheme: {
      bg: "bg-emerald-50",
      text: "text-emerald-800",
      border: "border-emerald-200/60",
      dot: "bg-emerald-600",
    },
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
    badgeTheme: {
      bg: "bg-emerald-50",
      text: "text-emerald-800",
      border: "border-emerald-200/60",
      dot: "bg-emerald-600",
    },
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
    badgeStyle: "bg-blue-50 text-blue-700 border border-blue-200/60",
    date: "26 de Outubro de 2026",
    title: "Publicado o Edital Oficial do Vestibulinho 2026 com 360 Vagas Gratuitas",
    summary:
      "A Direção da Sitech divulgou as diretrizes completas para o exame classificatório do primeiro semestre letivo de 2026. Provas presenciais e isenção de taxa disponíveis.",
    author: "Comissão de Vestibulinho",
  },
  {
    id: "lab-robotica",
    tag: "INFRAESTRUTURA",
    badgeStyle: "bg-amber-50 text-amber-800 border border-amber-200/60",
    date: "21 de Outubro de 2026",
    title: "Parceria com Polo Fabril viabiliza novos 12 Kits Didáticos de Robótica e CLP",
    summary:
      "Estudantes de Mecatrônica e Eletrotécnica já contam com bancadas renovadas para montagem de comandos pneumáticos e esteiras industriais automatizadas.",
    author: "Coordenação de Mecatrônica",
  },
  {
    id: "premio-inovacao",
    tag: "CONQUISTA ACADÊMICA",
    badgeStyle: "bg-emerald-50 text-emerald-800 border border-emerald-200/60",
    date: "15 de Outubro de 2026",
    title: "Projeto de Software de Alunos de Desenvolvimento vence Desafio Tecnológico",
    summary:
      "O aplicativo desenvolvido para gestão logística do comércio local foi laureado em feira estadual; os alunos foram convidados para incubação acelerada.",
    author: "Núcleo de Tecnologia e Inovação",
  },
];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("TODOS");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCourseModal, setSelectedCourseModal] = useState<CourseItem | null>(null);

  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      const matchesCategory =
        selectedCategory === "TODOS" || course.category === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === "" ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase())) ||
        course.summary.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="flex flex-col w-full bg-slate-50 text-slate-900">
      {/* ============================================================ */}
      {/* 1. HERO INSTITUCIONAL: ESTÚDIO TÉCNICO CONTEMPORÂNEO          */}
      {/* ============================================================ */}
      <section className="relative w-full pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-slate-200/80 bg-white">
        {/* Fundo decorativo sutil */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-slate-100/80 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Lado Esquerdo: Mensagem Principal */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge de Status do Campus */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-medium text-emerald-800 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Campus Ativo • Vestibulinho 2026 com Inscrições Abertas</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                O seu futuro profissional começa na prática.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                Cursos técnicos gratuitos de alta empregabilidade com aulas no período noturno. 
                Matrizes curriculares estruturadas e laboratórios industriais de ponta para preparar você para as demandas reais do mercado.
              </p>

              {/* Botões de Ação */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href="#cursos"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 text-sm font-semibold rounded-xl shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>Explorar 9 Cursos Técnicos</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>

                <a
                  href="#noticias"
                  className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200/80 text-slate-700 px-6 py-3.5 text-sm font-semibold rounded-xl transition-all duration-200"
                >
                  <span>Comunicados Oficiais</span>
                </a>
              </div>

              {/* Métricas e Fatos Institucionais */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">9</div>
                  <div className="text-xs font-medium text-slate-500">Cursos Técnicos</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">R$ 0</div>
                  <div className="text-xs font-medium text-slate-500">100% Gratuito</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">1.200h</div>
                  <div className="text-xs font-medium text-slate-500">Carga Horária</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">88%</div>
                  <div className="text-xs font-medium text-slate-500">Empregabilidade</div>
                </div>
              </div>
            </div>

            {/* Lado Direito: Card Interativo em Destaque */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white border border-slate-200/90 shadow-card p-6 sm:p-7 relative transition-all duration-300 hover:shadow-card-hover">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-blue-600"></span>
                    <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Destaque de Formação
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                    Noturno
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                    Técnico em Desenvolvimento de Sistemas
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Aprenda lógica, banco de dados relacional, APIs em Node.js, interfaces com React e TypeScript e projetos de software completos.
                  </p>
                </div>

                {/* Prévia da Matriz Curricular */}
                <div className="mt-5 rounded-xl bg-slate-50 p-4 border border-slate-100 space-y-2.5">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                    Matérias Principais da Grade:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Desenvolvimento Web</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Bancos de Dados SQL</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Engenharia de Software</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Dispositivos Móveis</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs text-slate-500">
                    1.200h • 3 Semestres
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedCourseModal(allCourses[0])}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                  >
                    <span>Ver Matriz do Curso</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. TICKER MARQUEE: INFORMAÇÕES CONTÍNUAS E ELEGANTES          */}
      {/* ============================================================ */}
      <div className="w-full bg-slate-900 text-slate-300 py-3 overflow-hidden select-none border-b border-slate-800">
        <div className="animate-ticker text-xs sm:text-sm font-medium">
          <span className="px-6 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
            Vestibulinho Sitech 2026: Inscrições Abertas para o 1º Semestre
          </span>
          <span className="px-6 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Cursos Técnicos Públicos 100% Gratuitos sem Mensalidades
          </span>
          <span className="px-6 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
            9 Opções Formativas com Aulas Práticas no Período Noturno
          </span>
          <span className="px-6 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
            Matrizes Curriculares Inspiradas na ETEC Sales Gomes
          </span>
          <span className="px-6 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Laboratórios Especializados com Equipamentos Industriais Reais
          </span>
          {/* Duplicação para loop contínuo sem solavancos */}
          <span className="px-6 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
            Vestibulinho Sitech 2026: Inscrições Abertas para o 1º Semestre
          </span>
          <span className="px-6 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Cursos Técnicos Públicos 100% Gratuitos sem Mensalidades
          </span>
          <span className="px-6 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
            9 Opções Formativas com Aulas Práticas no Período Noturno
          </span>
          <span className="px-6 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
            Matrizes Curriculares Inspiradas na ETEC Sales Gomes
          </span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. CATÁLOGO COMPLETO DE CURSOS TÉCNICOS (#cursos)            */}
      {/* ============================================================ */}
      <section id="cursos" className="py-20 sm:py-28 bg-slate-50 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Cursos Técnicos Presenciais
              </h2>
              <p className="text-slate-600 mt-2 max-w-2xl font-normal leading-relaxed text-sm sm:text-base">
                Explore a grade curricular detalhada dos 9 cursos técnicos noturnos. Clique em qualquer curso para examinar a lista de matérias semestre por semestre.
              </p>
            </div>

            {/* Barra de Busca Rápida */}
            <div className="w-full md:w-72">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar curso ou matéria..."
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 shadow-2xs"
                />
                <svg
                  className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Filtros por Categoria com Pills Elegantes */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              { id: "TODOS", label: "Todos os Cursos", count: allCourses.length },
              { id: "TI", label: "Tecnologia & Software", count: 1 },
              { id: "Industria", label: "Indústria & Automação", count: 3 },
              { id: "Saude", label: "Saúde & Farmácia", count: 3 },
              { id: "Gestao", label: "Gestão & Estratégia", count: 2 },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full ${
                    selectedCategory === cat.id ? "bg-slate-700 text-slate-200" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Mensagem quando nenhum curso corresponde à busca */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
              <p className="text-base font-semibold text-slate-800">
                Nenhum curso encontrado para a busca &quot;{searchQuery}&quot;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("TODOS");
                }}
                className="text-xs text-blue-600 font-semibold hover:underline"
              >
                Limpar filtros e exibir todos os cursos
              </button>
            </div>
          )}

          {/* Grid dos Cards de Cursos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="group flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Categoria e Carga Horária */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${course.badgeTheme.bg} ${course.badgeTheme.text} border ${course.badgeTheme.border}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${course.badgeTheme.dot}`}></span>
                      {course.categoryLabel}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {course.workload}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {course.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {course.summary}
                  </p>

                  {/* Highlights de Competências */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {course.highlights.map((h) => (
                      <span
                        key={h}
                        className="bg-slate-50 text-slate-600 border border-slate-200/60 text-xs px-2.5 py-0.5 rounded-lg"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>{course.duration}</span>
                    <span className="text-slate-700 font-semibold">{course.period}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedCourseModal(course)}
                    className="w-full py-2.5 bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all duration-200 shadow-2xs hover:shadow-xs"
                  >
                    <span>Ver Matriz Curricular</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. MODAL DE MATRIZ CURRICULAR                                 */}
      {/* ============================================================ */}
      {selectedCourseModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-slate-200 shadow-elevated max-h-[90vh] flex flex-col overflow-hidden animate-fade-in">
            {/* Header do Modal */}
            <div className="p-6 border-b border-slate-100 flex items-start justify-between bg-slate-50/60">
              <div className="space-y-1">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${selectedCourseModal.badgeTheme.bg} ${selectedCourseModal.badgeTheme.text} border ${selectedCourseModal.badgeTheme.border}`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${selectedCourseModal.badgeTheme.dot}`}></span>
                  {selectedCourseModal.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  {selectedCourseModal.title}
                </h3>
                <p className="text-xs text-slate-500">
                  {selectedCourseModal.duration} • {selectedCourseModal.period} • {selectedCourseModal.workload}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCourseModal(null)}
                className="h-8 w-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
                aria-label="Fechar matriz"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Conteúdo com a Matriz Semestre por Semestre */}
            <div className="p-6 overflow-y-auto space-y-5 text-slate-800">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedCourseModal.summary}
              </p>

              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Disciplinas da Matriz Curricular (Por Semestre)
                </span>

                {[1, 2, 3].map((sem) => {
                  const subs = selectedCourseModal.subjects.filter((s) => s.semester === sem);
                  if (subs.length === 0) return null;
                  return (
                    <div key={sem} className="rounded-xl border border-slate-200/90 bg-slate-50/70 p-4 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs uppercase tracking-wider text-blue-700">
                          {sem}º Semestre Letivo
                        </span>
                        <span className="text-xs text-slate-500">
                          {subs.length} matérias
                        </span>
                      </div>
                      <ul className="space-y-1.5">
                        {subs.map((s, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-xs sm:text-sm text-slate-700"
                          >
                            <svg className="w-3.5 h-3.5 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                            </svg>
                            <span>{s.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-xl bg-blue-50/80 border border-blue-200/70 p-3.5 text-xs text-blue-900 leading-relaxed">
                <strong>Observação de Matrícula:</strong> Aulas práticas ministradas em laboratórios com equipamentos industriais e softwares licenciados. Não há cobrança de taxas de laboratório ou material didático.
              </div>
            </div>

            {/* Rodapé do Modal */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedCourseModal(null)}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors"
              >
                Fechar Matriz
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 5. DIFERENCIAIS DA FORMAÇÃO (#diferenciais)                   */}
      {/* ============================================================ */}
      <section id="diferenciais" className="py-20 sm:py-28 bg-white border-y border-slate-200/80 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Por que a Sitech é referência regional
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              Um ambiente de aprendizado técnico desenhado para replicar com fidelidade as condições dos setores produtivos mais dinâmicos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-slate-200/90 p-8 shadow-card hover:shadow-card-hover transition-all duration-300 space-y-4">
              <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Laboratórios de Alta Densidade Prática
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Workstations configuradas, bancadas de soldagem, tornos CNC, impressoras 3D e manipuladores robóticos industriais para práticas semanais.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 p-8 shadow-card hover:shadow-card-hover transition-all duration-300 space-y-4">
              <div className="h-12 w-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Docentes com Atuação no Mercado
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Corpo docente formado por engenheiros, desenvolvedores, farmacêuticos e gestores atuantes nos principais polos de tecnologia e indústria.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 p-8 shadow-card hover:shadow-card-hover transition-all duration-300 space-y-4">
              <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Encaminhamento para Estágio e Emprego
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Convênios diretos com mais de 45 indústrias e empresas regionais para contratação imediata de estudantes a partir do 2º semestre letivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. NOTÍCIAS & COMUNICADOS OFICIAIS (#noticias)                */}
      {/* ============================================================ */}
      <section id="noticias" className="py-20 sm:py-28 bg-slate-50 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Notícias & Comunicados Oficiais
              </h2>
              <p className="text-slate-600 mt-2 max-w-2xl text-sm sm:text-base leading-relaxed">
                Fique informado sobre os editais do vestibulinho, atualizações nos laboratórios e conquistas acadêmicas dos alunos.
              </p>
            </div>

            <Link
              href="/login"
              className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 text-xs font-semibold rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors shadow-2xs"
            >
              <span>Painel de Publicação (Docentes)</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockNews.map((news) => (
              <article
                key={news.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className={`px-2.5 py-0.5 rounded-full font-semibold text-[11px] ${news.badgeStyle}`}>
                      {news.tag}
                    </span>
                    <span className="text-slate-400 text-xs">{news.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {news.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {news.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">{news.author}</span>
                  <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
                    Ler comunicado
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. CONTATO & LOCALIZAÇÃO DO CAMPUS (#contato)                 */}
      {/* ============================================================ */}
      <section id="contato" className="py-16 sm:py-24 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 shadow-elevated border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/60 text-xs font-semibold text-blue-300">
                  Secretaria Acadêmica & Visitas
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Venha conhecer nossos laboratórios e instalações
                </h2>
                <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
                  Nossa secretaria acadêmica atende de segunda a sexta, das 08h às 21h30.
                  Visitas guiadas para futuros alunos e escolas parceiras podem ser agendadas gratuitamente.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs">
                  <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700/80 space-y-1">
                    <span className="text-slate-400 font-semibold block text-[11px] uppercase tracking-wider">Endereço</span>
                    <span className="text-slate-200">Av. Universitária, 1500 - Polo Tecnológico</span>
                  </div>
                  <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700/80 space-y-1">
                    <span className="text-slate-400 font-semibold block text-[11px] uppercase tracking-wider">Telefone</span>
                    <span className="text-slate-200">(15) 3251-4144 / 3251-4200</span>
                  </div>
                  <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700/80 space-y-1">
                    <span className="text-slate-400 font-semibold block text-[11px] uppercase tracking-wider">E-mail</span>
                    <span className="text-slate-200">secretaria@sitech.edu.br</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
                <a
                  href="#cursos"
                  className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3.5 text-sm font-semibold rounded-xl shadow-xs transition-colors"
                >
                  Consultar Todos os Cursos
                </a>
                <Link
                  href="/login"
                  className="w-full text-center bg-slate-800 hover:bg-slate-700 text-slate-200 py-3.5 text-sm font-semibold rounded-xl border border-slate-700 transition-colors"
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
