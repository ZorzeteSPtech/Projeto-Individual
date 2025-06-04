const pontuacaoModel = require("../models/jogoModel");

function pontuacao(req, res) {
  const pontos = req.body.ponto;
  const id_usuario = req.body.idUsuario;

  if (!id_usuario || pontos < 0) {
    return res
      .status(400)
      .json({ erro: "id_usuario e pontos são obrigatórios" });
  }

  try {
    pontuacaoModel.inserirPonto(id_usuario, pontos);

    res.status(200).json({
      mensagem: "Pontuação salva com sucesso!",
    });
  } catch (erro) {
    res.status(500).json(erro);
  }
}

function melhorPontuacao(req, res) {
  const id_usuario = req.params.idUsuario;

  if (!id_usuario) {
    return res.status(400).json({ erro: "id_usuario é obrigatório" });
  }

  pontuacaoModel
    .melhorPontuacao(id_usuario)
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
