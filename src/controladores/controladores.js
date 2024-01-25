const { alunos } = require('../dados/alunos');

let idProximoAlunoCriado = 1;

const listarAlunos = (req, res) => {
    return res.json(alunos);
};

const listarAlunoPeloId = (req, res) => {

    const { id } = req.params;

    if (!id) {
        return req.status(400).json({ mensagem: "O id deve ser um número valido" })
    };

    const aluno = alunos.find((aluno) => aluno.id === Number(id));

    if (!aluno) {
        return res.status(404).json({ mensagem: "O aluno a ser excluido não foi encontrado" })
    };

    return res.status(200).json(aluno);

};

const adicionarAluno = (req, res) => {

    const { nome, sobrenome, idade, curso } = req.body

    if (!nome) {
        return res.status(400).json({ mensagem: 'o nome deve ser informado' })
    };

    if (nome.length <= 1) {
        return res.status(400).json({ mensagem: 'o nome deve conter no mínimo dois caracteres' })
    }

    if (!sobrenome) {
        return res.status(400).json({ mensagem: 'o sobrenome deve ser informado' })
    };

    if (sobrenome.length <= 1) {
        return res.status(400).json({ mensagem: 'o sobrenome deve conter no mínimo dois caracteres' })
    };

    if (!idade) {
        return res.status(400).json({ mensagem: 'a idade deve ser informada' })
    };

    if (idade < 18) {
        return res.status(400).json({ mensagem: 'o aluno tem menos de 18 anos' })
    };

    if (!curso) {
        return res.status(400).json({ mensagem: 'o curso deve ser informado' })
    };

    const cadastroDeAluno = {
        id: idProximoAlunoCriado++,
        nome,
        sobrenome,
        idade,
        curso
    };

    alunos.push(cadastroDeAluno);

    return res.status(201).json({ mensagem: "Aluno cadastrado com sucesso" });
};

const excluirAluno = (req, res) => {

    const { id } = req.params;

    if (!id) {
        return req.status(400).json({ mensagem: "O id deve ser um número valido" })
    };

    const indiceAlunoExclusao = alunos.findIndex((aluno) => aluno.id === Number(id));

    if (indiceAlunoExclusao < 0) {
        return res.status(404).json({ mensagem: "O aluno a ser excluido não foi encontrado" })
    };

    const excluirAluno = alunos.splice(indiceAlunoExclusao, 1)[0];

    return res.status(200).json(excluirAluno);
};

module.exports = {
    listarAlunos,
    listarAlunoPeloId,
    adicionarAluno,
    excluirAluno
}