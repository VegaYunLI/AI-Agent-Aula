"use client";

import { useState, useMemo, useEffect } from "react";
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
    indicator: string;
  };
  duration: string;
  period: string;
  workload: string;
  summary: string;
  subjects: CourseSubject[];
  highlights: string[];
  labEquipments: string[];
}

const allCourses: CourseItem[] = [
  {
    id: "ds",
    title: "Técnico em Desenvolvimento de Sistemas",
    category: "TI",
    categoryLabel: "Tecnologia & Software",
    badgeTheme: {
      bg: "bg-blue-50 text-blue-800",
      text: "text-blue-800",
      border: "border-blue-200/80",
      indicator: "bg-blue-600",
    },
    duration: "3 Semestres (1 ano e meio)",
    period: "Noturno • 19h às 23h",
    workload: "1.200 horas",
    summary:
      "Formação técnica completa para programadores: arquitetura de software, desenvolvimento frontend e backend, bancos de dados relacionais e mobile apps.",
    highlights: ["React & TypeScript", "Node.js & Python", "SQL & Modelagem", "Projetos Reais"],
    labEquipments: [
      "Workstations Dual-Monitor com Linux/Windows",
      "Servidores Locais para Deploy e Testes",
      "Ambiente de Redes com Roteadores Gerenciáveis",
    ],
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
      bg: "bg-amber-50 text-amber-900",
      text: "text-amber-900",
      border: "border-amber-200/80",
      indicator: "bg-amber-600",
    },
    duration: "3 Semestres (1 ano e meio)",
    period: "Noturno • 19h às 23h",
    workload: "1.200 horas",
    summary:
      "Integra mecânica de precisão, eletroeletrônica e computação aplicada ao controle de linhas industriais, robótica e processos automatizados.",
    highlights: ["Robótica Industrial", "Programação de CLP", "Pneumática & Hidráulica", "Indústria 4.0"],
    labEquipments: [
      "Bancadas Didáticas Festo de Pneumática e Eletropneumática",
      "Controladores Lógicos Siemens S7 e Schneider",
      "Braços Robóticos Manipuladores e Esteiras Sensorizadas",
    ],
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
      bg: "bg-amber-50 text-amber-900",
      text: "text-amber-900",
      border: "border-amber-200/80",
      indicator: "bg-amber-600",
    },
    duration: "3 Semestres (1 ano e meio)",
    period: "Noturno • 19h às 23h",
    workload: "1.200 horas",
    summary:
      "Instalação, operação e manutenção de sistemas elétricos prediais e industriais, com ênfase em comandos, segurança NR-10 e energia sustentável.",
    highlights: ["Comandos Elétricos", "Norma NR-10", "Subestações & Alta Tensão", "Energia Solar"],
    labEquipments: [
      "Painéis de Montagem de Comandos Elétricos com Contatores",
      "Bancada de Ensaios de Transformadores e Motores Trifásicos",
      "Instrumentos de Precisão (Megômetros, Terrômetros, Multímetros)",
    ],
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
      bg: "bg-amber-50 text-amber-900",
      text: "text-amber-900",
      border: "border-amber-200/80",
      indicator: "bg-amber-600",
    },
    duration: "3 Semestres (1 ano e meio)",
    period: "Noturno • 19h às 23h",
    workload: "1.200 horas",
    summary:
      "Acompanhamento e execução de obras civis, elaboração de projetos arquitetônicos em BIM, levantamentos topográficos e ensaios laboratoriais de concreto.",
    highlights: ["AutoCAD & Revit BIM", "Topografia Prática", "Ensaios de Materiais", "Orçamento de Obras"],
    labEquipments: [
      "Estações Totais e Níveis Ópticos para Topografia de Campo",
      "Prensa Hidráulica para Ruptura de Corpos de Prova de Concreto",
      "Laboratório de Informática Dedicado a Projetos BIM e AutoCAD",
    ],
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
      bg: "bg-emerald-50 text-emerald-900",
      text: "text-emerald-900",
      border: "border-emerald-200/80",
      indicator: "bg-emerald-600",
    },
    duration: "3 Semestres (1 ano e meio)",
    period: "Noturno • 19h às 23h",
    workload: "1.200 horas",
    summary:
      "Atuação em drogarias, farmácias de manipulação e indústrias farmacêuticas, dominando controle de estoque, dispensação ética e farmacotécnica prática.",
    highlights: ["Farmacotécnica Prática", "Controle de Qualidade", "Dispensação Ética", "Cosmetologia"],
    labEquipments: [
      "Capelas de Exaustão e Fluxo Laminar para Manipulação",
      "Balanças Analíticas de Alta Sensibilidade e Estufas de Secagem",
      "Vidrarias Calibradas e Reatores Didáticos para Cosméticos e Soluções",
    ],
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
    categoryLabel: "Gestão & Negócios",
    badgeTheme: {
      bg: "bg-sky-50 text-sky-900",
      text: "text-sky-900",
      border: "border-sky-200/80",
      indicator: "bg-sky-600",
    },
    duration: "3 Semestres (1 ano e meio)",
    period: "Noturno • 19h às 23h",
    workload: "1.000 horas",
    summary:
      "Desenvolvimento de competências em gestão financeira, logística, relações humanas, compras, inteligência de mercado e simulação empresarial.",
    highlights: ["Finanças Corporativas", "Logística & Supply Chain", "Planejamento Estratégico", "Simulação de ERP"],
    labEquipments: [
      "Laboratório de Simulação Empresarial e Gestão Integrada",
      "Softwares de Gestão Financeira, Contábil e Estoques",
      "Salas de Dinâmicas de Grupo e Negociação Comercial",
    ],
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
      bg: "bg-amber-50 text-amber-900",
      text: "text-amber-900",
      border: "border-amber-200/80",
      indicator: "bg-amber-600",
    },
    duration: "3 Semestres (1 ano e meio)",
    period: "Noturno • 19h às 23h",
    workload: "1.200 horas",
    summary:
      "Operação de máquinas industriais, usinagem convencional e CNC, soldagem técnica, metrologia rigorosa e manutenção mecânica preventiva.",
    highlights: ["Tornos Convencionais & CNC", "Fresamento Mecânico", "Soldagem Industrial", "Metrologia Dimensional"],
    labEquipments: [
      "Oficina de Usinagem com Tornos Mecânicos e Fresadoras Universais",
      "Torno CNC Didático com Simulação de Códigos G e M",
      "Laboratório de Metrologia com Paquímetros, Micrômetros e Rugosímetro",
    ],
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
      bg: "bg-emerald-50 text-emerald-900",
      text: "text-emerald-900",
      border: "border-emerald-200/80",
      indicator: "bg-emerald-600",
    },
    duration: "3 Semestres (1 ano e meio)",
    period: "Noturno • 19h às 23h",
    workload: "1.200 horas",
    summary:
      "Execução de ensaios laboratoriais e físico-químicos, controle de processos em indústrias químicas, ambientais, de tintas e tratamento de águas.",
    highlights: ["Análise Instrumental", "Química Orgânica Prática", "Tratamento de Efluentes", "Controle de Qualidade"],
    labEquipments: [
      "Espectrofotômetros UV-Vis e pHmetros de Bancada Calibrados",
      "Reatores de Bancada e Colunas de Destilação Fracionada",
      "Bancadas de Análise Volumétrica e Gravimétrica com Vidraria Completa",
    ],
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
      bg: "bg-emerald-50 text-emerald-900",
      text: "text-emerald-900",
      border: "border-emerald-200/80",
      indicator: "bg-emerald-600",
    },
    duration: "3 Semestres (1 ano e meio)",
    period: "Noturno • 19h às 23h",
    workload: "1.200 horas",
    summary:
      "Supervisão e preparo de alimentos em cozinhas industriais, hospitais e restaurantes, assegurando normas sanitárias rigorosas e composição dietética adequada.",
    highlights: ["Técnica Dietética", "Higiene dos Alimentos", "Gestão de Cozinhas Industriais", "Cardápios Hospitalares"],
    labEquipments: [
      "Cozinha Didática Industrial em Aço Inox com Fogões e Fornos Combinados",
      "Termômetros Digitais de Penetração e Kits de Amostragem Microbiológica",
      "Balanças Digitais de Precisão para Porcionamento e Fichas Técnicas",
    ],
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
    tag: "Processo Seletivo",
    badgeStyle: "bg-blue-50 text-blue-800 border-blue-200",
    date: "26 de Outubro de 2026",
    title: "Publicado o edital do Vestibulinho 2026 com 360 vagas gratuitas",
    summary:
      "A comissão divulgou o cronograma oficial para o primeiro semestre letivo de 2026. Provas presenciais e pedidos de isenção de taxa disponíveis na secretaria.",
    author: "Comissão de Seleção",
  },
  {
    id: "lab-robotica",
    tag: "Infraestrutura",
    badgeStyle: "bg-amber-50 text-amber-900 border-amber-200",
    date: "21 de Outubro de 2026",
    title: "Novas bancadas didáticas de robótica e CLP entregues para os cursos técnicos",
    summary:
      "Estudantes de Mecatrônica e Eletrotécnica já contam com bancadas renovadas para montagem de comandos pneumáticos e esteiras industriais automatizadas.",
    author: "Coordenação de Mecatrônica",
  },
  {
    id: "premio-inovacao",
    tag: "Reconhecimento Acadêmico",
    badgeStyle: "bg-emerald-50 text-emerald-900 border-emerald-200",
    date: "15 de Outubro de 2026",
    title: "Software criado por alunos de Desenvolvimento de Sistemas é premiado em feira estadual",
    summary:
      "O sistema desenvolvido para controle de estoque de pequenos produtores rurais locais foi selecionado para apresentação no congresso de iniciação científica.",
    author: "Núcleo de Tecnologia e Inovação",
  },
];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("TODOS");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCourseModal, setSelectedCourseModal] = useState<CourseItem | null>(null);
  const [activeHeroTab, setActiveHeroTab] = useState<"TI" | "Industria" | "Saude" | "Gestao">("TI");
  const [heroSemesterIndex, setHeroSemesterIndex] = useState<number>(1);
  const [activeLabFacility, setActiveLabFacility] = useState<number>(0);
  const [isVisitModalOpen, setIsVisitModalOpen] = useState<boolean>(false);
  const [visitSubmitted, setVisitSubmitted] = useState<boolean>(false);
  const [copiedMatrix, setCopiedMatrix] = useState<boolean>(false);
  const [cardQuickTab, setCardQuickTab] = useState<Record<string, "resumo" | "grade">>({});

  // Fechar modal com tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCourseModal(null);
        setIsVisitModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      const matchesCategory =
        selectedCategory === "TODOS" || course.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesQuery =
        course.title.toLowerCase().includes(q) ||
        course.highlights.some((h) => h.toLowerCase().includes(q)) ||
        course.summary.toLowerCase().includes(q) ||
        course.subjects.some((s) => s.name.toLowerCase().includes(q));

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  // Curso correspondente ao eixo da Hero
  const heroFeaturedCourse = useMemo(() => {
    return allCourses.find((c) => c.category === activeHeroTab) || allCourses[0];
  }, [activeHeroTab]);

  const copyCurriculumToClipboard = () => {
    if (!selectedCourseModal) return;
    const text = `${selectedCourseModal.title}\nCarga: ${selectedCourseModal.workload} • ${selectedCourseModal.duration}\n\n` +
      [1, 2, 3]
        .map((sem) => {
          const subs = selectedCourseModal.subjects.filter((s) => s.semester === sem);
          return `${sem}º Semestre:\n` + subs.map((s) => `  - ${s.name}`).join("\n");
        })
        .join("\n\n");

    navigator.clipboard.writeText(text).then(() => {
      setCopiedMatrix(true);
      setTimeout(() => setCopiedMatrix(false), 2500);
    });
  };

  const facilities = [
    {
      title: "Oficina de Automação & Robótica",
      description: "Bancadas didáticas Festo para circuitos pneumáticos e eletropneumáticos, esteiras industriais automatizadas e kits de programação CLP Siemens.",
      courses: "Mecatrônica, Eletrotécnica e Mecânica",
      items: ["Controladores Lógicos S7-1200", "Compressores silenciosos de bancada", "Braços robóticos 4 eixos", "Softwares CAD/CAM"],
      icon: (
        <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Laboratórios de Computação & Redes",
      description: "Estações de alto desempenho com monitores duplos para desenvolvimento fullstack, banco de dados, servidores de virtualização e switches gerenciáveis.",
      courses: "Desenvolvimento de Sistemas e Administração",
      items: ["Estações Core i7 com 32GB RAM", "Servidores locais de teste e build", "Rack de cabeamento estruturado", "Softwares de modelagem de dados"],
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Laboratório Químico & Farmacêutico",
      description: "Ambiente equipado com capelas de exaustão química, estufas, balanças analíticas de alta precisão e vidrarias completas para farmacotécnica e análises físico-químicas.",
      courses: "Farmácia, Química e Nutrição",
      items: ["Capela de fluxo laminar classe II", "Espectrofotômetro UV-Vis", "Autoclave vertical para esterilização", "Reagentes analíticos puros"],
      icon: (
        <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: "Oficina de Obras & Topografia",
      description: "Espaço para ensaios mecânicos de corpos de prova de concreto, nivelamento de solos e estação total para levantamentos topográficos de precisão.",
      courses: "Edificações",
      items: ["Estação total eletrônica digital", "Prensa de compressão hidráulica", "Conjunto de peneiras granulométricas", "Pranchetas técnicas e BIM"],
      icon: (
        <svg className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* ============================================================ */}
      {/* 1. HERO INSTITUCIONAL: OFICINA & CADERNO TÉCNICO             */}
      {/* ============================================================ */}
      <section className="relative w-full pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-slate-200/90 bg-white bg-blueprint-grid">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Lado Esquerdo: Mensagem Institucional Direta */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Telemetria Real da Escola (Não-SaaS) */}
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse-glow" />
                <span>Vestibulinho 2026 • 9 Habilitações com Aulas Noturnas das 19h às 23h</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Formação técnica pública com foco em prática de oficina e laboratório.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                Você aprende com instrumentos reais e maquinário profissional. Cursos presenciais gratuitos no período noturno, com matrizes curriculares alinhadas às demandas dos setores industriais e de tecnologia.
              </p>

              {/* Botões de Ação com Hierarquia Clara */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href="#cursos"
                  className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 text-sm font-semibold rounded-xl shadow-tactile hover:shadow-tactile-hover transition-all duration-150 active:scale-[0.98]"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span>Explorar 9 Cursos Técnicos</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsVisitModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200/90 text-slate-800 px-5 py-3.5 text-sm font-semibold rounded-xl border border-slate-200 transition-colors active:scale-[0.98]"
                >
                  <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Agendar Visita às Oficinas</span>
                </button>
              </div>

              {/* Fatos Estruturais da Escola Técnica */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200 text-xs">
                <div className="rounded-xl p-3 bg-slate-50 border border-slate-200/80">
                  <span className="text-slate-500 block mb-0.5 font-medium">Investimento</span>
                  <span className="text-sm font-bold text-slate-900">100% Gratuito</span>
                  <span className="text-[11px] text-slate-500 block">Sem mensalidade</span>
                </div>
                <div className="rounded-xl p-3 bg-slate-50 border border-slate-200/80">
                  <span className="text-slate-500 block mb-0.5 font-medium">Turno</span>
                  <span className="text-sm font-bold text-slate-900">Noite</span>
                  <span className="text-[11px] text-slate-500 block">19h00 às 23h00</span>
                </div>
                <div className="rounded-xl p-3 bg-slate-50 border border-slate-200/80">
                  <span className="text-slate-500 block mb-0.5 font-medium">Carga Média</span>
                  <span className="text-sm font-bold text-slate-900">1.200 horas</span>
                  <span className="text-[11px] text-slate-500 block">3 semestres letivos</span>
                </div>
                <div className="rounded-xl p-3 bg-slate-50 border border-slate-200/80">
                  <span className="text-slate-500 block mb-0.5 font-medium">Matriz de Apoio</span>
                  <span className="text-sm font-bold text-slate-900">Padrão ETEC</span>
                  <span className="text-[11px] text-slate-500 block">Ref. Sales Gomes</span>
                </div>
              </div>
            </div>

            {/* Lado Direito: Bancada Técnica Interativa de Exploração */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white border border-slate-200 shadow-tactile p-6 relative">
                
                {/* Cabeçalho da Bancada */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-600" />
                    <span className="text-xs font-bold text-slate-700 tracking-wide">
                      Bancada Interativa por Eixo
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    Clique nas áreas para simular
                  </span>
                </div>

                {/* Seletor Tátil de Eixos Formativos */}
                <div className="grid grid-cols-4 gap-1.5 mt-4 p-1 bg-slate-100 rounded-xl">
                  {[
                    { id: "TI", label: "Software" },
                    { id: "Industria", label: "Indústria" },
                    { id: "Saude", label: "Saúde" },
                    { id: "Gestao", label: "Gestão" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => {
                        setActiveHeroTab(tab.id as any);
                        setHeroSemesterIndex(1);
                      }}
                      className={`py-1.5 px-2 text-xs font-semibold rounded-lg transition-all text-center ${
                        activeHeroTab === tab.id
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Conteúdo Dinâmico do Eixo Selecionado */}
                <div className="mt-5 space-y-4 animate-fade-in" key={activeHeroTab}>
                  <div>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-semibold ${heroFeaturedCourse.badgeTheme.bg} border ${heroFeaturedCourse.badgeTheme.border}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${heroFeaturedCourse.badgeTheme.indicator}`} />
                      {heroFeaturedCourse.categoryLabel}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-2 leading-snug">
                      {heroFeaturedCourse.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {heroFeaturedCourse.summary}
                    </p>
                  </div>

                  {/* Equipamentos Reais Utilizados nas Aulas Práticas */}
                  <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-200/70 space-y-2">
                    <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">
                      Equipamentos & Ferramentas de Oficina:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {heroFeaturedCourse.labEquipments.map((eq, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <svg className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{eq}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Simulador de Semestres */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700">Prévia da Matriz Curricular:</span>
                      <div className="flex gap-1">
                        {[1, 2, 3].map((sem) => (
                          <button
                            key={sem}
                            type="button"
                            onClick={() => setHeroSemesterIndex(sem)}
                            className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-colors ${
                              heroSemesterIndex === sem
                                ? "bg-slate-900 text-white"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                            }`}
                          >
                            {sem}º Semestre
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100 text-xs text-slate-700 space-y-1">
                      {heroFeaturedCourse.subjects
                        .filter((s) => s.semester === heroSemesterIndex)
                        .slice(0, 3)
                        .map((s, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                            <span className="font-medium">{s.name}</span>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Botão para Matriz Completa */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedCourseModal(heroFeaturedCourse)}
                      className="w-full py-2.5 px-4 bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors active:scale-[0.98]"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>Abrir Matriz Completa deste Curso ({heroFeaturedCourse.workload})</span>
                    </button>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. QUADRO DE TRANSPARÊNCIA ESCOLAR & DIRETRIZES             */}
      {/* ============================================================ */}
      <section className="w-full bg-slate-900 text-white py-8 border-b border-slate-800 bg-blueprint-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            
            <div className="pt-4 md:pt-0 md:pr-6 space-y-1.5">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Horário Noturno</span>
              </div>
              <p className="text-sm font-bold text-white">Aulas das 19h00 às 23h00</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Grade pensada para quem trabalha durante o dia e deseja qualificação técnica sem conflito de turno.
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:px-6 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Ensino 100% Gratuito</span>
              </div>
              <p className="text-sm font-bold text-white">Sem Taxa de Matrícula ou Mensalidades</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Instituição pública com acesso por exame classificatório sem cobrança de taxas de bancada ou materiais didáticos.
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:px-6 space-y-1.5">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <span>Oficinas Industriais</span>
              </div>
              <p className="text-sm font-bold text-white">Laboratórios com Maquinário Real</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tornos mecânicos, simuladores CNC, estações de soldagem e computadores com ferramentas industriais ativas.
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:pl-6 space-y-1.5">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span>Referência Curricular</span>
              </div>
              <p className="text-sm font-bold text-white">Modelo ETEC Sales Gomes</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Planos de curso formatados conforme as diretrizes pedagógicas oficiais da educação profissional técnica estadual.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. CATÁLOGO COMPLETO DE CURSOS TÉCNICOS (#cursos)            */}
      {/* ============================================================ */}
      <section id="cursos" className="py-20 sm:py-28 bg-slate-50 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Cabeçalho da Seção de Cursos */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
                Catálogo Oficial 2026
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
                Habilitações Técnicas Presenciais
              </h2>
              <p className="text-slate-600 mt-2 max-w-2xl font-normal text-sm sm:text-base leading-relaxed">
                Explore a grade detalhada dos 9 cursos noturnos. Você pode examinar as competências de cada área ou ver as matérias semestre por semestre.
              </p>
            </div>

            {/* Barra de Busca Instantânea com Botão Limpar */}
            <div className="w-full md:w-80">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar curso, matéria ou competência..."
                  className="w-full pl-10 pr-9 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 shadow-sm"
                />
                <svg
                  className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 text-xs font-bold"
                    aria-label="Limpar busca"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Filtros de Categoria em Pílulas Táteis */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {[
              { id: "TODOS", label: "Todas as Habilitações", count: allCourses.length },
              { id: "TI", label: "Tecnologia & Software", count: 1 },
              { id: "Industria", label: "Indústria & Mecatrônica", count: 3 },
              { id: "Saude", label: "Saúde & Farmácia", count: 3 },
              { id: "Gestao", label: "Gestão & Estratégia", count: 2 },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-xs px-1.5 py-0.2 rounded-md ${
                    selectedCategory === cat.id ? "bg-slate-700 text-slate-200" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Mensagem caso busca não retorne itens */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-base font-bold text-slate-900">
                Nenhum curso encontrado para a busca &quot;{searchQuery}&quot;.
              </p>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Tente buscar por nomes de disciplinas como &quot;Algoritmos&quot;, &quot;Soldagem&quot;, &quot;Revit&quot;, &quot;Farmacologia&quot; ou limpe os filtros.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("TODOS");
                }}
                className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-xl hover:bg-blue-700 transition-colors"
              >
                Limpar Busca e Ver Todos os 9 Cursos
              </button>
            </div>
          )}

          {/* Grid dos Cartões de Cursos com Modo Duplo (Resumo vs Grade Rápida) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => {
              const currentTab = cardQuickTab[course.id] || "resumo";

              return (
                <div
                  key={course.id}
                  className="group flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 p-6 shadow-tactile hover:shadow-tactile-hover transition-all duration-200"
                >
                  <div>
                    {/* Cabeçalho do Card */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-semibold ${course.badgeTheme.bg} border ${course.badgeTheme.border}`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${course.badgeTheme.indicator}`} />
                        {course.categoryLabel}
                      </span>
                      <span className="text-xs font-bold text-slate-600">
                        {course.workload}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                      {course.title}
                    </h3>

                    {/* Alternador Interno: Resumo vs Grade Rápida */}
                    <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg mt-3 text-xs">
                      <button
                        type="button"
                        onClick={() =>
                          setCardQuickTab((prev) => ({ ...prev, [course.id]: "resumo" }))
                        }
                        className={`flex-1 py-1 rounded text-center font-medium transition-colors ${
                          currentTab === "resumo"
                            ? "bg-white text-slate-900 font-semibold shadow-2xs"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Visão Geral
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setCardQuickTab((prev) => ({ ...prev, [course.id]: "grade" }))
                        }
                        className={`flex-1 py-1 rounded text-center font-medium transition-colors ${
                          currentTab === "grade"
                            ? "bg-white text-slate-900 font-semibold shadow-2xs"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Matérias ({course.subjects.length})
                      </button>
                    </div>

                    {/* Aba Resumo */}
                    {currentTab === "resumo" && (
                      <div className="mt-3.5 space-y-3.5 animate-fade-in">
                        <p className="text-xs text-slate-600 leading-relaxed font-normal">
                          {course.summary}
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                          {course.highlights.map((h) => (
                            <span
                              key={h}
                              className="bg-slate-50 text-slate-700 border border-slate-200 text-xs px-2.5 py-0.5 rounded-md font-medium"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Aba Grade Rápida */}
                    {currentTab === "grade" && (
                      <div className="mt-3.5 space-y-2 text-xs animate-fade-in max-h-48 overflow-y-auto pr-1">
                        {[1, 2, 3].map((sem) => (
                          <div key={sem} className="rounded-lg bg-slate-50 p-2 border border-slate-100">
                            <span className="font-bold text-[11px] text-blue-700 uppercase tracking-wide block mb-1">
                              {sem}º Semestre:
                            </span>
                            <ul className="space-y-0.5 text-slate-700 text-[11px]">
                              {course.subjects
                                .filter((s) => s.semester === sem)
                                .map((sub, i) => (
                                  <li key={i} className="flex items-center gap-1.5">
                                    <span className="h-1 w-1 rounded-full bg-slate-400" />
                                    <span className="truncate">{sub.name}</span>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Rodapé do Card */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span>{course.duration}</span>
                      <span className="text-slate-800 font-semibold">{course.period}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedCourseModal(course)}
                      className="w-full py-2.5 bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all duration-150 active:scale-[0.98]"
                    >
                      <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span>Examinar Matriz Completa</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. MODAL DE MATRIZ CURRICULAR INTERATIVO                      */}
      {/* ============================================================ */}
      {selectedCourseModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-slate-200 shadow-elevated max-h-[90vh] flex flex-col overflow-hidden animate-scale-up">
            
            {/* Header do Modal */}
            <div className="p-6 border-b border-slate-200/80 flex items-start justify-between bg-slate-50">
              <div className="space-y-1">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-semibold ${selectedCourseModal.badgeTheme.bg} border ${selectedCourseModal.badgeTheme.border}`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${selectedCourseModal.badgeTheme.indicator}`} />
                  {selectedCourseModal.categoryLabel}
                </span>
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  {selectedCourseModal.title}
                </h3>
                <p className="text-xs text-slate-600 font-medium">
                  {selectedCourseModal.duration} • {selectedCourseModal.period} • {selectedCourseModal.workload}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCourseModal(null)}
                className="h-9 w-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-800 hover:bg-slate-200/80 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
                aria-label="Fechar matriz"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Conteúdo com a Matriz Semestre por Semestre */}
            <div className="p-6 overflow-y-auto space-y-6 text-slate-800">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedCourseModal.summary}
              </div>

              {/* Equipamentos Práticos do Laboratório */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Infraestrutura Laboratorial Associada
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {selectedCourseModal.labEquipments.map((eq, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-blue-50/60 border border-blue-100 text-[11px] text-blue-900 font-medium">
                      ✓ {eq}
                    </div>
                  ))}
                </div>
              </div>

              {/* Matriz Curricular Detalhada */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Grade de Matérias (Semestre por Semestre)
                  </span>
                  <button
                    type="button"
                    onClick={copyCurriculumToClipboard}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    <span>{copiedMatrix ? "Matriz Copiada!" : "Copiar Grade"}</span>
                  </button>
                </div>

                {[1, 2, 3].map((sem) => {
                  const subs = selectedCourseModal.subjects.filter((s) => s.semester === sem);
                  if (subs.length === 0) return null;
                  return (
                    <div key={sem} className="rounded-xl border border-slate-200 bg-white p-4 space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <span className="font-bold text-xs uppercase tracking-wider text-blue-700">
                          {sem}º Semestre Letivo
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          {subs.length} disciplinas formativas
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {subs.map((s, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-800 font-medium"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                            <span>{s.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-xl bg-slate-100 border border-slate-200 p-3.5 text-xs text-slate-700 leading-relaxed">
                <strong>Orientações de Matrícula:</strong> Aulas práticas ministradas em laboratórios com equipamentos industriais e softwares licenciados. Matrícula gratuita realizada após aprovação no Vestibulinho sem mensalidades.
              </div>
            </div>

            {/* Rodapé do Modal */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-3">
              <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                Pressione ESC para fechar a qualquer momento
              </span>
              <button
                type="button"
                onClick={() => setSelectedCourseModal(null)}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors ml-auto active:scale-[0.98]"
              >
                Concluir Consulta
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 5. DIFERENCIAIS: OFICINAS & LABORATÓRIOS (#diferenciais)     */}
      {/* ============================================================ */}
      <section id="diferenciais" className="py-20 sm:py-28 bg-white border-y border-slate-200 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
              Ambiente de Ensino Aplicado
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
              Por dentro das oficinas e laboratórios da Sitech
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              O aprendizado técnico acontece com as mãos nos equipamentos. Conheça as 4 alas laboratoriais estruturadas para replicar o chão de fábrica e o ambiente corporativo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Lista Interativa de Ambientes */}
            <div className="lg:col-span-5 space-y-3">
              {facilities.map((fac, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveLabFacility(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-start gap-3.5 ${
                    activeLabFacility === idx
                      ? "bg-slate-900 text-white border-slate-900 shadow-md"
                      : "bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <div className={`p-2 rounded-lg shrink-0 ${
                    activeLabFacility === idx ? "bg-slate-800 text-white" : "bg-white text-slate-700 border border-slate-200"
                  }`}>
                    {fac.icon}
                  </div>
                  <div className="space-y-1">
                    <span className="font-bold text-sm block leading-tight">
                      {fac.title}
                    </span>
                    <span className={`text-xs block ${activeLabFacility === idx ? "text-slate-300" : "text-slate-500"}`}>
                      Cursos: {fac.courses}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Painel de Detalhes do Laboratório Ativo */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-6 shadow-tactile animate-fade-in" key={activeLabFacility}>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-600" />
                    <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                      Especificação Técnica do Espaço
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {facilities[activeLabFacility].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {facilities[activeLabFacility].description}
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                    Equipamentos & Recursos Disponíveis para Alunos:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {facilities[activeLabFacility].items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-800 shadow-2xs">
                        <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-500">
                    Horários de bancada aberta para reforço e TCC aos sábados pela manhã.
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsVisitModalOpen(true)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-xs font-semibold rounded-xl transition-colors active:scale-[0.98]"
                  >
                    <span>Conhecer Pessoalmente</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. NOTÍCIAS & EDITAIS OFICIAIS (#noticias)                   */}
      {/* ============================================================ */}
      <section id="noticias" className="py-20 sm:py-28 bg-slate-50 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
                Comunicação Institucional
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
                Editais & Comunicados Oficiais
              </h2>
              <p className="text-slate-600 mt-2 max-w-2xl text-sm sm:text-base leading-relaxed">
                Avisos da direção acadêmica, chamadas do vestibulinho e acontecimentos técnicos do campus.
              </p>
            </div>

            <Link
              href="/login"
              className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 text-xs font-semibold rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors shadow-2xs"
            >
              <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Painel de Publicação (Docentes)</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockNews.map((news) => (
              <article
                key={news.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-tactile hover:shadow-tactile-hover transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className={`px-2.5 py-0.5 rounded-md font-semibold text-[11px] border ${news.badgeStyle}`}>
                      {news.tag}
                    </span>
                    <span className="text-slate-500 text-xs">{news.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {news.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {news.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">{news.author}</span>
                  <a
                    href="#cursos"
                    className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Ver detalhes
                  </a>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. CONTATO, LOCALIZAÇÃO & VISITAS (#contato)                 */}
      {/* ============================================================ */}
      <section id="contato" className="py-16 sm:py-24 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 shadow-elevated border border-slate-800 bg-blueprint-dark">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-900/60 border border-blue-700/60 text-xs font-semibold text-blue-300">
                  Secretaria Acadêmica & Visitas Monitoradas
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Venha conhecer as oficinas da escola técnica
                </h2>
                <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
                  O atendimento presencial da secretaria ocorre de segunda a sexta, das 08h00 às 21h30. 
                  Você pode agendar uma visita guiada para ver os laboratórios de robótica, química e desenvolvimento em pleno funcionamento noturno.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-xs">
                  <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700/80 space-y-1">
                    <span className="text-slate-400 font-semibold block text-[11px] uppercase tracking-wider">Endereço Oficial</span>
                    <span className="text-slate-200">Av. Universitária, 1500 - Polo Tecnológico</span>
                  </div>
                  <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700/80 space-y-1">
                    <span className="text-slate-400 font-semibold block text-[11px] uppercase tracking-wider">Telefone & Whatsapp</span>
                    <span className="text-slate-200">(15) 3251-4144 / 3251-4200</span>
                  </div>
                  <div className="rounded-xl bg-slate-800/80 p-4 border border-slate-700/80 space-y-1">
                    <span className="text-slate-400 font-semibold block text-[11px] uppercase tracking-wider">E-mail Acadêmico</span>
                    <span className="text-slate-200">secretaria@sitech.edu.br</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
                <button
                  type="button"
                  onClick={() => setIsVisitModalOpen(true)}
                  className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3.5 px-4 text-sm font-semibold rounded-xl shadow-tactile transition-colors active:scale-[0.98]"
                >
                  Agendar Visita Monitorada
                </button>
                <a
                  href="#cursos"
                  className="w-full text-center bg-slate-800 hover:bg-slate-700 text-slate-200 py-3.5 px-4 text-sm font-semibold rounded-xl border border-slate-700 transition-colors"
                >
                  Consultar Todos os Cursos
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. MODAL INTERATIVO DE AGENDAMENTO DE VISITA                 */}
      {/* ============================================================ */}
      {isVisitModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-elevated p-6 space-y-5 animate-scale-up">
            
            <div className="flex items-start justify-between pb-3 border-b border-slate-100">
              <div className="space-y-0.5">
                <h3 className="text-lg font-bold text-slate-900">
                  Agendar Visita às Oficinas
                </h3>
                <p className="text-xs text-slate-500">
                  Conheça os laboratórios com supervisão técnica antes do vestibular.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsVisitModalOpen(false);
                  setVisitSubmitted(false);
                }}
                className="h-8 w-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            {visitSubmitted ? (
              <div className="py-6 text-center space-y-3">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-base font-bold text-slate-900">Visita Pré-Agendada!</h4>
                <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
                  A equipe da secretaria entrará em contato via e-mail ou WhatsApp para confirmar a data e o roteiro do laboratório escolhido.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsVisitModalOpen(false);
                    setVisitSubmitted(false);
                  }}
                  className="mt-2 px-5 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-xl"
                >
                  Fechar Janela
                </button>
              </div>
            ) : (
              <form
                className="space-y-3.5 text-xs"
                onSubmit={(e) => {
                  e.preventDefault();
                  setVisitSubmitted(true);
                }}
              >
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Seu Nome Completo</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Mariana Silva Santos"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">E-mail ou WhatsApp para Confirmação</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: mariana@email.com ou (15) 99999-9999"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Área de Maior Interesse</label>
                  <select className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600">
                    <option value="ti">Tecnologia & Desenvolvimento de Sistemas</option>
                    <option value="automacao">Indústria, Mecatrônica & Robótica</option>
                    <option value="saude">Saúde, Farmácia & Química</option>
                    <option value="gestao">Gestão, Administração & Negócios</option>
                  </select>
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsVisitModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors shadow-sm"
                  >
                    Confirmar Solicitação
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
