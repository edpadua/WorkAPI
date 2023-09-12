# WorkAPI

# Summary

- [Sobre](#sobre)
- [Tecnologias](#tecnologias)
- [Setup](#setup)
- [Licença](#licença)
- [Contato](#contato)
 
## Sobre 

Este projeto consiste em uma API REST com endpoints para as operações GET, POST, PUT e DELETE sobre as entidades Professionals, Companies e Positions. A API foi desenvolvida utilizando Node.JS com a ferramenta Express e persistência em um banco de dados MongoDB.

## Endpoints

```bash
GET https://localhost:3000/professionals

GET https://localhost:3000/professionals/:id

POST https://localhost:3000/professionals

POST https://localhost:3000/auth/login_professional/

PUT https://localhost:3000/professionals/:id

DELETE https://localhost:3000/professionals/:id

GET https://localhost:3000/companies

GET https://localhost:3000/companies/:id

POST https://localhost:3000/companies

POST https://localhost:3000/auth/login_company/

POST https://localhost:3000/companies/:id

DELETE https://localhost:3000/companies/:id

GET https://localhost:3000/positions

GET https://localhost:3000/positions/:id

POST https://localhost:3000/positions

PUT https://localhost:3000/positions/:id

DELETE https://localhost:3000/positions/:id

```
### Tecnologias

- [NodeJS](https://nodejs.org/)
- [Express](https://expressjs.com/pt-br/)
- [MongoDB](https://cloud.mongodb.com/)


## Setup

```bash
git clone https://github.com/edpadua/WorkAPI/

cd workapi
npm i
npm run dev
```

## Licença

Distributed under the MIT License. See `LICENSE.txt` for more information.


## Contato

Eduardo de Pádua: ed.padua@gmail.com

