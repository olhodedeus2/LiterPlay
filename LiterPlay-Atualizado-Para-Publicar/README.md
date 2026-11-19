# LiterPlay — prévia pública e base da plataforma

O projeto inclui uma página pública de apresentação e uma demonstração visual para compartilhar com escolas, professores e estudantes. A página inicial e `/demonstracao` não precisam consultar o banco de dados, portanto podem ser exibidas na Vercel mesmo enquanto o banco ainda está sendo configurado.

## O que o público pode ver
- Página inicial de apresentação do LiterPlay.
- Visão de matérias, proposta pedagógica e funcionamento.
- Página `/demonstracao` com exemplos ilustrativos de painel, aulas e ranking.
- Layout responsivo para celular e computador.

**Importante:** a demonstração usa nomes, pontuações e dados fictícios. Ela não representa alunos reais nem comprova que as funções conectadas ao banco estão operacionais. Cadastro, login, aulas dinâmicas, XP persistente e ranking real dependem de MySQL e das variáveis de ambiente.

## Tecnologias
- Next.js 15 / React 19 / TypeScript
- Prisma ORM 6
- MySQL 8+
- Sessões com cookies HTTP-only e JWT
- Senhas com bcrypt

## Publicar a prévia na Vercel
1. Extraia o ZIP.
2. Envie o conteúdo para um repositório GitHub.
3. Na Vercel, importe o repositório e mantenha o framework Next.js.
4. Use `npm run build` como comando de build.
5. A página inicial e `/demonstracao` podem ser apresentadas sem banco configurado.
6. Depois, configure `DATABASE_URL`, `AUTH_SECRET` e `NEXT_PUBLIC_SITE_URL` para habilitar os recursos conectados ao banco.

## Executar localmente
Requer Node.js 20 ou superior.

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000` e `http://localhost:3000/demonstracao`.

## Configurar banco de dados para as funções reais
1. Crie um banco MySQL 8+ com charset `utf8mb4`.
2. Copie `.env.example` para `.env`.
3. Configure `DATABASE_URL` com a URL do banco.
4. Configure `AUTH_SECRET` com um segredo aleatório forte, com pelo menos 32 caracteres.
5. Execute:

```bash
npx prisma db push
npm run db:seed
```

6. Em produção, configure as mesmas variáveis no painel da Vercel e execute as migrações/preparação do banco de produção de forma controlada.

## Plataforma para várias escolas — trabalho ainda necessário
A versão atual ainda não implementa isolamento multi-escola. Antes de cadastrar instituições reais, o modelo de dados e todas as consultas precisam receber um identificador de escola (`schoolId`) e validar permissões no servidor. Também será necessário painel de gestão da plataforma, painel da escola, gestão de professores/turmas, auditoria e testes de isolamento.

## Domínio
O domínio `literplay.com.br` não está incluído nem foi registrado por este projeto. Verifique a disponibilidade e registre-o com o titular responsável em https://registro.br/. Depois adicione o domínio ao projeto Vercel e configure os registros DNS exatamente como a Vercel indicar. Atualize `NEXT_PUBLIC_SITE_URL` para `https://literplay.com.br` após a conexão.

## Antes de abrir cadastro ao público
- Revisar os termos e a política de privacidade com o responsável pela plataforma.
- Planejar tratamento de dados de crianças e adolescentes conforme a LGPD.
- Criar controles de consentimento/autorização quando aplicável, retenção e exclusão de dados.
- Testar segurança, permissões, backups e restauração.
- Não usar dados reais de alunos na demonstração.

Este ZIP é uma prévia pública de apresentação e uma base de desenvolvimento. Não é uma certificação de segurança, conformidade legal ou prontidão operacional para uso escolar em produção.
