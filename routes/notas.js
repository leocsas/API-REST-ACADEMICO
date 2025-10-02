const express = require('express')
const router = express.Router()

let notas = [
  {
    id: 1,
    aluno: "João Silva",
    disciplina: "Matemática",
    tipo: "Prova 1",
    nota: 7.5,
    data: new Date().toISOString()
  },
  {
    id: 2,
    aluno: "Maria Oliveira",
    disciplina: "História",
    tipo: "Trabalho 1",
    nota: 8.0,
    data: new Date().toISOString()
  }
];

let idAtual = 3;

// POST

router.post('/notas', (req, res) => {
  const { aluno, disciplina, tipo, nota } = req.body;

  if (!aluno || !disciplina || !tipo || nota == null) {
    return res.status(400).json({ mensagem: 'Campos obrigatórios faltando.' });
  }

  const novaNota = {
    id: idAtual++,
    aluno,
    disciplina,
    tipo,
    nota,
    data: new Date().toISOString()
  };

  notas.push(novaNota);
  res.status(201).json(novaNota);
});

// GET
router.get('/notas', (req, res) => {
  res.json(notas);
});

// GET por ID
router.get('/notas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const nota = notas.find(n => n.id === id);

  if (!nota) return res.status(404).json({ mensagem: 'Nota não encontrada.' });

  res.json(nota);
});

// PUT pelo ID

router.put('/notas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const notaIndex = notas.findIndex(n => n.id === id);

  if (notaIndex === -1) {
    return res.status(404).json({ mensagem: 'Nota não encontrada.' });
  }

  const { aluno, disciplina, tipo, nota } = req.body;

  if (aluno) notas[notaIndex].aluno = aluno;
  if (disciplina) notas[notaIndex].disciplina = disciplina;
  if (tipo) notas[notaIndex].tipo = tipo;
  if (nota != null) notas[notaIndex].nota = nota;

  res.json(notas[notaIndex]);
});

// DELETE por ID

router.delete('/notas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const notaIndex = notas.findIndex(n => n.id === id);

  if (notaIndex === -1) {
    return res.status(404).json({ mensagem: 'Nota não encontrada.' });
  }

  const notaRemovida = notas.splice(notaIndex, 1);
  res.json({ mensagem: 'Nota removida com sucesso.', nota: notaRemovida[0] });
});

module.exports = router;