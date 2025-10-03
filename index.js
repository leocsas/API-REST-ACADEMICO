const express = require("express");
const cors = require("cors");

const app = express();
exports.app = app;
app.use(cors());
app.use(express.json());

// Membro Alunos - Importar e mapear rota
const alunosRouter = require("./routes/alunos");
app.use(alunosRouter);

// Membro Cursos - Importar e mapear rota
const cursosRouter = require("./routes/cursos");
app.use(cursosRouter);

// Membro Notas - Importar e mapear rota
const notasRouter = require("./routes/notas");
app.use(notasRouter);

// Membro Professores - Importar e mapear rota
const professoresRouter = require("./routes/professores");
app.use(professoresRouter);

// Membro Funcionários - Importar e mapear rota
const funcionariosRouter = require("./routes/funcionarios");
app.use(funcionariosRouter);


app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
