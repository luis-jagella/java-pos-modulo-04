# Engenharia de Software Java Pós — Módulo 04

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

## Próximos passos

- [ ] Criar o projeto React com Vite e TypeScript;
- [ ] Construir o mini app de filmes;
- [ ] Integrar uma API pública de filmes;
- [ ] Adicionar busca, rotas, loading e tratamento de erros;
- [ ] Documentar decisões e preparar o projeto para deploy.
