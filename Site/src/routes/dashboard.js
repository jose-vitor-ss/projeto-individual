var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/buscarDadosCoresGatos", function (req, res){
    dashboardController.buscarDadosCoresGatos(req, res);
})

router.get("/buscarCaractP", function (req, res){
    dashboardController.buscarCaractP(req, res);
});

module.exports = router

