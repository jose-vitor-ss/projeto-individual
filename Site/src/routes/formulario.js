var express = require("express");
var router = express.Router();

var formularioController = require("../controllers/formularioController");

router.post("/cadastrarFormulario", function (req, res) {
    formularioController.cadastrarFormulario(req, res);
});

router.get("/listar", function (req, res) {
    formularioController.listar(req, res);
});

module.exports = router
