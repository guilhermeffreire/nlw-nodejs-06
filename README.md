# NLW Valoriza

# Projeto backend com Node.js criado durante o evento NLW-6 da [Rocketseat](https://rocketseat.com.br/).

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme)

## Regras
-   Cadastro de usuário
   
    [ X ]   Não é permitido cadastrar mais de um usuário com o mesmo e-mail
   
    [ X ]   Não é permitido cadastrar usuário sem e-mail

- Cadastro de Tag

    [ X ]   Não é permitido cadastrar mais de uma tag com o mesmo nome com o mesmo nome

    [ X ]   Não é permitido cadastrar tag sem nome

    [ X ]   Não é permitido o cadastro de usuários que não sejam adminitradores

- Cadastro de elogios

    [ X ]   Não é permitido um usuário cadastrar um elogio para si 

    [ X ]   Não é permitido cadastrar elogios para usuários invalidos 

    [ X ]   O usuário precisa estar autenticado na aplicação

## 🚀 Como executar

- Clone o repositório
- Rode `yarn` para baixar as dependências
- Rode `yarn typeorm migration:run` para criar as tabelas do banco de dados.
- Rode o `yarn dev` para iniciar a aplicação.

A aplicação estará disponível em `http://localhost:3031`


