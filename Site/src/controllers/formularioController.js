var formularioModel = require("../models/formularioModel");

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

function cadastrarFormulario(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    console.log("Tentando cadastrar")

    var nomeCompleto = req.body.nomeCompletoServer;
    var cpf = req.body.cpfServer;
    var profissao = req.body.profissaoServer;
    var jaTemGato = req.body.jaTemGatoServer;
    var endereco = req.body.enderecoServer;
    var telefone = req.body.telefoneServer;

    var idade = req.body.idadeServer;
    var bairro = req.body.bairroServer;
    var cep = req.body.cepServer;
    var numeroAdultos = req.body.numeroAdultosServer;
    var numeroCriancas = req.body.numeroCriancasServer;
    var porqueAdotar = req.body.porqueAdotarServer;
    var moraEm = req.body.moraEmServer;
    
    var seCasaAlugada = req.body.seCasaAlugadaServer;
    var teveGatos = req.body.teveGatosServer;
    var seJaTeve = req.body.seJaTeveServer;
    var asPessoasConcordam = req.body.asPessoasConcordamServer;
    var alguemTemAlergia = req.body.alguemTemAlergiaServer;

    var porqueDevolveria = req.body.porqueDevolveriaServer;
    var responsabilidade = req.body.responsabilidadeServer;
    var tireSuasDuvidas = req.body.tireSuasDuvidasServer;

    console.log('Cheguei aqui')
    // Faça as validações dos valores
    if (nomeCompleto == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (cpf == undefined) {
        res.status(400).send("cpf está undefined!");
    } else if (profissao == undefined) {
        res.status(400).send("profissao está undefined!");
    } else if (jaTemGato == undefined) {
        res.status(400).send("jaTemGato está undefined!");
    } else if (endereco == undefined) {
        res.status(400).send("enderecoestá undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("telefone está undefined!");
    } else if (idade == undefined) {
        res.status(400).send("idade está undefined!");
    } else if (bairro == undefined) {
        res.status(400).send("bairro está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("cep está undefined!");
    } else if (numeroAdultos == undefined) {
        res.status(400).send("numeroAdultos está undefined!");
    } else if (numeroCriancas == undefined) {
        res.status(400).send("numeroCriancas está undefined!");
    } else if (porqueAdotar == undefined) {
        res.status(400).send("porqueAdotar está undefined!");
    } else if (moraEm == undefined) {
        res.status(400).send("moraEm está undefined!");
    } else if (seCasaAlugada == undefined) {
        res.status(400).send("seCasaAlugada está undefined!");
    } else if (teveGatos == undefined) {
        res.status(400).send("teveGatos está undefined!");
    } else if (seJaTeve == undefined) {
        res.status(400).send("seJaTeve está undefined!");
    } else if (asPessoasConcordam == undefined) {
        res.status(400).send("asPessoasConcordam está undefined!");
    } else if (alguemTemAlergia == undefined) {
        res.status(400).send("alguemTemAlergia está undefined!");
    } else if (porqueDevolveria == undefined) {
        res.status(400).send("Termos e condições está undefined!");
    } else if (responsabilidade == undefined) {
        res.status(400).send("responsabilidade está undefined!");
    } else if (tireSuasDuvidas == undefined) {
        res.status(400).send("tireSuasDuvidas está undefined!");
    } else {
        console.log('Erro aqui')
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        formularioModel.cadastrarFormulario(nomeCompleto, cpf, profissao, jaTemGato, endereco, telefone, idade, bairro, cep, numeroAdultos, numeroCriancas, porqueAdotar, moraEm, seCasaAlugada, teveGatos, seJaTeve, asPessoasConcordam, alguemTemAlergia, porqueDevolveria, responsabilidade, tireSuasDuvidas)
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

module.exports = {
    autenticar,
    cadastrarFormulario
}


