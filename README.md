## Sobre o projeto
Projeto desenvolvido com a finalidade de armazenar contatos.
<a href="https://github.com/byetevinn/my-contacts-front-end">Front-End</a> do projeto.


## Como instalar e rodar a aplicação

1- Crie o banco de dados no PostgreSQL

2- Clone o repositório em sua máquina

3- Instale todas as dependências necessárias usando o comando `yarn` ou `yarn install`

4- Crie o arquivo `.env` na raiz do projeto e configure com as suas variáveis de ambiente usando o exemplo do `.env.example`

5- Utilize o comando `yarn typeorm migration:run -d src/data-source.ts` para criar as tabaleas no banco de dados

6- Para rodar o projeto utilize o comando `yarn dev`


## Tecnologias usadas no projeto

#### Linguagens

- JAVASCRIPT
- TYPESCRIPT

#### Ambiente de Execução

- NODE.JS

#### Framework

- EXPRESS

#### ORM

- TYPEORM

#### Bibliotecas

- BCRYPT
- CLASS-TRANSFORMER
- CROSS-ENV
- DOTENV
- EXPRESS-ASYNC-ERRORS
- JEST
- JSONWEBTOKEN
- PG
- REFLECT-METADATA
- SQLITE3
- SUPERTEST
- TS-JEST
- TS-NODE-DEV
- YUP
