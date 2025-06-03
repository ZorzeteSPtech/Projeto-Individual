const pontuacaoModel = require("../models/jogoModel");

async function pontuacao(req, res) {
  const pontos = req.body.pontuacaoFinal;
  const idUsuario = req.body.id_usuario;

  if (!idUsuario || !pontos) {
    return res
      .status(400)
      .json({ erro: "idUsuario e pontos são obrigatórios" });
  }

  try {
    await pontuacaoModel.inserirPonto(idUsuario, pontos);
    await pontuacaoModel.melhorPontuacao(idUsuario, pontos);
    const resultado = await pontuacaoModel.contarPartida(idUsuario);
    const totalPartidas = resultado[0].totalPartidas;

    res.status(200).json({
      mensagem: "Pontuação salva com sucesso!",
      totalPartidas: totalPartidas,
    });
  } catch (erro) {
    res.status(500).json(erro);
  }
}

async function melhorPontuacao(req, res) {
  const idUsuario = req.params.id_usuario;

  if (!idUsuario) {
    return res.status(400).json({ erro: "idUsuario é obrigatório" });
  }

  pontuacaoModel
    .melhorPontuacao(idUsuario)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error.mensagem);
    });
}

function top3(req, res) {
  pontuacaoModel
    .top3()
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error.mensagem);
    });
}

function chart(req, res) {
  const id_usuario = req.params.idUsuario;

  console.log("Entrei na controller");

  if (!id_usuario) {
    return res.status(400).json({ erro: "id_usuario é obrigatório" });
  }

  pontuacaoModel
    .chart(id_usuario)
    .then((response) => {
      res.json(response);
    })

    .catch((error) => {
      console.log(error);
      res.status(500).json(error.mensage);
    });
}

module.exports = {
  pontuacao,
  melhorPontuacao,
  top3,
  chart,
};
