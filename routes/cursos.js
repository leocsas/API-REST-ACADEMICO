const express = require('express')
const router = express.Router()

let cursos = [
    {
        id: 1,
        nome: "Desenvolvimento Web Full Stack",
        descricao: "Curso completo para se tornar um desenvolvedor full stack, abordando front-end e back-end.",
        cargaHoraria: 400,
        preco: 2500.00
    },
    {
        id: 2,
        nome: "Introdução à Ciência de Dados",
        descricao: "Fundamentos e técnicas de análise e visualização de dados.",
        cargaHoraria: 120,
        preco: 850.00
    }
]


// Criar novo curso
router.post("/cursos", (req, res, next) => {
    const { nome, descricao, cargaHoraria, preco } = req.body

    // Validação
    if (!nome || !descricao || !cargaHoraria || !preco) {
        return res.status(400).json({ error: "Todos os campos (nome, descrição, cargaHoraria, preco) são obrigatórios." })
    }

    // Validação do Nome do Curso (evitar duplicidade)
    const cursoExistente = cursos.find(curso => curso.nome.toLowerCase() === nome.toLowerCase())
    if (cursoExistente) {
        return res.status(409).json({ error: "Curso com este nome já cadastrado!!!" })
    }


    // Cadastrar novo curso
    const novoCurso = {
        id: Date.now(),
        nome,
        descricao,
        cargaHoraria,
        preco
    }

    // Inserir esse novo cadastro
    cursos.push(novoCurso)
    res.status(201).json({ message: "Curso cadastrado com sucesso!", novoCurso })
})


// Listar todos os cursos
router.get('/cursos', (req, res, next) => {
    res.json(cursos)
})


// Buscar curso por ID
router.get('/cursos/:id', (req, res, next) => {
    const idRecebido = req.params.id
    // Note que 'idRecebido' é uma string, por isso a comparação com '==' ou a conversão implícita funciona.
    const curso = cursos.find(c => c.id == idRecebido) 
    
    if (!curso) {
        return res.status(404).json({ error: "Curso não encontrado!" })
    }
    res.json(curso)
})


// Atualizar curso por ID
router.put('/cursos/:id', (req, res, next) => {
    const idRecebido = req.params.id
    const { nome, descricao, cargaHoraria, preco } = req.body

    // Verificar se os dados foram enviados
    if (!nome || !descricao || !cargaHoraria || !preco) {
        return res.status(400).json({ error: "Todos os campos (nome, descrição, cargaHoraria, preco) são obrigatórios para a atualização." })
    }

    // Validar se o curso com aquele ID existe na lista
    const curso = cursos.find(c => c.id == idRecebido)
    if (!curso) {
        return res.status(404).json({ error: "Curso não encontrado para atualização!" })
    }

    // Atualização de dados
    curso.nome = nome
    curso.descricao = descricao
    curso.cargaHoraria = cargaHoraria
    curso.preco = preco
    
    res.json({ message: "Curso atualizado com sucesso!", cursoAtualizado: curso })
})


// Deletar curso por ID
router.delete('/cursos/:id', (req, res, next) => {
    const idRecebido = req.params.id
    const curso = cursos.find(c => c.id == idRecebido)
    
    if (!curso) {
        return res.status(404).json({ error: "Curso não encontrado para exclusão!" })
    }

    // Atualizar a lista sem o curso do ID recebido
    cursos = cursos.filter(c => c.id != idRecebido)

    res.json({ message: "Curso excluído com sucesso!" })
})

module.exports = router