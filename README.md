# Evolution — Central pessoal de estudos

Projeto criado em `D:\dev\Web\evolution`.

## O que está pronto

- Sete trilhas, com Java Backend e Inglês em destaque.
- 112 tópicos e 16 projetos. Java e Inglês seguem integralmente os dois PDFs em `public/plans/`.
- Roadmaps com objetivos, conteúdos, exercícios, entregáveis, pré-requisitos sugeridos, anotações e status.
- Registro de sessões e habilidades de inglês, metas acumuladas, gráficos, sequência, XP e conquistas.
- Mentor inicial por regras, usando os dados efetivamente salvos. Não requer chave de IA.
- Persistência D1 por usuário autenticado. O banco local de desenvolvimento é separado do banco publicado.

## Iniciar no computador

Com as dependências já instaladas, execute nesta pasta:

```powershell
node scripts/run-framework.mjs dev
```

Abra o endereço exibido (normalmente `http://localhost:5173`). O ambiente local usa uma identidade de desenvolvimento simulada. A versão publicada usa a autenticação e a política privada de acesso da plataforma Sites.

Se preparar outro computador, instale as dependências (`npm ci`), gere a versão (`npm run build`) e aplique as migrações locais indicadas abaixo antes de usar o banco local.

```powershell
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_many_brood.sql
```

Não reaplique uma migração já aplicada. Publicações aplicam migrações no banco de produção separadamente.

## Organização e extensão

- `lib/curriculum.ts`: catálogo de trilhas, tópicos, exercícios e projetos, independente dos registros pessoais.
- `lib/model.ts`: tipos, cálculo de XP, progresso e sequências; datas usam America/Sao_Paulo.
- `lib/mentor.ts`: recomendações determinísticas. Um futuro agente pode usar o mesmo contexto, sem alterar o catálogo ou os registros.
- `app/hub.tsx`: dashboard, navegação e formulários.
- `app/api/state/route.ts`: leitura e alterações validadas, com autenticação e isolamento por usuário.
- `db/schema.ts` e `drizzle/`: estrutura e migrações do banco.

IDs do catálogo são persistentes: acrescente novos tópicos ao final ou atribua IDs explícitos estáveis antes de reorganizar uma trilha que já tenha registros. Não renumere IDs existentes.

## Origem do conteúdo

Os PDFs têm quatro páginas cada. Etapas, tópicos, exercícios, estratégias e entregáveis foram preservados. O plano de programação indica POO e testes como etapa em consolidação; o site informa essa referência sem presumir conclusões anteriores.

Micropráticas, pré-requisitos sugeridos, classificação de dificuldade e critérios detalhados de projetos são complementos. As cinco trilhas adicionais foram elaboradas para este site, com referências oficiais e acadêmicas indicadas nas telas.

As estimativas de duração referem-se a etapas completas. As diferenças entre carga horária no texto e na tabela do PDF Java são explicitadas. Conclusão de roteiro de inglês não equivale a certificação CEFR; os quatro indicadores mostram prática registrada.

## Dados e gamificação

Tópicos, projetos, sessões e metas são salvos individualmente. Repetir um salvamento atualiza o mesmo registro, evitando duplicações. Alterar ou excluir uma sessão recalcula seus efeitos. Ganhos: 50 XP por tópico, 200 por projeto, 5 XP por 5 minutos. Cada nível exige 500 XP. A conquista de sete dias usa a maior sequência registrada, não apenas a atual.

O WebMCP expõe `read_study_progress`, somente leitura, quando o navegador oferece essa capacidade. Sem suporte, o site funciona normalmente.

## Verificação

TypeScript e geração da versão; testes locais de gravação, recarga, conclusão de tópico, estudado/praticado em inglês, projeto, meta, Mentor, rejeição de duração inválida, rotas e navegação móvel. Os registros temporários desses testes foram retirados. Capturas de verificação não fazem parte da publicação.
