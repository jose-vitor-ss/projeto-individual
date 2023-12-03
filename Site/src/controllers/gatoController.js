var gatoModel = require("../models/gatoModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);


                                    res.json({
                                        pessoaId: resultadoAutenticar[0].pessoaId,
                                        email: resultadoAutenticar[0].email,
                                        nome: resultadoAutenticar[0].nome,
                                        cpf: resultadoAutenticar[0].cpf,
                                        senha: resultadoAutenticar[0].senha
                                    });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrarGato(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    console.log("Tentando cadastrar")
    var nomeGato = req.body.nomeGatoServer;
    var idadeGato = req.body.idadeGatoServer;
    var caractP = req.body.caractPServer;
    var raca = req.body.racaServer;
    var cor = req.body.corServer;
    var possuiDoencas = req.body.doencasServer;

    var quaisDoencas = req.body.quaisDoencasServer;
    var vacinado = req.body.vacinadoServer;
    var sexoGato = req.body.sexoGatoServer;
    var esterelizado = req.body.castradoServer;
    var historiaDoGato = req.body.historiaDoGatoServer;
    var nivelAtividade = req.body.nivelAtividadeServer;
    var necessidadesEspeciais = req.body.necessidadesEspeciaisServer;
    
    var relacaoAnimais = req.body.relacaoComOutrosAnimaisServer;
    var ambientePreferido = req.body.ambientePreferidoServer;
    // // var fotoDoGato = req.body.fotoDoGatoServer;
    var numeroTelefone = req.body.telefoneResponsavelServer;
    var email = req.body.emailResponsavelServer;
    var termosCond = req.body.termosCondicoesServer;

    console.log('Cheguei aqui')
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
    // } else if (fotoDoGato == undefined) {
        // res.status(400).send("Foto do gato está undefined!");
    } else if (numeroTelefone == undefined) {
        res.status(400).send("Número de telefone está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Email está undefined!");
    } else if (termosCond == undefined) {
        res.status(400).send("Termos e condições está undefined!");
    } else {
        console.log('Erro aqui')
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        gatoModel.cadastrarGato(nomeGato, idadeGato, caractP, raca, cor, possuiDoencas, quaisDoencas, vacinado, sexoGato, esterelizado, historiaDoGato, nivelAtividade, necessidadesEspeciais, relacaoAnimais, ambientePreferido, numeroTelefone, email, termosCond)
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

function listar(req, res) {
    gatoModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    autenticar,
    cadastrarGato,
    listar
}


