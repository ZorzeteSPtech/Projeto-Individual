const pontuacaoModel = require('../models/pontuacaoModel');

async function registrarPontuacao(req, res) {
    const { idUsuario, pontos } = req.body;

    if (!idUsuario || !pontos) {
        return res.status(400).json({ erro: "idUsuario e pontos são obrigatórios" });
    }

    try {
        await pontuacaoModel.inserirPonto(idUsuario, pontos);
        await pontuacaoModel.atualizarMelhorPonto(idUsuario, pontos);
        const resultado = await pontuacaoModel.contarPartida(idUsuario);
        const totalPartidas = resultado[0].totalPartidas;

        res.status(200).json({
            mensagem: "Pontuação salva com sucesso!",
            totalPartidas: totalPartidas
        });
    } catch (erro) {
        res.status(500).json(erro);
    }
}

module.exports = { 
    
    registrarPontuacao 

};
