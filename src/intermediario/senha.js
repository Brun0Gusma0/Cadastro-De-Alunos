const validacao = (req, res, next) => {

    const { senha } = req.query;

    if (senha !== "cubos123") {
        return res.status(401).json({ mensagem: 'senha incorreta' })
    };


    next();
};

module.exports = validacao;