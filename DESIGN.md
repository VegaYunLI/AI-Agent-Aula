---
name: Sitech
description: Portal institucional da escola técnica com foco em transparência curricular e formação profissional aplicada.
colors:
  primary: "#1e40af"
  primary-hover: "#1d4ed8"
  primary-light: "#eff6ff"
  accent-tech: "#2563eb"
  accent-industry: "#ea580c"
  accent-health: "#059669"
  accent-management: "#0284c7"
  neutral-bg: "#f8fafc"
  neutral-surface: "#ffffff"
  neutral-border: "#e2e8f0"
  neutral-text-main: "#0f172a"
  neutral-text-muted: "#475569"
  neutral-dark: "#0f172a"
typography:
  display:
    fontFamily: "var(--font-heading), Lexend, system-ui, sans-serif"
    fontSize: "3.5rem"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "var(--font-heading), Lexend, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "var(--font-heading), Lexend, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  body:
    fontFamily: "var(--font-sans), Figtree, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  label:
    fontFamily: "var(--font-sans), Figtree, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.02em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-surface}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "{colors.neutral-bg}"
    textColor: "{colors.neutral-text-main}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  card-course:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.neutral-text-main}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: Sitech

## Overview

**Creative North Star: "Estúdio Técnico Contemporâneo (Caderno de Laboratório & Prática Aplicada)"**

O sistema visual do Sitech constrói uma experiência institucional transparente, acolhedora e de alta precisão. Substitui blocos corporativos áridos e o contraste agressivo de bordas pretas grossas por uma espacialidade nítida, paleta equilibrada com ancoragem em azul cobalto/ardósia e acentos funcionais que diferenciam os eixos formativos (TI, Indústria, Saúde e Gestão).

A interface prioriza a legibilidade das matrizes curriculares e a velocidade de tomada de decisão do futuro estudante. A densidade visual é calibrada com generoso respiro vertical, cantos suavemente lapidados (16px a 24px) e sombras difusas em múltiplas camadas que proporcionam sensação física de elevação e sofisticação técnica.

**Key Characteristics:**
- **Clareza Arquitetural:** Linhas de precisão de 1px em tons ardósia suave, eliminando contornos pretos pesados.
- **Diferenciação por Eixo:** Cores funcionais discretas (azul para TI, âmbar para indústria, esmeralda para saúde e ciano para gestão) aplicadas em pílulas informativas.
- **Profundidade Macia:** Sombras multicamada suaves e blur translúcido em superfícies de sobreposição.
- **Tipografia com Propósito:** Títulos fortes e escaneáveis com Lexend aliados à fluidez de leitura de Figtree.

## Colors

A paleta combina uma base neutra clara e luminosa com o azul cobalto acadêmico e toques cromáticos estratégicos dedicados às áreas de formação.

### Primary
- **Cobalto Politécnico** (`#1e40af` / `#2563eb`): Cor mestra da identidade, usada em chamadas de ação primárias, indicadores de foco e elementos de alta autoridade.
- **Azul Noturno Institucional** (`#0f172a`): Tom de texto principal e superfícies escuras de alto contraste (rodapé, faixas de destaque e botões de fechamento).

### Secondary & Functional Accents
- **TI & Software (Azul Real)** (`#2563eb`): Aplicado em tags e destaques de cursos de computação e dados.
- **Indústria & Mecânica (Âmbar Técnico)** (`#ea580c`): Aplicado em cursos de automação, robótica e edificações.
- **Saúde & Processos (Esmeralda Clínico)** (`#059669`): Aplicado em cursos de farmácia, nutrição e química.
- **Gestão & Negócios (Ciano Estratégico)** (`#0284c7`): Aplicado em administração e logística.

### Neutral
- **Fundo Base** (`#f8fafc`): Fundo geral que reduz fadiga ocular e eleva os cartões brancos.
- **Superfície dos Cartões** (`#ffffff`): Branco puro para máxima legibilidade do conteúdo e das matrizes.
- **Borda de Contorno** (`#e2e8f0`): Divisores de 1px nítidos e desprovidos de peso visual excessivo.
- **Texto Secundário** (`#475569`): Contraste confortável (superior a 7:1) para corpo de texto e sinopses.

### Named Rules
**A Regra da Raridade Cromática.** As cores de destaque de cada eixo pertencem às suas respectivas pílulas e marcadores. O fundo do site e os grandes blocos estruturais permanecem em neutros claros (`#f8fafc` / `#ffffff`) ou azul ardósia profundo (`#0f172a`), garantindo sobriedade e sofisticação.

## Typography

**Display & Títulos:** `Lexend` (com fallback para `system-ui, -apple-system, sans-serif`)
**Corpo & Interface:** `Figtree` (com fallback para `system-ui, -apple-system, sans-serif`)

A combinação une o desenho geométrico e otimizado para retenção e leitura do Lexend em títulos com as proporções equilibradas e legibilidade superior do Figtree em blocos de texto e grades de matérias.

### Hierarchy
- **Display** (800, 3.5rem / 56px, line-height 1.1, tracking -0.025em): Título principal da Hero na página inicial.
- **Headline** (800, 2.25rem / 36px, line-height 1.2, tracking -0.025em): Títulos das grandes seções (Catálogo, Diferenciais, Notícias).
- **Title** (700, 1.25rem / 20px, line-height 1.3, tracking -0.015em): Nomes de cursos nos cartões e títulos de artigos.
- **Body** (400 / 500, 0.9375rem / 15px, line-height 1.6, max 70ch): Parágrafos descritivos, sinopses de cursos e comunicados.
- **Label** (600, 0.75rem / 12px, tracking 0.02em): Pílulas de semestres, carga horária e tags de categoria.

### Named Rules
**A Regra do Peso Direto.** Títulos transmitem autoridade por sua escala e espessura tipográfica (800 / 700), dispensando o uso de kickers, subtags decorativas prévias ou gradientes multicoloridos.

## Layout

- **Container Máximo:** `max-w-7xl` (1280px) centralizado com padding responsivo (`px-4 sm:px-6 lg:px-8`).
- **Ritmo de Espaçamento:** Seções com respiro generoso (`py-20 sm:py-28`), mantendo mais distância antes dos títulos do que depois deles.
- **Grid de Cartões:** 1 coluna em mobile, 2 em tablet (`md`), 3 em desktop (`lg`) com espaçamento consistente de `gap-6` (24px) a `gap-8` (32px).
- **Barra de Navegação Superior:** Fixa com altura equilibrada, sempre acessível e com transição suave de transparência para vidro fosco (`bg-white/95 backdrop-blur-md border-b border-slate-200/80`).

## Elevation & Depth

O sistema utiliza elevação física em camadas através de sombras difusas e multidimensionais com tintura sutil de azul ardósia (`rgba(15, 23, 42, ...)`), rejeitando sombras duras sólidas de offset 0-blur.

### Shadow Vocabulary
- **Card Base** (`box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 6px 16px -2px rgba(15, 23, 42, 0.05)`): Aplicado aos cartões de cursos e blocos em repouso.
- **Card Hover** (`box-shadow: 0 12px 28px -6px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.03)`): Reação interativa ao passar o mouse em cartões interativos.
- **Elevated / Modal** (`box-shadow: 0 20px 40px -12px rgba(15, 23, 42, 0.12), 0 8px 16px -4px rgba(15, 23, 42, 0.04)`): Janela modal da matriz curricular e cartões de destaque.

### Named Rules
**A Regra da Elevação Fluida.** As superfícies flutuam suavemente na interação (`hover:-translate-y-1 hover:shadow-card-hover duration-300`). O deslocamento é sutil e nunca acompanhado de recortes mecânicos angulares.

## Shapes

- **Cantos Arredondados:** Curvatura generosa e consistente. Cartões principais usam `rounded-2xl` (16px), botões e inputs usam `rounded-xl` (12px), pílulas usam `rounded-full`.
- **Bordas:** Delimitadores de `1px` em `slate-200/90` com transparência calibrada, garantindo contenção sem pesar visualmente.

## Components

### Buttons
- **Shape:** `rounded-xl` (12px).
- **Primary:** Fundo azul cobalto (`#2563eb`), texto branco, padding `10px 20px`, peso `font-semibold`. Ao hover, avança para `#1d4ed8` com elevação de 2px.
- **Secondary:** Fundo cinza suave (`#f1f5f9`), texto slate escuro (`#334155`), sem borda intrusiva.
- **Dark Action:** Fundo slate 900 (`#0f172a`), texto branco, hover em azul cobalto.

### Chips & Badges
- **Shape:** `rounded-full` com padding `4px 10px`.
- **Estilo:** Fundo tintado claro (50) com texto saturado escuro (800) e borda ultrafina da mesma família de cor, com ponto indicador interno de 6px.

### Cards de Cursos
- **Shape:** `rounded-2xl` com fundo branco puro e borda de 1px.
- **Organização Interna:** Cabeçalho com badge do eixo e carga horária, título com transição para azul no hover, sinopse, tags de competências e rodapé com duração e botão de matriz curricular.

### Inputs de Busca
- **Shape:** `rounded-xl` com fundo branco, ícone de lupa interno em cinza neutro e anel de foco azul cobalto visível (`focus-visible:ring-2 focus-visible:ring-blue-600`).

### Modal da Matriz Curricular
- **Estrutura:** Janela flutuante `rounded-2xl` com fundo branco sobre overlay escuro translúcido com backdrop-blur.
- **Navegação Semestral:** Cartões por semestre com contagem de disciplinas e marcadores vetoriais azuis.

## Do's and Don'ts

### Do:
- **Do** manter contraste mínimo de 4.5:1 para todo o texto corrido e 7:1 em títulos institucionais.
- **Do** usar sombras suaves em camadas com blur amplo para indicar elevação física.
- **Do** preservar a associação semântica de cores por eixo formativo (TI em azul, Indústria em âmbar, Saúde em esmeralda, Gestão em ciano).
- **Do** utilizar ícones SVG desenhados com espessura uniforme de traço (`strokeWidth: 2`).

### Don't:
- **Don't** utilizar kickers ou subtags decorativas acima dos títulos das seções.
- **Don't** aplicar bordas pretas espessas de 4px ou sombras sólidas de bloco (neo-brutalistas).
- **Don't** usar texto em gradiente multicolorido.
- **Don't** utilizar emojis como substitutos de ícones na interface.
- **Don't** esconder a barra de navegação no topo da página.
