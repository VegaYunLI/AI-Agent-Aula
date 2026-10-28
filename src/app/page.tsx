import Link from "next/link";

interface CourseCard {
  id: string;
  title: string;
  category: string;
  duration: string;
  period: string;
  workload: string;
  description: string;
  badges: string[];
}

const featuredCourses: CourseCard[] = [
  {
    id: "desenvolvimento-sistemas",
    title: "Técnico em Desenvolvimento de Sistemas",
    category: "Tecnologia da Informação",
    duration: "3 Semestres (1 ano e meio)",
    period: "Período Noturno",
    workload: "1.200 horas",
    description:
      "Aprenda a projetar, desenvolver e testar sistemas web, mobile e banco de dados com foco nas tecnologias mais demandadas pela indústria de tecnologia.",
    badges: ["Full-Stack", "Banco de Dados", "Mercado Aquecido"],
  },
  {
    id: "mecatronica",
    title: "Técnico em Mecatrônica",
    category: "Indústria & Automação",
    duration: "3 Semestres (1 ano e meio)",
    period: "Período Noturno",
    workload: "1.200 horas",
    description:
      "Integração de mecânica de precisão, eletroeletrônica e computação aplicada à automação de linhas de produção, robótica e Indústria 4.0.",
    badges: ["Robótica", "CLP & Sensores", "Indústria 4.0"],
  },
  {
    id: "administracao",
    title: "Técnico em Administração",
    category: "Gestão & Negócios",
    duration: "3 Semestres (1 ano e meio)",
    period: "Período Tarde / Noite",
    workload: "1.000 horas",
    description:
      "Capacitação para atuar nas áreas de finanças, logística, marketing, planejamento estratégico e processos operacionais corporativos.",
    badges: ["Gestão Financeira", "Logística", "Empreendedorismo"],
  },
  {
    id: "manutencao-suporte",
    title: "Técnico em Redes e Suporte em Informática",
    category: "Tecnologia da Informação",
    duration: "3 Semestres (1 ano e meio)",
    period: "Período Matutino",
    workload: "1.000 horas",
    description:
      "Instalação e configuração de servidores, redes locais cabeada e wireless, diagnósticos de hardware e segurança de redes corporativas.",
    badges: ["Redes", "Hardware", "Segurança"],
  },
  {
    id: "eletrotecnica",
    title: "Técnico em Eletrotécnica",
    category: "Engenharia & Elétrica",
    duration: "3 Semestres (1 ano e meio)",
    period: "Período Noturno",
    workload: "1.200 horas",
    description:
      "Planejamento e execução de instalações elétricas industriais e prediais, comandos elétricos, eficiência energética e segurança conforme a NR-10.",
    badges: ["Comandos Elétricos", "Energias Renováveis", "NR-10"],
  },
  {
    id: "recursos-humanos",
    title: "Técnico em Recursos Humanos",
    category: "Gestão & Negócios",
    duration: "2 Semestres (1 ano)",
    period: "Período Tarde",
    workload: "800 horas",
    description:
      "Execução de rotinas de admissão, folha de pagamento, benefícios, recrutamento e seleção, treinamento e clima organizacional.",
    badges: ["Legislação", "Recrutamento", "Cultura Corporativa"],
  },
];

interface NewsCard {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  readTime: string;
}

const mockNews: NewsCard[] = [
  {
    id: "vestibulinho-2026",
    title: "Abertura das Inscrições para o Vestibulinho do 1º Semestre de 2026",
    category: "Processo Seletivo",
    date: "24 de Outubro de 2026",
    summary:
      "Estão abertas as inscrições para os cursos técnicos presenciais e 100% gratuitos da Sitech. Não perca os prazos do calendário oficial.",
    readTime: "3 min de leitura",
  },
  {
    id: "novo-laboratorio-ia",
    title: "Sitech inaugura Laboratório Avançado de Inteligência Artificial e Robótica",
    category: "Infraestrutura",
    date: "18 de Outubro de 2026",
    summary:
      "Novo espaço equipado com workstations de alto desempenho, impressoras 3D e braços robóticos permitirá projetos interdisciplinares aos estudantes.",
    readTime: "4 min de leitura",
  },
  {
    id: "feira-tecnologica-tcc",
    title: "Feira de Projetos e TCC da Sitech reúne empresas líderes da região",
    category: "Eventos & Carreira",
    date: "12 de Outubro de 2026",
    summary:
      "Estudantes apresentaram soluções inovadoras para indústrias locais; dezenas de alunos foram contratados e encaminhados para estágio imediato.",
    readTime: "5 min de leitura",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO BANNER INSTITUCIONAL */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-sitech-primary-dark to-slate-900 text-white py-20 sm:py-28 lg:py-32">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-sitech-secondary/20 px-3.5 py-1.5 text-xs font-semibold text-sitech-secondary-light border border-sitech-secondary/40">
              <span className="flex h-2 w-2 rounded-full bg-sitech-secondary-light animate-pulse" />
              <span>Vestibulinho 2026 • Cursos 100% Gratuitos</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
              O futuro da sua profissão começa na{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-200">
                Escola Técnica Sitech
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Formação técnica presencial de ponta inspirada nas melhores escolas do Estado.
              Laboratórios completos, matrizes curriculares modernas e conexão direta com as empresas que contratam.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#cursos"
                className="inline-flex items-center justify-center rounded-xl bg-sitech-secondary px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-sky-900/30 hover:bg-sitech-secondary-light hover:text-slate-950 focus:outline-hidden focus:ring-2 focus:ring-sky-400 transition-all"
              >
                Conhecer Cursos Técnicos
              </a>
              <a
                href="#noticias"
                className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3.5 text-base font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition-all"
              >
                Últimos Comunicados
              </a>
            </div>
          </div>

          {/* Métricas e Pilares Rápidos */}
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-20 pt-8 border-t border-slate-800">
            <div className="space-y-1">
              <p className="text-3xl font-black text-white">100%</p>
              <p className="text-xs font-medium text-slate-400">Público e Gratuito</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-black text-sitech-secondary-light">+20 Anos</p>
              <p className="text-xs font-medium text-slate-400">Tradição Formativa</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-black text-emerald-400">87%</p>
              <p className="text-xs font-medium text-slate-400">Índice de Empregabilidade</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-black text-white">6 Labs</p>
              <p className="text-xs font-medium text-slate-400">Tecnologia Especializada</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO DE CURSOS TÉCNICOS (FASE 1 / BASE PREPARATÓRIA) */}
      <section id="cursos" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sitech-secondary">
                Formação Profissional
              </span>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl mt-1">
                Cursos Técnicos Oferecidos
              </h2>
              <p className="text-base text-slate-600 mt-2 max-w-2xl">
                Cursos desenhados com base nas matrizes da ETEC Sales Gomes para garantir as competências exatas exigidas pelo mercado de trabalho.
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-sitech-primary border border-blue-200">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Semestres Letivos 2026
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md hover:border-sitech-secondary transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-3">
                    <span className="text-sitech-secondary uppercase tracking-wider font-bold">
                      {course.category}
                    </span>
                    <span className="bg-slate-100 px-2.5 py-1 rounded-md text-slate-700">
                      {course.workload}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sitech-primary transition-colors">
                    {course.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {course.badges.map((b) => (
                      <span
                        key={b}
                        className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span>{course.duration}</span>
                    <span className="font-semibold text-slate-700">{course.period}</span>
                  </div>

                  <a
                    href={`#cursos`}
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 py-2.5 text-xs font-bold text-slate-700 hover:bg-sitech-primary hover:text-white hover:border-sitech-primary transition-colors"
                  >
                    <span>Ver Matriz e Matérias</span>
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO DE DIFERENCIAIS INSTITUCIONAIS */}
      <section id="diferenciais" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-sitech-secondary">
              Por Que Estudar na Sitech?
            </span>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl mt-1">
              Infraestrutura de Ponta e Metodologia Prática
            </h2>
            <p className="text-base text-slate-600 mt-3">
              Foco no aprendizado prático em projetos reais, permitindo que nossos estudantes se destaquem desde o primeiro semestre.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sitech-primary text-white mb-5 shadow-xs">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Laboratórios Modernos</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Salas equipadas com softwares industriais licenciados, bancadas para eletrônica e automação, além de redes de alto desempenho.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sitech-secondary text-white mb-5 shadow-xs">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Corpo Docente Especialista</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Professores com ampla experiência no mercado profissional e sólida formação pedagógica, dedicados ao desenvolvimento dos alunos.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white mb-5 shadow-xs">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Encaminhamento para Estágio</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Convênios com empresas da região e feiras anuais de oportunidades que impulsionam o início imediato no mercado de trabalho.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO DE NOTÍCIAS & COMUNICADOS OFICIAIS */}
      <section id="noticias" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sitech-secondary">
                Comunicação Institucional
              </span>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl mt-1">
                Últimas Notícias & Comunicados
              </h2>
              <p className="text-base text-slate-600 mt-2 max-w-2xl">
                Acompanhe avisos da direção, novidades acadêmicas, editais de vestibulinho e eventos escolares.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/login"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 transition-colors"
              >
                <span>Painel de Notícias</span>
                <svg className="h-3.5 w-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mockNews.map((news) => (
              <article
                key={news.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-semibold text-sitech-secondary uppercase tracking-wider">
                      {news.category}
                    </span>
                    <span className="text-slate-600">{news.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {news.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {news.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                  <span>{news.date}</span>
                  <span className="font-semibold text-sitech-primary hover:underline cursor-pointer">
                    Ler comunicado &rarr;
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BANNER FINAL DE CHAMADA PARA AÇÃO (VESTIBULINHO) */}
      <section className="py-16 bg-gradient-to-r from-sitech-primary to-sitech-primary-light text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black">
              Inscreva-se no Processo Seletivo Sitech
            </h2>
            <p className="text-slate-200 text-sm sm:text-base">
              Não perca a chance de conquistar uma formação técnica pública, gratuita e reconhecida pelo mercado de trabalho.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <a
              href="#cursos"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-sitech-primary shadow-md hover:bg-slate-100 transition-colors"
            >
              Verificar Matrizes Curriculares
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
