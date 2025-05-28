var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");

router.post("/somar", function (req, res) {

    jogoController.somar(req,res);

});

module.exports = router;