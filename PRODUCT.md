# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Futuros Alunos e Comunidade:** Jovens e adultos em busca de formação técnica profissionalizante que precisam consultar cursos técnicos disponíveis, matrizes curriculares, descrição das matérias e novidades da instituição para tomada de decisão.
- **Equipe Escolar e Coordenação:** Gestores pedagógicos e administrativos que precisam de um canal oficial direto e autenticado para publicar notícias, comunicados e comunicados institucionais na página principal.

## Product Purpose

O portal institucional Sitech existe para ser a presença digital oficial da escola técnica, divulgando com clareza o catálogo de cursos técnicos, suas respectivas matrizes curriculares formativas e oferecendo um feed contínuo de notícias oficiais para a comunidade. O sucesso significa que qualquer futuro aluno consegue entender com facilidade a grade curricular dos cursos e a equipe escolar consegue publicar avisos oficiais de forma ágil e segura.

## Positioning

Portal institucional de ensino técnico profissionalizante centrado na transparência curricular completa (matrizes curriculares baseadas no modelo da ETEC Sales Gomes) aliado a um canal direto e oficial de comunicação da instituição com alunos e comunidade.

## Operating Context

- Acesso público a partir de smartphones, tablets e computadores, exigindo carregamento rápido, excelente legibilidade e navegação fluida em conexões móveis.
- Acesso administrativo restrito por login para cadastro e gestão de notícias a serem exibidas na página principal.

## Capabilities and Constraints

- **Tecnologias:** Next.js (App Router), React 19, TypeScript e Tailwind CSS v4.
- **Dados e Persistência:** Prisma ORM com SQLite para armazenamento leve e local.
- **Catálogo de Cursos:** Catálogo estruturado baseado no ensino técnico da ETEC Sales Gomes (matrizes curriculares e matérias formativas).
- **Gestão de Conteúdo:** Autenticação administrativa com foco em criação de notícias para exibição na página inicial.
- **Compatibilidade:** Design mobile-first e suporte aos principais navegadores modernos.

## Brand Commitments

- **Nome da Marca:** Sitech.
- **Voz e Tom:** Confiável, institucional, transparente, acessível e voltado ao futuro profissional dos estudantes.
- **Referência Externa Vinculante:** Cursos e matrizes derivados do ensino técnico da ETEC Sales Gomes (`https://etecsalesgomes.cps.sp.gov.br/ensino-tecnico/`).

## Evidence on Hand

- Diretrizes e requisitos mapeados em [README.md](file:///C:/Users/Laboratório 02/Desktop/AI-Agent-Aula/README.md) e nos documentos de especificação em `specs/` ([mission.md](file:///C:/Users/Laboratório 02/Desktop/AI-Agent-Aula/specs/mission.md), [roadmap.md](file:///C:/Users/Laboratório 02/Desktop/AI-Agent-Aula/specs/roadmap.md), [tech-stack.md](file:///C:/Users/Laboratório 02/Desktop/AI-Agent-Aula/specs/tech-stack.md)).
- Catálogo de referência externa: `https://etecsalesgomes.cps.sp.gov.br/ensino-tecnico/`.
- Ausência de banco de imagens proprietário no momento (futuros designs não devem fabricar fotos como se fossem reais da escola sem aprovação).

## Product Principles

1. **Transparência Curricular:** As matrizes e disciplinas de cada curso técnico devem ser expostas com total clareza, facilitando a escolha vocacional do aluno.
2. **Comunicação Institucional Ágil:** A página inicial serve como ponto de contato confiável com notícias e informes oficiais atualizados pela equipe.
3. **Usabilidade Universal e Desempenho:** Navegação responsiva mobile-first com carregamento leve e legibilidade impecável em qualquer navegador.
4. **Fidelidade ao Escopo:** Catálogo técnico focado nos cursos de referência e separação nítida entre o catálogo estruturado e a área administrativa de notícias.

## Accessibility & Inclusion

- Conformidade com padrões WCAG (contraste adequado de cores, hierarquia semântica de títulos, foco visível e áreas de toque acessíveis em telas mobile).
