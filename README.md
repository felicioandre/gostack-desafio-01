# Desafio GoStack #1

Para rodar o projeto do desafio na sua máquina, faça o passo a passo a seguir:

### 1. Clone o repositório
    git clone https://github.com/felicioandre/gostack-desafio-01

### 2. Instale as dependências
    yarn install
    
### 3. Execute o projeto
    yarn start
 
Para saber o conteúdo do desafio proposto, acesse esse [LINK](https://github.com/Rocketseat/bootcamp-gostack-desafio-01).

Você vai precisar de algum programa para rodar as rotas disponíveis. Instale o Insomnia ou o Postman.

### Rotas disponíveis:

|Rota |  Método| Descrição | Corpo da requisição
|--|--|--| --| 
|http://localhost:3003/projects|GET | Lista todos os projetos| --
|http://localhost:3003/projects|POST| Cria um novo projeto| [Anexo 1](#anexo-1)
|http://localhost:3003/projects/:id/tasks|POST| Cria uma nova tarefa para um projeto| [Anexo 2](#anexo-2)
|http://localhost:3003/projects/:id|PUT|  Atualiza o título de um projeto| [Anexo 3](#anexo-3)
|http://localhost:3003/projects/:id|DELETE| Deleta um projeto| --

### Anexo 1
```js
// POST http://localhost:3003/projects
{
	"id": "1",
	"title": "Estudar"
}
```

### Anexo 2
```js
// POST http://localhost:3003/projects/1/tasks
{
	"title": "Pegar lápis e caderno"
}
```

### Anexo 3
```js
// PUT http://localhost:3003/projects/1
 {
	"title": "Trabalhar"
}
```
