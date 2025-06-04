var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");

router.post("/pontuacao", function (req, res) {
  jogoController.pontuacao(req, res);
});

router.get("/melhorPontuacao/:idUsuario", function (req, res) {
  jogoController.melhorPontuacao(req, res);
});

router.get("/top3", function (req, res) {
  jogoController.top3(req, res);
});

router.get("/chart/:idUsuario", function (req, res){

    console.log("Cheguei nas routes");
    jogoController.chart(req, res);

})

module.exports = router;
