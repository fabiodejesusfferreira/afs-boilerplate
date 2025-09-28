# AFS Boilerplate (API Fastify TypeScript)

Um boilerplate simples e poderoso para iniciar o desenvolvimento de APIs RESTful utilizando Fastify e TypeScript.

## Visão Geral

Este projeto é um ponto de partida para a criação de APIs, com uma estrutura de pastas organizada e modular. Ele utiliza o Fastify, um framework web de alta performance para Node.js, e TypeScript para garantir um código mais seguro e manutenível. A API de exemplo gerencia um CRUD (Create, Read, Update, Delete) de gatos, demonstrando a funcionalidade básica.

## ✨ Features

-   **Framework Rápido**: Construído com [Fastify](https://www.fastify.io/), garantindo baixo overhead e alta performance.
-   **Tipagem Estática**: Desenvolvido com [TypeScript](https://www.typescriptlang.org/) para um código mais limpo e com menos bugs.
-   **Estrutura Organizada**: A arquitetura do projeto é dividida em camadas (controllers, services, repositories), facilitando a manutenção e escalabilidade.
-   **Scripts Prontos**: Scripts para iniciar em modo de desenvolvimento com watch mode, e para build de produção.
-   **CORS**: Configuração de Cross-Origin Resource Sharing (CORS) já incluída.

## 🛠️ Tecnologias Utilizadas

-   [Node.js](https://nodejs.org/)
-   [Fastify](https://www.fastify.io/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [tsx](https://github.com/esbuild-kit/tsx): Para executar arquivos TypeScript nativamente.
-   [tsup](https://tsup.egoist.dev/): Para realizar o build do projeto.

## 🚀 Começando

Siga as instruções abaixo para ter o projeto rodando em sua máquina local.

### Pré-requisitos

-   [Node.js](https://nodejs.org/) (versão 14.x ou superior)
-   [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

### Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/afs-boilerplate.git](https://github.com/seu-usuario/afs-boilerplate.git)
    cd afs-boilerplate
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Crie o arquivo de ambiente:**
    Crie um arquivo chamado `keys.env` na raiz do projeto e adicione a porta desejada:
    ```env
    PORT=8080
    ```

4.  **Inicie o servidor em modo de desenvolvimento:**
    O servidor irá reiniciar automaticamente a cada alteração nos arquivos.
    ```bash
    npm run start:watch
    ```
    O servidor estará disponível em `http://localhost:8080`.

### Scripts Disponíveis

-   `npm run dist`: Realiza o build do projeto para produção na pasta `/dist`.
-   `npm start`: Inicia o servidor em modo de produção.
-   `npm run start:watch`: Inicia o servidor em modo de desenvolvimento com watch mode.
-   `npm run start:dist`: Executa o build e inicia o servidor a partir dos arquivos compilados.

## 📂 Estrutura do Projeto

O projeto segue uma estrutura de pastas que separa as responsabilidades:

/src</br>
├── /controllers → Controladores (camada de entrada da API)</br>
├── /database → Simulação de banco de dados em memória</br>
├── /models → Interfaces e tipos do TypeScript</br>
├── /repositories → Camada de acesso aos dados</br>
├── /routes → Definição das rotas da API</br>
├── /services → Lógica de negócio da aplicação</br>
├── /utils → Funções auxiliares (ex: http-helper)</br>
├── app.ts → Configuração da instância do Fastify</br>
└── server.ts → Ponto de entrada para iniciar o servidor


##  API Endpoints

A seguir, estão detalhados os endpoints da API para o gerenciamento de gatos.

---

### **GET** `/cats`

Retorna uma lista com todos os gatos cadastrados.

-   **Status Codes:**
    -   `200 OK`: Requisição bem-sucedida. Retorna a lista de gatos.
        ```json
        [
          {
            "id": 1,
            "name": "Franjola",
            "characteristics": {
              "weight": 3,
              "eyesColor": "marrom"
            }
          },
          {
            "id": 2,
            "name": "Tom",
            "characteristics": {
              "weight": 2,
              "eyesColor": "castanho escuro"
            }
          }
        ]
        ```
    -   `204 No Content`: A requisição foi bem-sucedida, mas não há gatos para serem exibidos.

---

### **GET** `/cats/:id`

Busca e retorna um gato específico pelo seu `id`.

-   **Parâmetros:**
    -   `id` (number, obrigatório): O ID do gato.

-   **Status Codes:**
    -   `200 OK`: Requisição bem-sucedida. Retorna os dados do gato.
        ```json
        {
          "id": 1,
          "name": "Franjola",
          "characteristics": {
            "weight": 3,
            "eyesColor": "marrom"
          }
        }
        ```
    -   `204 No Content`: O gato com o `id` especificado não foi encontrado.

---

### **POST** `/cats`

Cria um novo gato no sistema.

-   **Corpo da Requisição:**
    ```json
    {
      "name": "Garfield",
      "characteristics": {
        "weight": 8,
        "eyesColor": "preto"
      }
    }
    ```

-   **Status Codes:**
    -   `201 Created`: Gato criado com sucesso.
        ```json
        {
          "message": "Successful"
        }
        ```
    -   `400 Bad Request`: O corpo da requisição é inválido ou está ausente.

---

### **PATCH** `/cats/:id`

Atualiza as características de um gato existente.

-   **Parâmetros:**
    -   `id` (number, obrigatório): O ID do gato a ser atualizado.

-   **Corpo da Requisição:**
    ```json
    {
      "weight": 9,
      "eyesColor": "preto e branco"
    }
    ```

-   **Status Codes:**
    -   `200 OK`: Gato atualizado com sucesso. Retorna os novos dados do gato.
        ```json
        {
            "id": 1,
            "name": "Franjola",
            "characteristics": {
                "weight": 9,
                "eyesColor": "preto e branco"
            }
        }
        ```
    -   `400 Bad Request`: O `id` não foi fornecido ou é inválido, ou o gato a ser modificado não foi encontrado.

---

### **DELETE** `/cats/:id`

Remove um gato do sistema pelo seu `id`.

-   **Parâmetros:**
    -   `id` (number, obrigatório): O ID do gato a ser deletado.

-   **Status Codes:**
    -   `200 OK`: Gato deletado com sucesso.
        ```json
        {
          "message": "Successfully deleted"
        }
        ```
    -   `400 Bad Request`: O `id` não foi fornecido ou é inválido.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
