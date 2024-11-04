# Projeto Node.js API para uma Empresa Hipotética

API RESTful que será utilizada para gerenciar produtos, categorias e pedidos de clientes.
 
## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB (Mongoose)
- JWT (JSON Web Tokens)
- Swagger (para documentação da API)

## Funcionalidades

- Registro e autenticação de usuários
- Gerenciamento de produtos (criação, atualização, exclusão e listagem)
- Gerenciamento de categorias
- Criação e consulta de pedidos
- Documentação da API usando Swagger

## Estrutura do Projeto

```plaintext
.
├── controllers        # Controladores para gerenciar a lógica de negócios
├── middlewares        # Middlewares para autenticação e validação
├── models             # Modelos do Mongoose para o banco de dados
├── routes             # Definição das rotas da API
├── .env               # Variáveis de ambiente
├── package.json       # Dependências e scripts do projeto
└── index.js           # Ponto de entrada da aplicação


```
## Clonagem

```
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
npm install
```
## Crie o arquivo .env

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

## Inicie o servidor

```
npm start
```
## Acesse a Api

```
localhost:5000/api-docs
```
