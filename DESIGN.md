---
name: Sitech
description: Portal institucional da escola técnica pública com estética de oficina e ateliê politécnico contemporâneo.
colors:
  primary: "#2563eb"
  primary-dark: "#1e3a8a"
  primary-light: "#eff6ff"
  accent-industry: "#d97706"
  accent-health: "#059669"
  accent-management: "#0284c7"
  neutral-bg: "#f8fafc"
  neutral-surface: "#ffffff"
  neutral-border: "#e2e8f0"
  neutral-dark: "#0f172a"
  neutral-text-main: "#0f172a"
  neutral-text-muted: "#475569"
typography:
  display:
    fontFamily: "var(--font-heading), Lexend, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 800
    lineHeight: 1.15
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
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
---

# Design System: Sitech (Oficina & Ateliê Politécnico)

## Overview & North Star

**Creative North Star: "Oficina Politécnica & Caderno Técnico Aplicado"**

O redesign do Sitech rompe com os clichês genéricos de páginas geradas por IA (paletas pastéis uniformes, tickers de texto em loop, cartões SaaS idênticos e tags em caixa alta forçada). Em seu lugar, adota uma linguagem visual ancorada na realidade da escola técnica pública:
- Pranchetas de desenho técnico com malha de precisão de 1px (`bg-blueprint-grid`).
- Transparência curricular ativa: matrizes por semestre navegáveis diretamente no cartão ou em modal aprofundado.
- Bancada interativa de experimentação por eixos formativos (TI, Indústria, Saúde e Gestão).
- Animações funcionais táteis a 60fps que respondem ao usuário (troca de eixos, inspeção de laboratórios, cópia da grade e agendamento de visitas).

## Paleta de Cores e Hierarquia Semântica

1. **Cobalto Politécnico (`#2563eb` / `#1e3a8a`):** Cor mestra institucional para links, guias estruturais e ações prioritárias.
2. **Âmbar de Oficina (`#d97706`):** Destaque para cursos industriais, mecatrônica e indicadores de bancada.
3. **Ardósia Mecânica (`#0f172a` / `#1e293b`):** Base para cabeçalhos, rodapé e painéis de dados em alto contraste.
4. **Cinza Prancheta (`#f8fafc` / `#f1f5f9`):** Fundo suave com textura de grade que elimina o ofuscamento digital do branco absoluto.
5. **Branco Gabarito (`#ffffff`):** Superfície para cartões de cursos e modais com bordas táteis de 1px.
6. **Esmeralda Clínico (`#059669`) & Ciano Estratégico (`#0284c7`):** Diferenciação semântica para os eixos de Saúde/Farmácia e Gestão/Negócios.

## Regras Tipográficas (Anti-Clichê de IA)

- **Sem caixa alta decorativa (ALL-CAPS):** Todos os rótulos, tags e botões utilizam Sentence Case natural e legível.
- **Sem palavras multicoloridas em títulos:** Os títulos comunicam força pelo peso tipográfico direto (`800` no Lexend) e não por gradientes ou cores soltas.
- **Sem marcadores soltos sem sequência:** Numerais sequenciais (1º, 2º, 3º) são reservados exclusivamente para a progressão real dos semestres letivos.
- **Comprimento de linha contido:** Parágrafos mantidos entre 50 e 70 caracteres para leitura fluida e confortável.

## Sistema de Elevação e Interações

- **Elevação Tátil (`shadow-tactile`):** Substituição de sombras difusas exageradas por uma elevação física suave com borda nítida de 1px.
- **Bancada Interativa na Hero:** Alternância suave entre os eixos formativos com exibição dos equipamentos reais de laboratório e matérias do semestre selecionado.
- **Modo Duplo nos Cartões:** Cada cartão permite ao aluno alternar entre "Visão Geral" e "Matérias dos 3 Semestres" diretamente sem abrir modais.
- **Modal de Matriz Curricular:** Visualização completa semestre a semestre, com botão de cópia formatada da grade para a área de transferência.
- **Agendamento de Visita Monitorada:** Modal rápido para alunos e escolas parceiras conhecerem as oficinas e laboratórios.
