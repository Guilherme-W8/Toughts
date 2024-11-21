# Thoughts - Compartilhando Pensamentos

Um projeto desenvolvido para praticar conceitos de desenvolvimento web com **Node.js**, **Express**, **MySQL** e **Handlebars**. A aplicação permite aos usuários criar, visualizar, atualizar e excluir seus pensamentos de maneira simples e eficiente.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no backend.
- **Express**: Framework para construção de APIs e servidores web.
- **MySQL**: Banco de dados relacional para armazenar os dados dos pensamentos.
- **Handlebars**: Template engine para renderizar páginas dinâmicas.
- **Sequelize (ou Prisma, dependendo da escolha)**: ORM para interagir com o MySQL.

## Funcionalidades

- **Cadastro de Pensamentos**: Usuários podem adicionar seus próprios pensamentos na aplicação.
- **Visualização de Pensamentos**: Pensamentos armazenados são exibidos na interface.
- **Edição de Pensamentos**: É possível editar um pensamento já cadastrado.
- **Exclusão de Pensamentos**: Usuários podem excluir pensamentos da base de dados.

## Como Rodar o Projeto Localmente

1. Acesse o diretório do projeto:

    ```bash
    cd Toughts
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Crie o banco de dados no MySQL:

    ```sql
    CREATE DATABASE thoughts;
    ```

4. Configure as variáveis de ambiente (exemplo no `.env`):

    ```makefile
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=sua-senha
    DB_NAME=thoughts
    ```

5. Execute o projeto:

    ```bash
    npm start
    ```

6. Acesse a aplicação no navegador, geralmente em `http://localhost:3000`.

## Estrutura do Projeto

```bash
Toughts/
├── src/
│   ├── controllers/     # Controladores para manipulação de rotas e dados
│   ├── models/          # Modelos de banco de dados
│   ├── routes/          # Definição das rotas
│   ├── views/           # Templates Handlebars
│   └── config/          # Configurações gerais do projeto
├── public/              # Arquivos estáticos (CSS, imagens, JS)
├── .env                 # Arquivo de configuração de variáveis de ambiente
├── app.js               # Arquivo principal do servidor
└── package.json         # Dependências e scripts do projeto
```

## Como Contribuir

1. Faça um fork deste repositório.

2. Crie uma branch para a sua feature:

    ```bash
    git checkout -b feature/nome-da-feature
    ```

3. Faça commit das suas alterações:

    ```bash
    git commit -am 'Adiciona nova feature'
    ```

4. Faça push para a branch:

    ```bash
    git push origin feature/nome-da-feature
    ```

5. Abra um pull request.

## Licença

Este projeto está sob a [Licença MIT](https://opensource.org/licenses/MIT).


Feito com ❤️ por Guilherme Correia!