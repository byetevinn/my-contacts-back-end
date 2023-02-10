# Sobre o projeto
Projeto desenvolvido com a finalidade de armazenar contatos.
<a href="https://github.com/byetevinn/my-contacts-front-end">Front-End</a> do projeto.


# Como instalar e rodar a aplicação

1- Crie o banco de dados no PostgreSQL

2- Clone o repositório em sua máquina

3- Instale todas as dependências necessárias usando o comando `yarn` ou `yarn install`

4- Crie o arquivo `.env` na raiz do projeto e configure com as suas variáveis de ambiente usando o exemplo do `.env.example`

5- Utilize o comando `yarn typeorm migration:run -d src/data-source.ts` para criar as tabaleas no banco de dados

6- Para rodar o projeto utilize o comando `yarn dev`

OBS: Caso ocorra o seguinte erro `Error: listen EADDRINUSE: address already in use :::3000` ao rodar o projeto, mude o endereço da porta do servidor `(SERVER_PORT)` no arquivo `.env` para outro valor


# Tecnologias usadas no projeto

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


# Documentação

## Endpoints

<a href="#-clientes-">Clientes</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="#-login-">Login</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="#-contatos-">Contatos</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<h2 align ='center'> Clientes </h2>

Essa rota não requer autenticação

#

`POST /clients -  REQUISIÇÃO`

```JSON
{
	"email": "andrade@gmail.com",
	"password": "Andrade1!",
	"fullName": "Andrade Padilha",
	"phone": "41998745612"
}
```

`POST /clients -  RESPOSTA - STATUS 201`

```JSON
{
	"email": "andrade@gmail.com",
	"fullName": "Andrade Padilha",
	"phone": "41998745612",
	"id": "b80883d4-8ee5-4501-b196-750952a21e47",
	"isActive": true,
	"createdAt": "2023-02-08T15:31:16.602Z",
	"updatedAt": "2023-02-08T15:31:16.602Z"
}
```

#

Essas rotas requerem autenticação

`GET /clients -  REQUISIÇÃO`

```
Não requer corpo para fazer a requisição
```

`GET /clients -  RESPOSTA - STATUS 200`

```JSON
{
	"id": "b80883d4-8ee5-4501-b196-750952a21e47",
	"email": "andrade@gmail.com",
	"fullName": "Andrade Padilha",
	"phone": "41998745612",
	"isActive": true,
	"createdAt": "2023-02-08T15:31:16.602Z",
	"updatedAt": "2023-02-08T15:31:16.602Z",
	"contacts": []
}
```

#

`PATCH /clients -  REQUISIÇÃO`

```JSON
{
	"email": "andradaum@gmail.com"
}
```

`PATCH /clients -  RESPOSTA - STATUS 200`

```JSON
{
	"id": "b80883d4-8ee5-4501-b196-750952a21e47",
	"email": "andradaum@gmail.com",
	"fullName": "Andrade Padilha",
	"phone": "41998745612",
	"isActive": true,
	"createdAt": "2023-02-08T15:31:16.602Z",
	"updatedAt": "2023-02-08T15:48:15.995Z"
}
```

#

`DELETE /clients -  REQUISIÇÃO`

```
Não requer corpo para fazer a requisição
```

`DELETE /clients -  RESPOSTA - STATUS 204`

```
Não contém corpo de resposta
```

#

<h2 align ='center'> Login </h2>

Essa rota não requer autenticação

`POST /login -  REQUISIÇÃO`

```JSON
{
	"email": "andrade@gmail.com",
	"password": "Andrade1!"
}
```

`POST /login -  RESPOSTA - STATUS 200`

```JSON
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuZHJhZGVAZ21haWwuY29tIiwiaWF0IjoxNjc1ODcxMjk1LCJleHAiOjE2NzU5NTc2OTUsInN1YiI6ImI4MDg4M2Q0LThlZTUtNDUwMS1iMTk2LTc1MDk1MmEyMWU0NyJ9.0s6ywow2xN6XMDQCLUtMJdSDYeXnfo2WGvY5wF8dQT4"
}
```

#

<h2 align ='center'> Contatos </h2>

Essas rotas requerem autenticação

`POST /contacts -  REQUISIÇÃO`

```JSON
{
	"email": "eric@gmail.com",
	"fullName": "Eric Padilha",
	"phone": "41998234578"
}
```

`POST /contacts -  RESPOSTA - STATUS 201`

```JSON
{
	"email": "eric@gmail.com",
	"fullName": "Eric Padilha",
	"phone": "41998234578",
	"client": {
		"id": "b80883d4-8ee5-4501-b196-750952a21e47"
	},
	"id": "d5003114-6145-459d-953c-bf5045e4e86b",
	"createdAt": "2023-02-08T15:58:07.046Z",
	"updatedAt": "2023-02-08T15:58:07.046Z"
}
```

#

`GET /contacts -  REQUISIÇÃO`

```
Não requer corpo para fazer a requisição
```

`GET /contacts -  RESPOSTA - STATUS 200`

```JSON
[
	{
		"id": "d5003114-6145-459d-953c-bf5045e4e86b",
		"email": "eric@gmail.com",
		"fullName": "Eric Padilha",
		"phone": "41998234578",
		"createdAt": "2023-02-08T15:58:07.046Z",
		"updatedAt": "2023-02-08T15:58:07.046Z"
	}
]
```

#

`PATCH /contacts/:id -  REQUISIÇÃO`

```JSON
{
  	"email": "ericzão@gmail.com",
	"fullName": "Eric Silva"
}
```

`PATCH /contacts/:id -  RESPOSTA - STATUS 200`

```JSON
{
	"id": "d5003114-6145-459d-953c-bf5045e4e86b",
	"email": "ericzão@gmail.com",
	"fullName": "Eric Silva",
	"phone": "41998234578",
	"createdAt": "2023-02-08T15:58:07.046Z",
	"updatedAt": "2023-02-08T16:02:40.712Z"
}
```

#

`DELETE /contacts/:id -  REQUISIÇÃO`

```
Não requer corpo para fazer a requisição
```

`DELETE /contacts/:id -  RESPOSTA - STATUS 204`

```
Não contém corpo de resposta
```


---

<p align ='center'> Copyright <a href="https://github.com/byetevinn">Stevan Padilha</a> 2023 </p>
