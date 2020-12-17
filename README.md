<h1 align="center">Gestão Escolar</h1>

## Descrição do Projeto
<p align="center">Uma API desenvolvida com o intuito de praticar conceitos aprendidos utilizando NODE, Express, MySql e Knex. O intuito da aplicação é gerenciar uma escola que possui turmas, professores e alunos. A API permite criar, buscar, listar, atualizar e deletar cada uma das entidades slém disso permitir matricular alunos nas turmas e adicionar professores como responsáveis das turmas.</p>

## Requisitos
$ Deve rodar um servidor mysql e deve ter a versão mais recente do NODE instalada, hoje 17/12/2020 a versão 14.15.2.

## Instalação
# Clone este repositório
$ git clone <https://github.com/MatheusOliveira2/gestao-escola-api.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd gestao-escola-api

# Instale as dependências
$ yarn install

# Crie um arquivo .env com os seguinte campos
$ DB_USER
$ DB_PASSWD
$ DB_NAME

# Execute as migrations
$ yarn knex migrate:latest

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# O servidor inciará na porta:3001 - acesse <http://localhost:3001> 

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Express]
- [Knex]
- [Jest]
