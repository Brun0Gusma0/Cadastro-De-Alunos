const express = require('express');
const rotas = require('./rotas');
const validacao = require('./intermediario/senha');

const app = express();

app.use(express.json());

app.use(validacao);

app.use(rotas);

app.listen(3000);