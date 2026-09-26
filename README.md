# Engenharia de Software Java Pós — Módulo 04 🖥️

## Fundamentos de Front-End com React

Repositório de estudos do módulo de front-end. O objetivo é construir uma base prática em React, integrando componentes, consumo de APIs, autenticação, roteamento e boas práticas de desenvolvimento.

## Organização

- `main`: anotações e visão geral do módulo;
- `modulo-01-react`: exercícios, exemplos e projeto guiado em React.

## Roteiro das 24 videoaulas

> Os nomes exibidos na lateral do AVA são abreviados. A sequência abaixo preserva a organização real do conteúdo, sem marcar novas aulas como concluídas.

| Videoaulas | Tema |
| --- | --- |
| 01 | Introdução ao Front-End moderno |
| 02–05 | Primeiros passos com React |
| 06–07 | Comunicação com APIs |
| 08–12 | Autenticação |
| 13–20 | Projeto guiado: mini app com filmes |
| 21–24 | Entrevistas técnicas e desafios reais |

Também fazem parte da disciplina um videocast sobre roadmap de estudos e a avaliação.

## Conteúdos-chave

### Introdução ao Front-End e React

- Evolução de HTML, CSS, JavaScript e SPAs;
- React, Next.js, TypeScript, Node.js e Tailwind CSS;
- Componentização, acessibilidade, responsividade e performance;
- Estrutura de projeto, JSX, props, estado e composição de componentes.

### Comunicação com APIs

- Requisições HTTP com `fetch` ou Axios;
- `useState` para dados reativos e `useEffect` para efeitos colaterais;
- Estados de loading, erro e renderização dos dados;
- Separação entre componentes de interface e serviços de API.

### Autenticação

- Fluxo de login com JWT;
- Envio do token em requisições autenticadas;
- Rotas protegidas com `react-router-dom`;
- Cuidados com `localStorage`, XSS, HTTPS e expiração de sessão.

### Projeto guiado: mini app de filmes

- Lista de filmes em destaque, busca e detalhes;
- Componentes reutilizáveis, páginas e serviços de API;
- Rotas `/`, `/filme/:id` e página 404;
- `useNavigate`, `useParams`, responsividade e preparação para deploy.

### Entrevistas e desafios

- Triagem, entrevista técnica, live coding e desafio assíncrono;
- Revisão de JavaScript, React, HTML, CSS e APIs;
- Projetos bem documentados, Git e comunicação de decisões técnicas.

## Anotações — Aula 01: Introdução ao Front-End Moderno

### Objetivos

- Aprender React de forma prática e moderna;
- conectar o raciocínio de back-end e front-end;
- preparar para entrevistas e desafios técnicos;
- desenvolver visão de produto e de negócio, além do código.

### Evolução do front-end

1. HTML (1991) e CSS (1996): estrutura e apresentação separadas;
2. JavaScript e Ajax: páginas interativas sem recarregar tudo;
3. SPAs e frameworks como Angular, Vue e React;
4. ECMAScript 6+, módulos e ferramentas de build;
5. SSR, TypeScript e meta-frameworks, formando uma plataforma completa.

### Fundamentos

- HTML é linguagem de marcação, responsável pela estrutura semântica;
- CSS define a aparência e depende de um documento HTML;
- JavaScript é a linguagem de programação usada para lógica, dados, listas e objetos;
- React é uma biblioteca baseada em componentes reutilizáveis;
- componentes React são funções que recebem propriedades e podem retornar JSX;
- JSX combina a escrita de elementos semelhantes a HTML com JavaScript.

### Premissas da disciplina

É esperado conhecimento básico de lógica, Java (ou outra linguagem), aplicações web, comunicação assíncrona e consulta à documentação. O princípio do instrutor é KISS (*Keep It Simple*): manter as soluções tão simples quanto possível.

## Anotações — Aula 02: Configuração do Ambiente e Ferramentas

### Ambiente e criação do projeto

- Node.js 22.16 LTS, gerenciado com NVM para alternar versões;
- VS Code com terminal integrado;
- Projeto `fundamentos-frontend-react` criado com Next.js;
- TypeScript e ESLint habilitados para tipagem, padronização e prevenção de erros;
- Tailwind CSS configurado via PostCSS;
- App Router em `src/app/`;
- Turbopack ativado com `next dev --turbo` para desenvolvimento e hot reload.

### Estrutura essencial

- `package.json`: dependências e scripts (`dev`, `build`, `lint`);
- `node_modules/`: pacotes instalados, não versionar no Git;
- `public/`: imagens, ícones e outros arquivos estáticos;
- `src/app/layout.tsx`: wrapper global, `<html>`, `<body>`, fontes e metadados;
- `src/app/page.tsx`: página inicial e primeiro ponto de renderização.

### React e JSX/TSX

- JSX permite escrever marcação semelhante a HTML dentro do JavaScript;
- use `className` em vez de `class` e feche tags sem conteúdo (`<img />`);
- Fragments (`<>...</>`) agrupam elementos sem criar uma `div` extra;
- componentes podem ser declarados com `function` ou arrow functions;
- props são os parâmetros passados do componente pai para o filho, permitindo reutilização e interfaces dinâmicas.

## Anotações — Aula 03: Listas, Imagens e Rotas no Next.js

### Listas e objetos

- Arrays JavaScript podem ser renderizados com `map`, retornando um elemento JSX para cada item;
- cada item repetido precisa de uma `key` estável e única para o Virtual DOM;
- o índice pode compor uma chave (`hobby-${index}`), mas um identificador próprio do dado é preferível;
- `key` serve ao React e não aparece no HTML final;
- props são objetos e podem ser lidas de forma concisa com destructuring (`{ name, age }`);
- arrays e objetos estáticos devem ficar fora do componente para não serem recriados a cada renderização;
- spread (`...`) permite combinar arrays em uma nova lista.

### Imagens

- Em Next.js, prefira `next/image` ao `<img>` para obter otimização de carregamento;
- informe sempre `src`, `width`, `height` e `alt`;
- `alt` é essencial para acessibilidade e leitores de tela;
- imagens locais podem vir da pasta `public/` usando caminhos como `/next.svg`;
- `priority` pode antecipar o carregamento de imagens importantes, mas deve ser usado com moderação.

### Rotas dinâmicas

- No App Router, uma pasta com `page.tsx` define uma rota;
- `src/app/nivel-0/page.tsx` corresponde a `/nivel-0`;
- pastas entre colchetes criam parâmetros dinâmicos, como `src/app/blog/[name]/page.tsx`;
- o parâmetro é recebido em `params` e, nas versões atuais do Next.js, pode ser uma `Promise` que deve ser aguardada com `await`;
- a página precisa ser declarada `async` para usar esse `await` e deve tipar suas props com TypeScript.

## Anotações — Aula 04: Eventos, Estado e Componentes Reutilizáveis

### Eventos e Tailwind CSS

- Eventos React representam interações do usuário, como clique e alteração em campos; não são eventos de mensageria;
- `onClick` recebe uma função executada quando o usuário clica;
- `onChange` captura alterações em inputs controlados;
- Tailwind aplica estilo por classes utilitárias, como `border`, `px-4`, `py-1`, `rounded`, `bg-blue-500` e `hover:bg-blue-900`;
- valores personalizados podem ser usados entre colchetes, como `bg-[#123456]`.

### Estado e formulários

- Para atualizar um contador a partir do estado anterior, prefira o atualizador funcional: `setCount((current) => current + 1)`;
- essa forma evita leituras desatualizadas quando várias atualizações ocorrem em sequência;
- inputs controlados recebem `value` do estado e atualizam esse estado em `onChange` com `event.target.value`;
- um botão de limpar pode restaurar o estado do input para uma string vazia.

### Componentização e ciclo de vida

- Botões repetidos devem virar um componente reutilizável que recebe `onClick` e `children` por props;
- em TypeScript, `children` pode ser tipado como `ReactNode` e o clique como `MouseEventHandler<HTMLButtonElement>`;
- componentes passam pelos ciclos de montagem, atualização e desmontagem;
- `useEffect` é o hook usado para efeitos relacionados a essas mudanças, como sincronizações, logs ou limpezas ao desmontar.

## Anotações — Aula 05: Context API e Persistência de Sessão

### Context API

- Context API é o mecanismo nativo do React para estado compartilhado entre vários componentes;
- evita *prop drilling*: passar a mesma prop por muitos níveis da árvore apenas para alcançar um componente distante;
- Redux foi muito usado para estado global; Context API resolve casos simples e médios sem dependência adicional;
- crie o contexto com `createContext`, disponibilize valores com um `Provider` e consuma-os com `useContext`;
- o Provider envolve somente a parte da árvore que precisa acessar aquele estado, frequentemente por meio de um `layout.tsx` interno;
- o Provider recebe `children`, normalmente tipado como `ReactNode`;
- o tipo do contexto deve refletir tanto o valor quanto seu atualizador, por exemplo `count: number` e `setCount: Dispatch<SetStateAction<number>>`.

### Estado global na prática

- Componentes descendentes do Provider acessam o mesmo valor sem receber props intermediárias;
- ao atualizar o contador em um componente, todos os demais consumidores do contexto recebem o novo valor;
- Context não substitui automaticamente o estado local: use-o quando o dado for realmente compartilhado.

### SessionStorage

- Estado React é reiniciado ao recarregar a página;
- `sessionStorage` persiste dados por aba do navegador durante a sessão atual;
- cada aba mantém seu próprio `sessionStorage`, enquanto `localStorage` é compartilhado entre abas da mesma origem;
- o armazenamento usa pares chave-valor e `getItem` retorna `string` ou `null`;
- para recuperar números, valide a existência do valor e converta a string antes de atualizar o estado;
- a leitura no cliente pode ocorrer em `useEffect` com dependências vazias, após a montagem.

## Anotações — Aula 06: Comunicação com APIs (Parte 1)

### Revisão de estado e TypeScript

- Em JavaScript, `0`, `""`, `false`, `null`, `undefined` e `NaN` são valores *falsy*; portanto, `if (count)` não serve para verificar se um contador existe;
- para preservar o valor `0` no armazenamento, teste explicitamente contra `null` ou `undefined`;
- se um valor do Context pode ser `null`, trate esse caso antes de realizar operações matemáticas, por exemplo com `value ?? 0`;
- prefira validação e valores padrão a um *type cast* forçado quando não houver garantia real de que o dado existe;
- organize imports do mais global para o mais local: bibliotecas, módulos internos e componentes irmãos.

### Fetch API

- `fetch` é a API nativa do JavaScript para comunicação HTTP e retorna uma `Promise`;
- Axios é uma alternativa que adiciona uma camada de conveniência, mas também uma dependência a manter;
- valide `response.ok`: respostas HTTP como 404 ou 500 não tornam automaticamente a Promise rejeitada;
- use `response.json()` para JSON e `response.text()` quando a resposta for texto;
- `try...catch` trata falhas de rede e erros lançados manualmente;
- opções de requisição incluem `method`, `body` e `headers`; tokens de autenticação costumam ser enviados em headers.

### CORS e comunicação server-side

- CORS (*Cross-Origin Resource Sharing*) é uma proteção aplicada pelo navegador para controlar quais origens podem acessar uma API;
- a permissão é definida no servidor por headers HTTP; não é um problema que se resolve apenas no front-end;
- ele evita que sites de outra origem consumam recursos sem autorização;
- no Next.js, uma opção é buscar dados no servidor, deixando o servidor Next comunicar-se com a API antes de entregar a página.

## Anotações — Aula 07: Comunicação com APIs (Parte 2)

### Server Components e Client Components

- No App Router, componentes são Server Components por padrão; use `"use client"` apenas quando precisar de interatividade ou APIs do navegador;
- buscar dados no servidor normalmente evita CORS no navegador e entrega a página com os dados já preparados;
- buscar diretamente no cliente expõe a requisição no painel Network e pode sofrer restrições de CORS;
- para dados que precisam chegar rapidamente na primeira renderização, server-side tende a proporcionar uma experiência mais fluida.

### Suspense e a API `use`

- `Suspense` exibe um `fallback` enquanto seus componentes filhos aguardam recursos assíncronos;
- o fallback pode ser um texto de carregamento ou um *skeleton*;
- não aguarde a Promise na página quando ela deve ser resolvida dentro de `Suspense`: passe a Promise adiante;
- em um Client Component, a API `use` do React pode ler uma `Promise` recebida por props;
- tipar a prop como `Promise<PostType[]>` garante que o componente saiba qual dado será resolvido.

### Organização e ferramentas

- Centralize tipos compartilhados, como `PostType`, para evitar cópias e inconsistências;
- o alias `@/` aponta para `src/`, simplificando imports internos;
- npm, Yarn e pnpm são gerenciadores de pacotes; use apenas um lockfile por projeto para manter instalações reprodutíveis;
- não execute comandos de inicialização de outro gerenciador sem avaliar o impacto sobre `package.json` e arquivos de lock.

## Anotações — Aula 08: Autenticação (Parte 1)

### Autenticação e autorização

- Autenticação responde **quem é o usuário**: confirma sua identidade, normalmente com credenciais como e-mail e senha;
- autorização responde **o que o usuário pode fazer ou acessar** depois de autenticado;
- roles, como `user` e `admin`, agrupam permissões e são usadas nas decisões de autorização;
- autenticação vem antes de autorização: não há como decidir permissões de uma identidade ainda não confirmada.

### Preparação do projeto

- Mantenha versões de tipos alinhadas, quando possível, à versão do Node usada no projeto;
- `@types/node` é uma dependência de desenvolvimento e deve ficar em `devDependencies`;
- o compilador TypeScript pode ser validado pelo terminal com `tsc`; ausência de saída normalmente indica sucesso;
- Yarn, npm e pnpm têm comandos e lockfiles diferentes; escolha um gerenciador por projeto e evite alterações acidentais entre eles.

### AuthContext e uso de IA

- Um `AuthContext` client-side pode centralizar `user`, `token`, `login` e `logout` para os componentes que precisam do estado de sessão;
- a tipagem inicial deve representar claramente usuário, token opcional e contratos das funções de autenticação;
- o token JWT será usado nas chamadas a APIs protegidas, normalmente em um header HTTP;
- ao pedir ajuda a uma IA, dê contexto mínimo e específico: framework, versão, App Router, estratégia de requisição e objetivo;
- revise toda sugestão gerada por IA e compare-a com a documentação da versão usada pelo projeto.

## Anotações — Aula 09: Autenticação (Parte 2 — Formulário de Login)

### Submissão de formulários

- Formulários usam `onSubmit` para concentrar a ação de envio; o botão dispara essa ação com `type="submit"`;
- `onClick` no botão também pode ser válido, especialmente quando a ação pertence ao próprio componente de botão;
- a escolha depende da organização dos componentes, mas `onSubmit` preserva a semântica e o comportamento esperado de formulários.

### Componentes reutilizáveis e props

- Um componente de botão deve aceitar suas props específicas e também as props nativas de `button`;
- o spread operator (`...props`) repassa atributos como `type`, `disabled`, `aria-*` e outros ao elemento HTML;
- após ampliar a tipagem do componente, valide com `tsc` para garantir que os usos existentes continuam corretos.

### Layout com Tailwind

- `grid` e `gap` organizam campos e espaçamentos do formulário;
- inputs podem usar classes como `border`, `border-gray-900`, `rounded`, `p-2` e `w-96`;
- `flex`, `items-center`, `justify-center` e `min-h-screen` centralizam o formulário na tela sem alterar o layout global;
- um título claro e tipografia (`text-5xl`, `font-bold`) completam a hierarquia visual da página.

## Anotações — Aula 10: Autenticação (Parte 3 — Cookies e Rotas Protegidas)

### Cookies e requisições autenticadas

- Tokens podem ser definidos pelo servidor em um cookie na resposta de login;
- em `fetch`, `credentials: "include"` envia cookies também em requisições entre origens, desde que o servidor e o CORS permitam;
- `credentials: "same-origin"` é o padrão e envia cookies somente para a mesma origem; `omit` nunca os envia;
- endpoints protegidos devem responder `401 Unauthorized` quando o token estiver ausente e rejeitar tokens inválidos.

### Server-side no Next.js

- No servidor, `cookies()` de `next/headers` permite ler cookies da requisição; nas versões atuais do Next, essa chamada é assíncrona;
- o token pode ser encaminhado a uma API protegida no header `Authorization: Bearer <token>`;
- funções utilitárias centralizam a construção de requisições autenticadas;
- `split` e `replace` podem remover o prefixo `Bearer`, mas o ideal é validar o formato do header antes de usar o token;
- logs feitos em Server Components aparecem no terminal do Next, não no console do navegador.

### Segurança essencial

- Cookies `HttpOnly` não podem ser lidos por `document.cookie`, e isso é uma proteção contra roubo de token por XSS;
- **não remova `HttpOnly` apenas para tornar o JWT acessível ao JavaScript do cliente**;
- a abordagem mais segura é manter o cookie `HttpOnly` e deixar o servidor/BFF do Next encaminhar a autenticação à API;
- para cookies de sessão reais, avalie também `Secure`, `SameSite`, expiração, HTTPS e proteção CSRF.

## Anotações — Aula 11: Autenticação (Parte 4 — JWT com `jose`)

### Biblioteca e verificação

- `jose` é uma biblioteca moderna para assinar, verificar e decodificar JWTs em ambientes JavaScript/TypeScript compatíveis com Web Crypto;
- escolha bibliotecas com documentação atual e compatibilidade com o ambiente onde o código vai executar;
- `jwtVerify(token, secret)` verifica assinatura e expiração de forma assíncrona e retorna payload e header protegido;
- segredos para HMAC podem ser convertidos para bytes com `new TextEncoder().encode(secret)`;
- após verificar o token, leia claims do `payload`, como a role, e nunca confie em valores recebidos sem verificação.

### Assinatura e autorização

- `SignJWT(payload)` cria o token; configure header protegido, algoritmo, tempo de expiração e assine com a chave secreta;
- o algoritmo de assinatura deve ser configurado uma única vez e usado de forma consistente na assinatura e na verificação;
- endpoints e middleware devem retornar `401` para token ausente ou inválido e aplicar regras de autorização após validar o JWT;
- roles no token ajudam decisões de acesso, mas a API continua responsável por validar permissões sensíveis.

### Cuidados

- chave e algoritmo devem vir de variáveis de ambiente, nunca do código versionado;
- troque tokens/segredos de teste antes de qualquer deploy;
- não use apenas decode para proteger rotas: decodificar lê o conteúdo, verificar valida assinatura e claims;
- valide algoritmo, expiração e formato do token; não aceite um header `Authorization` arbitrário sem checagem.

## Anotações — Aula 12: Autenticação (Parte 5 — Validação e Testes)

### Experiência de login

- Valide e-mail e senha antes de chamar a API; interrompa o fluxo com `return` quando os dados estiverem ausentes;
- mantenha um estado de erro para apresentar mensagens úteis sem depender apenas do console;
- limpe mensagens anteriores antes de uma nova tentativa de login e exiba erros retornados pela API de forma controlada;
- em TypeScript, erros de `catch` são `unknown`; faça validação de tipo antes de acessar `message`, em vez de assumir que todo erro é `Error`.

### Requisições no client

- Client Components não devem ser `async`; busque dados em funções chamadas por `useEffect`;
- não torne o callback de `useEffect` diretamente assíncrono; declare uma função `async` interna e a invoque, ou use uma IIFE com cuidado;
- guarde o resultado em estado (`useState`) para renderizar a resposta e evitar um loop de requisições a cada renderização;
- inclua o token e demais valores usados no array de dependências e só faça a requisição quando eles existirem.

### Autenticação, autorização e expiração

- Um endpoint protegido confirma a autenticidade do token; o middleware ou a regra de negócio decide se a role está autorizada;
- um token expirado deve ser rejeitado pela verificação, removendo acesso autenticado e, por consequência, qualquer autorização;
- diferencie mensagens de "autenticação não ok" (sem usuário/token válido) de "autorização não ok" (usuário válido sem permissão);
- testes server-side usam cookies do servidor; testes client-side usam efeitos e mostram estados transitórios de carregamento.

## Anotações — Aula 13: Projeto Guiado — CRUD de Tasks (Parte 1)

### Objetivo do projeto

- Construir uma aplicação ponta a ponta de tarefas para reunir React, Next.js, TypeScript, Tailwind, APIs e autenticação JWT;
- telas previstas: Home, cadastro, login e listagem/gestão de tasks;
- reutilizar header e footer entre páginas e criar componentes de interface reaproveitáveis;
- o foco é uma abordagem atual e prática, não uma única "fonte da verdade" para todo projeto.

### Contrato da API demonstrada

- `POST /auth/register`: recebe `username`, `email` e `password`; devolve dados do usuário e token;
- `POST /auth/login`: recebe e-mail e senha; devolve usuário e token;
- `GET /tasks`: lista as tasks do usuário autenticado;
- `POST /tasks`: cria uma task pelo título;
- `PUT /tasks/:id`: atualiza o status `completed`;
- `DELETE /tasks/:id`: exclusão lógica, removendo a task da listagem;
- requisições de tasks usam `Authorization: Bearer <token>` e as respostas devolvem a lista atualizada.

### Modelo e decisões

- Uma task contém `id`, `userId`, `title`, `completed` e `deleted`;
- `deleted` representa exclusão lógica: o dado é marcado no backend, mas não volta no `GET`;
- o projeto usa Next.js com TypeScript, ESLint, Tailwind, `src/`, App Router e Turbopack;
- chamadas server-side evitam expor a comunicação direta com o backend e reduzem problemas de CORS;
- o backend de demonstração roda localmente em `localhost:4000`; para reproduzir a integração, é necessário ter uma API compatível em execução.

## Anotações — Aula 14: Projeto Guiado — Home e Cadastro (Parte 2)

### Home e rotas

- A Home apresenta links para `/register`, `/login` e `/tasks`;
- `Link` do Next.js faz a navegação entre rotas da aplicação;
- uma rota inexistente exibe o 404 padrão; uma página `not-found` personalizada pode ser criada depois;
- estilos de listas e links podem ser aplicados no elemento pai, como `list-disc`, margem e `underline`;
- o layout compartilhado é o lugar adequado para itens comuns, como título, header, footer e link de retorno à Home.

### Formulário de cadastro

- A rota `/register` terá campos de `username`, `email` e `password`, mantendo os mesmos nomes esperados pela API;
- valide campos obrigatórios, formato de e-mail e senha de ao menos seis caracteres antes de enviar a requisição;
- use `form`, `label`, `fieldset` e `input` para manter a semântica e acessibilidade;
- associe `label` e `input` com `htmlFor` e `id` iguais;
- agrupe cada label e input em um `fieldset` para evitar que o layout do formulário separe visualmente os dois elementos.

### Reutilização e estilo

- Inputs repetidos devem virar um componente reutilizável para centralizar aparência e comportamento;
- Tailwind pode combinar `border`, `shadow`, `focus:`, `hover:`, padding e `rounded-lg` para criar campos consistentes;
- `grid` e `gap` organizam os campos em coluna, com espaçamento controlado;
- `placeholder` pode complementar o campo, mas o `label` explícito é mais claro e acessível.

## Anotações — Aula 15: Projeto Guiado — Server Actions e Cadastro (Parte 3)

### Server Actions e FormData

- Uma Server Action é uma função executada no servidor a partir de um formulário; declare `"use server"` na função ou no módulo;
- passe a função ao atributo `action` do `form`, em vez de depender apenas de `onSubmit` no cliente;
- a action recebe `FormData`, que permite ler campos pelos atributos `name`, como `formData.get("username")`;
- converta e valide os valores recebidos antes de chamar qualquer API externa.

### Envio ao backend

- O cadastro usa `fetch` com `POST`, `Content-Type: application/json` e `JSON.stringify({ username, email, password })`;
- aguarde tanto a requisição quanto a conversão de resposta com `await`;
- trate falhas de rede e erros inesperados com `try...catch`, usando logs com contexto para facilitar diagnóstico;
- a URL do backend local deve ser configurável por variável de ambiente, não ficar fixa no código de produção.

### Estado de ação

- `useActionState` conecta a Server Action ao Client Component e expõe o estado retornado pela ação;
- use esse estado para mostrar mensagens de validação ou de falha ao usuário;
- callbacks/estados de ação evitam depender apenas do console e mantêm o feedback do formulário próximo da operação que o gerou.

## Próximos passos

- [ ] Criar o projeto React com Vite e TypeScript;
- [ ] Construir o mini app de filmes;
- [ ] Integrar uma API pública de filmes;
- [ ] Adicionar busca, rotas, loading e tratamento de erros;
- [ ] Documentar decisões e preparar o projeto para deploy.
