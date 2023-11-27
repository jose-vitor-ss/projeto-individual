var gatoModel = require("../models/gatoModel");

function cadastrarGato(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    
    var nomeGato = req.body.nomeGatoServer;
    var idadeGato = req.body.idadeGatoServer;
    var caractP = req.body.caractPServer;
    var raca = req.body.racaServer;
    var cor = req.body.corServer;
    var possuiDoencas = req.body.possuiDoencasServer;

    var quaisDoencas = req.body.quaisDoencasServer;
    var vacinado = req.body.vacinadoServer;
    var sexoGato = req.body.sexoGatoServer;
    var esterelizado = req.body.esterelizadoServer;
    var historiaDoGato = req.body.historiaDoGatoServer;
    var nivelAtividade = req.body.nivelAtividadeServer;
    var necessidadesEspeciais = req.body.necessidadesEspeciaisServer;
    
    var relacaoAnimais = req.body.relacaoAnimaisServer;
    var ambientePreferido = req.body.ambientePreferidoServer;
    var fotoDoGato = req.body.fotoDoGatoServer;
    var numeroTelefone = req.body.numeroTelefoneServer;
    var email = req.body.emailServer;
    var termosCond = req.body.termosCondServer;

    // Faça as validações dos valores
    if (nomeGato == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (idadeGato == undefined) {
        res.status(400).send("Idade do gato está undefined!");
    } else if (caractP == undefined) {
        res.status(400).send("Característica principal está undefined!");
    } else if (raca == undefined) {
        res.status(400).send("Raça está undefined!");
    } else if (cor == undefined) {
        res.status(400).send("Cor está undefined!");
    } else if (possuiDoencas == undefined) {
        res.status(400).send("Se possui doenças está undefined!");
    } else if (quaisDoencas == undefined) {
        res.status(400).send("Se tiver, quais doenças está undefined!");
    } else if (vacinado == undefined) {
        res.status(400).send("Vacinado está undefined!");
    } else if (sexoGato == undefined) {
        res.status(400).send("Sexo está undefined!");
    } else if (esterelizado == undefined) {
        res.status(400).send("Se esterelizado está undefined!");
    } else if (historiaDoGato == undefined) {
        res.status(400).send("História do gato está undefined!");
    } else if (nivelAtividade == undefined) {
        res.status(400).send("Nivel de atividade está undefined!");
    } else if (necessidadesEspeciais == undefined) {
        res.status(400).send("Necessidades especiais está undefined!");
    } else if (relacaoAnimais == undefined) {
        res.status(400).send("Relação com outros animais está undefined!");
    } else if (ambientePreferido == undefined) {
        res.status(400).send("Ambiente preferido está undefined!");
    } else if (fotoDoGato == undefined) {
        res.status(400).send("Foto do gato está undefined!");
    } else if (numeroTelefone == undefined) {
        res.status(400).send("Número de telefone está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Email está undefined!");
    } else if (termosCond == undefined) {
        res.status(400).send("Termos e condições está undefined!");
    } else {
    
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        gatoModel.cadastrarGato(nomeGato, idadeGato, caractP, raca, cor, possuiDoencas, quaisDoencas, vacinado, sexoGato, esterelizado, historiaDoGato, nivelAtividade, necessidadesEspeciais, relacaoAnimais, ambientePreferido, fotoDoGato, numeroTelefone, email, termosCond)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

// function listar(req, res) {
//     gatoModel.listar().then(function (resultado) {
//         if (resultado.length > 0) {
//             res.status(200).json(resultado);
//         } else {
//             res.status(204).send("Nenhum resultado encontrado!")
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     });
// }

module.exports = {
    // listar,
    cadastrarGato
}


