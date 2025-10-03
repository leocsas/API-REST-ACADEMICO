## ✅ `README.md` PRONTO:

````markdown
# 📚 API-REST-ACADEMICO

Sistema de uma escola desenvolvido como API REST para gerenciamento de dados acadêmicos, permitindo controle completo de **alunos**, **cursos**, **funcionários**, **notas** e **professores**.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express.js
- JavaScript
- Nodemon (ambiente de desenvolvimento)
- Postman (testes de requisições)

---

## 📦 Instalação e Execução

1. **Clone o repositório:**

```bash
git clone https://github.com/leocsas/API-REST-ACADEMICO.git
````

2. **Acesse o diretório do projeto:**

```bash
cd API-REST-ACADEMICO
```

3. **Instale as dependências:**

```bash
npm install
```

4. **Inicie o servidor:**

```bash
npm start
```

> O servidor será iniciado em: `http://localhost:3000`
> Utilize o Postman para realizar as requisições aos endpoints da API.

---

## 📁 Estrutura da API (CRUDs)

A API possui 5 entidades principais, cada uma com rotas completas de **Create, Read, Update e Delete (CRUD)**, utilizando métodos HTTP adequados.

### 1. 🧑‍🎓 Alunos

* **Campos:** `id`, `nome`, `email`, `cpf`, `telefone`, `nascimento`
* **Rota base:** `/alunos`

### 2. 📘 Cursos

* **Campos:** `id`, `nome`, `descricao`, `cargaHoraria`, `preco`
* **Rota base:** `/cursos`

### 3. 👩‍💼 Funcionários

* **Campos:** `id`, `nome`, `email`, `cpf`, `telefone`, `cargo`, `salario`
* **Rota base:** `/funcionarios`

### 4. 📝 Notas

* **Campos:** `id`, `aluno`, `disciplina`, `tipo`, `nota`
* **Rota base:** `/notas`

### 5. 👨‍🏫 Professores

* **Campos:** `id`, `nome`, `email`, `cpf`, `curso`, `disciplina`
* **Rota base:** `/professores`

---

## 🔁 Exemplos de Endpoints

Cada entidade possui as seguintes rotas:

* `GET /entidade` – Lista todos os registros
* `GET /entidade/:id` – Retorna um registro específico
* `POST /entidade` – Cria um novo registro
* `PUT /entidade/:id` – Atualiza um registro existente
* `DELETE /entidade/:id` – Remove um registro

**Exemplo com alunos:**

* `GET /alunos`
* `POST /alunos`
* `PUT /alunos/:id`
* `DELETE /alunos/:id`

(Seguindo o mesmo padrão para cursos, funcionários, notas e professores)

---

## 📮 Collection do Postman

O projeto inclui 5 **collection Postman** com todas as rotas implementadas.

* Caminho dos arquivos:

  ```
  /documentacao/API-REST-ACADEMICO-ALUNOS.postman_collection.json
  /documentacao/API-REST-ACADEMICO-CURSOS.postman_collection.json
  /documentacao/API-REST-ACADEMICO-FUNCIONARIOS.postman_collection.json
  /documentacao/API-REST-ACADEMICO-NOTAS.postman_collection.json
  /documentacao/API-REST-ACADEMICO-PROFESSORES.postman_collection.json
  ```
* Para importar no Postman:

  * Vá em *File > Import* e selecione o arquivo `.json`.

---

## 👨‍👩‍👧‍👦 Integrantes do Grupo

| Nome Completo                  | GitHub                                       | Contribuição Principal                               |
| ------------------------------ | -------------------------------------------- | --------------------------------------------         |
| Alexandre Pereira de Sousa     | [@aleepsousa](https://github.com/aleepsousa) | CRUD de funcionários, testes no Postman              |
| Leonardo C. de Sant'Ana Soares | [@leocsas](https://github.com/leocsas)       | Estrutura inicial do projeto, CRUD de alunos e notas |
| Gabriel Henrique Freitas       | [@gfreitaz08](https://github.com/gfreitaz08) | CRUD de cursos                                       |
| Geovanna Maria Alves de Sousa  | [@n1ninh4](https://github.com/n1ninh4)       | CRUD de professores                                  |

---

## 📂 Organização no GitHub

O repositório conta com:

* **Issues detalhadas** para cada etapa:

  * Configuração inicial do projeto
  * Implementação dos 5 CRUDs
  * Criação da Collection no Postman
  * Documentação
* **Commits organizados e colaborativos**
* **Branch principal (`main`) atualizada**

---

## 🔗 Repositório

📌 Link: [https://github.com/leocsas/API-REST-ACADEMICO](https://github.com/leocsas/API-REST-ACADEMICO)

---

## 📅 Informações de Entrega

* **Data limite:** 03/10
* **Forma de entrega:** Link via Google Classroom
* **Membros:** Informados acima

---

## ✅ Status

✔️ Projeto finalizado e pronto para entrega!
