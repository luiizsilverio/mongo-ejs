# EJS-MONGO

## Conteúdo
* [Sobre a Aplicação](#sobre-a-aplicação)
* [Tecnologias](#hammer_and_wrench-tecnologias)
* [Screenshots](#camera_flash-screenshots)
* [Iniciando a Aplicação](#car-Iniciando-a-aplicação)
* [Contato](#email-contato)

## Sobre a aplicação
Aplicação Web desenvolvida em __Node.js__ com __EJS__ e __MongoDB__.<br />
Permite listar, cadastrar e alterar usuários.<br />
Desenvolvido baseado nos vídeos da playlist [Sistema Web com Node e MongoDB](https://www.youtube.com/playlist?list=PLLBtSf_66PxqkVsbywbbnC6ID_0UXaN7M), do canal do Diego Porcellis no Youtube. <br />
O primeiro vídeo tem problema de áudio, mas os demais estão com áudio normal. <br />
É uma aplicação back-end raiz, que renderiza as páginas do lado do servidor, utilizando template engine. <br />
Melhorei a organização do programa por conta própria, separando as rotas e controller em arquivos e pastas separados, além de melhorar a estilização das páginas.<br />

### Rotas da aplicação

| Método | Caminho da Rota | Descrição da Rota |
|---|---|---|
| GET  | http://localhost:3000/users | Retorna a view com a lista de usuários |
| POST | http://localhost:3000/users | Inclui novo usuário |
| GET  | http://localhost:3000/users/edit/:id | Retorna a view com o cadastro do usuário |
| POST | http://localhost:3000/users/edit/:id | Altera o usuário |
| GET  | http://localhost:3000/users/del/:id | Exclui o usuário |
|

## :hammer_and_wrench: Tecnologias
* __NodeJS__
* Banco de dados __MongoDB__
* Template engine __EJS__
* __Multer__ para upload de imagens

## :camera_flash: Screenshots
![](https://github.com/luiizsilverio/mongo-ejs/blob/main/assets/ejs-mongo.gif)

## :car: Iniciando a aplicação
O banco de dados MongoDB precisa estar instalado localmente.<br />
```bash
# Baixe o repositório com git clone e entre na pasta do projeto.
$ git clone https://github.com/luiizsilverio/mongo-ejs.git

# Instale as dependências
$ npm install

# Para iniciar a aplicação
$ npm run dev
```

## :email: Contato

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luiz-s-de-oliveira-6b6067210)
[![E-mail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:luiiz.silverio@gmail.com)
