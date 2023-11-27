var express = require("express");
var router = express.Router();

var gatoController = require("../controllers/gatoController");

router.post("/cadastrarGato", function (req, res) {
    gatoController.cadastrarGato(req, res);
})

// router.get("/listar", function (req, res) {
//     gatoController.listar(req, res);
// });

module.export = router
