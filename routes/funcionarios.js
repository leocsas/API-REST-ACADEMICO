const express = require("express");
const router = express.Router();

let funcionarios = [
  {
    id: 1,
    nome: "Carlos Almeida",
    email: "carlos@empresa.com",
    cpf: "11111111111",
    telefone: "61990000001",
    cargo: "Gerente",
    salario: 5000.0,
  },
  {
    id: 2,
    nome: "Mariana Silva",
    email: "mariana@empresa.com",
    cpf: "22222222222",
    telefone: "61990000002",
    cargo: "Atendente",
    salario: 2500.0,
  },
];

// Criar novo funcionário
router.post("/funcionarios", (req, res, next) => {
  const { nome, cpf, email, telefone, cargo, salario } = req.body;

  // Validação
  if (!nome || !cpf || !email || !telefone || !cargo || !salario) {
    return res
      .status(400)
      .json({ error: "Todos os preenchimentos de dados são obrigatórios." });
  }

  // Validação do CPF
  const funcionario = funcionarios.find((f) => f.cpf == cpf);
  if (funcionario) {
    return res.status(409).json({ error: "CPF já cadastrado!!!" });
  }

  // Cadastrar novo funcionário
  const novoFuncionario = {
    id: Date.now(),
    nome,
    cpf,
    email,
    telefone,
    cargo,
    salario,
  };

  funcionarios.push(novoFuncionario);
  res.status(201).json({ message: "Funcionário cadastrado", novoFuncionario });
});

// Listar os funcionários
router.get("/funcionarios", (req, res, next) => {
  res.json(funcionarios);
});

// Buscar funcionário por ID
router.get("/funcionarios/:id", (req, res, next) => {
  const idRecebido = req.params.id;
  const funcionario = funcionarios.find((f) => f.id == idRecebido);
  if (!funcionario) {
    return res.status(404).json({ error: "Funcionário não encontrado!" });
  }
  res.json(funcionario);
});

// Atualizar funcionário
router.put("/funcionarios/:id", (req, res, next) => {
  const idRecebido = req.params.id;
  const { nome, email, telefone, cargo, salario } = req.body;

  // Verificar se os dados foram enviados
  if (!nome || !email || !telefone || !cargo || !salario) {
    return res
      .status(400)
      .json({ error: "Todos os preenchimentos de dados são obrigatórios." });
  }

  // Validar se o funcionário existe
  const funcionario = funcionarios.find((f) => f.id == idRecebido);
  if (!funcionario) {
    return res.status(404).json({ error: "Funcionário não encontrado!" });
  }

  // Atualizar dados
  funcionario.nome = nome;
  funcionario.email = email;
  funcionario.telefone = telefone;
  funcionario.cargo = cargo;
  funcionario.salario = salario;

  res.json({ message: "Funcionário atualizado com sucesso!" });
});

// Deletar funcionário
router.delete("/funcionarios/:id", (req, res, next) => {
  const idRecebido = req.params.id;
  const funcionario = funcionarios.find((f) => f.id == idRecebido);
  if (!funcionario) {
    return res.status(404).json({ error: "Funcionário não encontrado!" });
  }

  funcionarios = funcionarios.filter((f) => f.id != idRecebido);

  res.json({ message: "Funcionário excluído com sucesso!" });
});

module.exports = router;
