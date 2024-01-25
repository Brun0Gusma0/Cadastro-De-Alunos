const express = require('express');
const { listarAlunos, listarAlunoPeloId, adicionarAluno, excluirAluno } = require('./controladores/controladores');

const rotas = express();

rotas.get("/alunos", listarAlunos);
rotas.get("/alunos/:id", listarAlunoPeloId);
rotas.post("/alunos", adicionarAluno);
rotas.delete("/alunos/:id", excluirAluno);

module.exports = rotas;