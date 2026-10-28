# Critérios de Validação e Aceitação para Merge - Setup e Layout Base

## 1. Critérios de Aceitação Obrigatórios (Checklist de Merge)
Para autorizar o merge da branch `feature/setup-layout-base` na branch principal (`main`), todos os itens abaixo devem ser validados:

- [ ] **Compilação e Build:** O comando `npm run build` executa sem nenhum erro de tipagem TypeScript ou de compilação do Next.js.
- [ ] **Ambiente de Desenvolvimento:** O comando `npm run dev` inicia o servidor local sem avisos impeditivos ou falhas no console.
- [ ] **Banco Preparatório:** A estrutura do Prisma e o banco SQLite local (`dev.db`) foram inicializados com sucesso via migração ou comando preparatório.
- [ ] **Layout Responsivo:**
  - [ ] **Desktop (≥ 1024px):** Header com navegação horizontal visível, hero banner institucional bem alinhado e footer completo.
  - [ ] **Tablet (768px - 1023px):** Adaptação harmoniosa dos elementos sem quebra de overflow horizontal.
  - [ ] **Mobile (< 768px):** Menu retrátil/hambúrguer funcional, botões e tipografia com boa legibilidade e área de toque adequada.
- [ ] **Navegação e Rotas Base:** Links do menu e do rodapé devidamente ancorados ou apontando para rotas previstas no roadmap.
- [ ] **Qualidade de Código:** Sem erros no linter (`npm run lint`).

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
| Build e Tipagem | Engenharia | Pendente | Aguardando execução do plano |
| Layout & Mobile | Marketing / Front | Pendente | Aguardando execução do plano |
| Banco SQLite | Engenharia | Pendente | Estrutura preparatória |

## 4. Aprovação para Merge
- **Aprovador Técnico:** ____________________
- **Data da Validação:** ____/____/2026
- **Status Final:** [ ] Aprovado para Merge / [ ] Necessita Ajustes
