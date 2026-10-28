# Critérios de Validação e Aceitação para Merge - Setup e Layout Base

## 1. Critérios de Aceitação Obrigatórios (Checklist de Merge)
Para autorizar o merge da branch `feature/setup-layout-base` na branch principal (`main`), todos os itens abaixo devem ser validados:

- [x] **Compilação e Build:** O comando `npm run build` executa sem nenhum erro de tipagem TypeScript ou de compilação do Next.js.
- [x] **Ambiente de Desenvolvimento:** O comando `npm run dev` inicia o servidor local sem avisos impeditivos ou falhas no console.
- [x] **Banco Preparatório:** A estrutura do Prisma e o banco SQLite local (`dev.db`) foram inicializados com sucesso via migração ou comando preparatório.
- [x] **Layout Responsivo:**
  - [x] **Desktop (≥ 1024px):** Header com navegação horizontal visível, hero banner institucional bem alinhado e footer completo.
  - [x] **Tablet (768px - 1023px):** Adaptação harmoniosa dos elementos sem quebra de overflow horizontal.
  - [x] **Mobile (< 768px):** Menu retrátil/hambúrguer funcional, botões e tipografia com boa legibilidade e área de toque adequada.
- [x] **Navegação e Rotas Base:** Links do menu e do rodapé devidamente ancorados ou apontando para rotas previstas no roadmap.
- [x] **Qualidade de Código:** Sem erros no linter (`npm run lint`).

## 2. Roteiro de Validação Manual
1. **Inicialização do Projeto:**
   ```bash
   npm install
   npm run build
   npm run dev
   ```
2. **Teste Visual e Responsividade:**
   - Abrir o navegador em `http://localhost:3000`.
   - Utilizar o DevTools para inspecionar nos modos Mobile (ex: iPhone/Pixel), Tablet (iPad) e Desktop.
   - Acionar o menu hambúrguer no mobile para abrir e fechar a gaveta de links.
3. **Verificação do Banco de Dados:**
   - Verificar a existência do arquivo SQLite gerado e validar integridade do Prisma Client.

## 3. Registro de Execução e Status
| Item | Responsável | Status | Observações |
| :--- | :--- | :--- | :--- |
| Build e Tipagem | Engenharia | Concluído | Compilação e tipagem TypeScript 100% validadas sem erros |
| Layout & Mobile | Marketing / Front | Concluído | Header, Footer, Hero, Cursos e Menu Mobile implementados |
| Banco SQLite | Engenharia | Concluído | Prisma 6 + SQLite migrado com sucesso via migração inicial |

## 4. Aprovação para Merge
- **Aprovador Técnico:** AI Assistant
- **Data da Validação:** 28/10/2026
- **Status Final:** [x] Aprovado para Merge / [ ] Necessita Ajustes
