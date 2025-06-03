const perguntaModel = require("../models/perguntaModel");

function ideia(req, res) {
  const { texto, idUsuario } = req.body;

  console.log("Cheguei em");
  console.log("Texto na controller" + texto)
  console.log("Id na controller" + idUsuario);


  if (!texto || !idUsuario) {
    return res.status(400).send("O conteúdo da pergunta está vazia!");
  }

  perguntaModel
    .inserirPergunta(texto, idUsuario)
    .then((response) => {
      res.status(200).json(response);
    })

    .catch((erro) => {
      console.error("Erro ao inserir perguntas: ", erro.sqlMessage || erro);
      res.status(500).json({ erro: erro.sqlMessage || erro });
    });
}

module.exports = {
  ideia,
};
