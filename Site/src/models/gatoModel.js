var database = require("../database/config");

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT pessoaId, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarGato(nomeGato, idadeGato, caractP, raca, cor, possuiDoencas, quaisDoencas, vacinado, sexoGato, esterelizado, historiaDoGato, nivelAtividade, necessidadesEspeciais, relacaoAnimais, ambientePreferido, numeroTelefone, email, termosCond) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeGato, idadeGato, caractP, raca, cor, possuiDoencas, quaisDoencas, vacinado, sexoGato, esterelizado, historiaDoGato, nivelAtividade, necessidadesEspeciais, relacaoAnimais, ambientePreferido, numeroTelefone, email, termosCond);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO formularioAdocao (nomeGato, idadeGato, caractP, raca, cor, possuiDoencas, quaisDoencas, vacinado, sexoGato, esterelizado, historiaDoGato, nivelAtividade, necessidadesEspeciais, relacaoAnimais, ambientePreferido, numeroTelefone, email, termosCond) VALUES ('${nomeGato}', '${idadeGato}', '${caractP}', '${raca}', '${cor}', '${possuiDoencas}', '${quaisDoencas}', '${vacinado}', '${sexoGato}', '${esterelizado}', '${historiaDoGato}', '${nivelAtividade}', '${necessidadesEspeciais}', '${relacaoAnimais}', '${ambientePreferido}', '${numeroTelefone}', '${email}', '${termosCond}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT nomeGato, caractP from formularioAdocao;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    autenticar,
    cadastrarGato,
    listar
}


