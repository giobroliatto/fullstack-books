<div align="center">

<img src="frontend/src/assets/logo.svg" width="72" alt="Logo do FullStack Books" />

# FullStack Books

**Livraria online com front-end em React e API em Node.js para buscar livros e gerenciar favoritos.**

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![styled-components](https://img.shields.io/badge/styled--components-DB7093?logo=styledcomponents&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=reactrouter&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)

</div>

[English](README.md) · **Português**

> [!NOTE]
> Projeto feito estudando com os cursos de React e Node.js da [Alura](https://www.alura.com.br/). O objetivo era praticar o fluxo completo: componentes React, uma API em Express e a integração entre os dois. A interface está em inglês.

![Página inicial do FullStack Books](docs/home.png)

---

## Sobre

A página inicial tem uma busca de livros e uma vitrine de lançamentos. Clicando num livro do resultado da busca, ele vai para os favoritos, e a página **Favorites** lista os favoritos e permite removê-los. O front-end lê e grava tudo por uma API em Express, que guarda os dados em arquivos JSON.

## Funcionalidades

- **Busca de livros** filtrada pelo nome.
- **Adicionar e remover favoritos,** com a lista guardada no servidor.
- **Duas páginas** (Home e Favorites) com React Router.
- **API REST completa de livros** (listar, buscar, criar, editar e remover), pronta para um painel administrativo.

## Destaques técnicos

- **API em camadas:** rotas, controllers e services separados, com validação de ID e status HTTP adequados (`201` na criação, `422` para ID inválido, `500` em caso de falha).
- **Front-end componentizado** e estilizado com styled-components, com estilo global via `createGlobalStyle`.
- **Camada de serviços no front:** as chamadas à API ficam isoladas em `services/`, com instâncias do Axios, separadas dos componentes.
- **Persistência em arquivo:** a API lê e grava `books.json` e `favorites.json` com `fs`, mantendo o foco na camada HTTP sem precisar de banco de dados.

## Stack

| Camada | Tecnologias |
|---|---|
| Front-end | React 18, React Router, styled-components, Axios (Create React App) |
| Back-end | Node.js, Express, CORS |
| Persistência | Arquivos JSON |

## Rotas da API

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/books` | Lista os livros |
| `GET` | `/books/:id` | Um livro |
| `POST` | `/books` | Cria um livro |
| `PATCH` | `/books/:id` | Atualiza um livro |
| `DELETE` | `/books/:id` | Remove um livro |
| `GET` | `/favorites` | Lista os favoritos |
| `POST` | `/favorites/:id` | Adiciona um livro aos favoritos |
| `DELETE` | `/favorites/:id` | Remove um livro dos favoritos |

## Rodando localmente

Pré-requisitos: Node.js 18+.

```bash
git clone https://github.com/giobroliatto/fullstack-books.git
cd fullstack-books

# API (http://localhost:8000)
cd backend
npm install
npm run dev

# Front-end (http://localhost:3000), em outro terminal
cd frontend
npm install
npm start
```

## Estrutura

```
backend/
├── app.js           # Express, CORS e rotas
├── routes/          # /books e /favorites
├── controllers/     # Validação e respostas
├── services/        # Leitura e escrita dos arquivos JSON
├── books.json
└── favorites.json
frontend/src/
├── components/      # Header, Search, LastReleases, RecommendationCard...
├── routes/          # Páginas Home e Favorites
└── services/        # Chamadas à API com Axios
```

---

## Autor

Feito por **Giovani Broliatto**.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-giobroliatto-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/giobroliatto/)
