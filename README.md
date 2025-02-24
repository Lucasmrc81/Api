# My-Api

## Descrição
A API My-Api é uma aplicação para gerenciamento de contas bancárias, projetada para facilitar o registro de usuários e a criação de contas bancárias. Esta API oferece uma série de funcionalidades essenciais que permitem que desenvolvedores integrem recursos de gerenciamento financeiro em suas aplicações.

## Funcionalidades Principais

### 1. Autenticação de Usuários
- **Cadastro de Usuários**: Permite que novos usuários se cadastrem fornecendo informações pessoais como nome, CPF, data de nascimento, telefone, email, endereço, renda e senha.
- **Geração de Token**: Após o registro, a API gera um token de autenticação que pode ser usado para validar a identidade do usuário em requisições subsequentes.

### 2. Gerenciamento de Contas
- **Criação de Contas Bancárias**: Usuários aprovados podem criar contas bancárias. Cada conta é associada a um número de agência (sempre "0001") e possui um número de conta único, além de um saldo inicial (por padrão, 0).

### 3. Envio de Emails
- **Emails de Boas-Vindas**: Após o cadastro, novos usuários recebem um email de boas-vindas, informando sobre o sucesso do registro.

## Estrutura do Projeto

- **Configuração**:
  - `My-Api/config/db.js`: Configura a conexão com o banco de dados MongoDB.
  
- **Modelos**:
  - `My-Api/models/Account.js`: Define o esquema da conta bancária.
  - `My-Api/models/Transaction.js`: Define o esquema de transações (a ser implementado).
  - `My-Api/models/User.js`: Define o esquema do usuário.

- **Controladores**:
  - `My-Api/controllers/accountController.js`: Lida com a lógica de criação e gerenciamento de contas.
  - `My-Api/controllers/authController.js`: Lida com a lógica de autenticação e cadastro de usuários.
  - `My-Api/controllers/emailController.js`: Lida com o envio de emails.

- **Rotas**:
  - `My-Api/routes/accountRoutes.js`: Define as rotas relacionadas às operações bancárias.
  - `My-Api/routes/authRoutes.js`: Define as rotas relacionadas à autenticação de usuários.

- **Servidor**:
  - `My-Api/server.js`: Configura e inicia o servidor Express.

## Fluxo de Uso

### 1. Cadastro de Usuário
- O usuário envia uma requisição `POST` para `/auth/cadastrar` com suas informações pessoais.
- A API valida os dados, cria um novo usuário no banco de dados e envia um email de boas-vindas.

### 2. Criação de Conta
- Após o cadastro, o usuário pode solicitar a criação de uma conta enviando uma requisição `POST` para `/account/criar-conta` com seu `userId`.
- A API cria uma nova conta bancária associada ao `userId` fornecido, atribuindo um número de conta único.

## Tecnologias Utilizadas
- **Node.js**: Plataforma de desenvolvimento.
- **Express**: Framework para construção de APIs.
- **MongoDB**: Banco de dados NoSQL.
- **Mongoose**: Biblioteca de modelagem de dados para MongoDB.
- **Nodemailer**: Biblioteca para envio de emails.
- **dotenv**: Biblioteca para gerenciamento de variáveis de ambiente.

## Conclusão
A API My-Api é uma solução eficiente para aplicações que necessitam de funcionalidades básicas de gerenciamento de contas bancárias e autenticação de usuários. Sua estrutura modular facilita a integração e a expansão de funcionalidades conforme a necessidade do projeto.

## Licença
Este projeto está licenciado sob a licença ISC.

## Contato
Para dúvidas ou sugestões, entre em contato:
- **Email:** Lucasmrc81@gmail.com
