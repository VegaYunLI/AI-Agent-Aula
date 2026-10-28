# Plano de Implementação - Setup e Layout Base

## Grupo 1: Setup do Projeto & Dependências (Concluído)
- [x] **1.1.** Inicializar a aplicação Next.js utilizando TypeScript, ESLint e Tailwind CSS via App Router.
- [x] **1.2.** Configurar a paleta de cores institucional e tipografia no `tailwind.config.ts`.
- [x] **1.3.** Estruturar a árvore de diretórios padrão (`src/app`, `src/components`, `src/lib`, `src/types`).
- [x] **1.4.** Validar a compilação inicial e execução local do servidor de desenvolvimento.

## Grupo 2: Configuração de Banco & ORM (Estrutura Preparatória)
- **2.1.** Instalar o Prisma ORM e cliente Prisma (`prisma`, `@prisma/client`).
- **2.2.** Inicializar o schema com datasource apontando para SQLite (`prisma/schema.prisma`).
- **2.3.** Criar utilitário singleton de conexão do Prisma em `src/lib/prisma.ts`.
- **2.4.** Executar migração inicial preparatória para garantir o funcionamento do arquivo local SQLite.

## Grupo 3: Layout Institucional & Responsividade
- **3.1.** Implementar o componente `Header` com logotipo, links institucionais e navegação acessível.
- **3.2.** Implementar navegação mobile (menu retrátil/hambúrguer) para resoluções reduzidas.
- **3.3.** Implementar o componente `Footer` com dados de contato, endereço e direitos da escola técnica.
- **3.4.** Compor o `RootLayout` integrando Header, container central e Footer.
- **3.5.** Estruturar a página inicial (`page.tsx`) com hero banner institucional e seções reservadas (placeholders estilizados) para Cursos e Notícias.
- **3.6.** Validar a experiência visual e responsividade em diferentes viewports (Mobile, Tablet e Desktop).
