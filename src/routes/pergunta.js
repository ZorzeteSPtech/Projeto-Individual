var express = require("express");
var router = express.Router();

var perguntaController = require("../controllers/perguntaController");

router.post("/ideia", function (req, res) {
  perguntaController.ideia(req, res);
});

module.exports = router;