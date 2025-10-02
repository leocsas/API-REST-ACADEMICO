const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

// Membro Alunos - Importar e mapear rota
const alunosRouter = require('./routes/alunos')
app.use(alunosRouter)

// Membro Cursos - Importar e mapear rota

// Membro Funcionarios - Importar e mapear rota

// Membro Notas - Importar e mapear rota
const notasRouter = require('./routes/notas')
app.use(notasRouter)

// Membro Professores - Importar e mapear rota

app.listen(3000, () => {
console.log('Server is running on http://localhost:3000')
})