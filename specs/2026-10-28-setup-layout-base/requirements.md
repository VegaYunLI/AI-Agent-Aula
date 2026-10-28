# Especificação de Requisitos - Setup e Layout Base

## 1. Contexto
Com base na [missão institucional](file:///c:/Users/Laboratório%2002/Desktop/AI-Agent-Aula/specs/mission.md) da escola técnica Sitech e na [stack tecnológica](file:///c:/Users/Laboratório%2002/Desktop/AI-Agent-Aula/specs/tech-stack.md) aprovada, esta fase inicial estabelece os alicerces do projeto, priorizando a identidade visual institucional, layout responsivo e estrutura base do sistema.

## 2. Escopo
- **Bootstrap do Projeto:** Inicialização do ecossistema Next.js com TypeScript e Tailwind CSS.
- **Identidade e Interface Institucional (Foco Prioritário):**
  - Criação da casca principal da aplicação (`layout.tsx`).
  - Cabeçalho (Header) responsivo com logotipo institucional e links para: Início, Cursos Técnicos, Notícias e Acesso Administrativo.
  - Menu hambúrguer adaptável para telas móveis (smartphones e tablets).
  - Rodapé (Footer) institucional com dados de contato, redes sociais e direitos reservados.
  - Página inicial (Home) com estrutura receptiva e seções reservadas para o catálogo de cursos e últimas notícias.
- **Estrutura de Dados Preparatória:**
  - Configuração da camada preparatória de banco de dados com SQLite e Prisma ORM, deixando a infraestrutura pronta para as fases seguintes de catálogo e notícias.

## 3. Decisões Técnicas e Arquitetura
- **Next.js (App Router):** Utilização da estrutura moderna baseada em componentes de servidor (RSC) para melhor SEO e velocidade de carregamento.
- **Tailwind CSS Mobile-First:** Estilização focada em compatibilidade total com navegadores modernos e dispositivos móveis (conforme demanda de marketing).
- **SQLite + Prisma Preparatório:** Definição do schema básico inicial e cliente Prisma, sem acoplamento rígido de lógica de negócio nesta fase inicial de casca visual.

## 4. Fora de Escopo Nesta Fase
- Autenticação ativa e área restrita de cadastro de notícias (Fase 3).
- População completa das matrizes curriculares e matérias dos cursos técnicos (Fase 2).
