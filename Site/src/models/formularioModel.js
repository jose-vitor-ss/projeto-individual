var database = require("../database/config");

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT pessoaId, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarFormulario(nomeCompleto, cpf, profissao, jaTemGato, endereco, telefone, idade, bairro, cep, numeroAdultos, numeroCriancas, porqueAdotar, moraEm, seCasaAlugada, teveGatos, seJaTeve, asPessoasConcordam, alguemTemAlergia, porqueDevolveria, responsabilidade, tireSuasDuvidas) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeCompleto, cpf, profissao, jaTemGato, endereco, telefone, idade, bairro, cep, numeroAdultos, numeroCriancas, porqueAdotar, moraEm, seCasaAlugada, teveGatos, seJaTeve, asPessoasConcordam, alguemTemAlergia, porqueDevolveria, responsabilidade, tireSuasDuvidas);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO formularioAdotar (nomeCompleto, cpf, profissao, jaTemGato, endereco, telefone, idade, bairro, cep, numeroAdultos, numeroCriancas, porqueAdotar, moraEm, seCasaAlugada, teveGatos, seJaTeve, asPessoasConcordam, alguemTemAlergia, porqueDevolveria, responsabilidade, tireSuasDuvidas) VALUES ('${nomeCompleto}', '${cpf}', '${profissao}', '${jaTemGato}', '${endereco}', '${telefone}', '${idade}', '${bairro}', '${cep}', '${numeroAdultos}', '${numeroCriancas}', '${porqueAdotar}', '${moraEm}', '${seCasaAlugada}', '${teveGatos}', '${seJaTeve}','${asPessoasConcordam}', '${alguemTemAlergia}', '${porqueDevolveria}', '${responsabilidade}', '${tireSuasDuvidas}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT nomeCompleto, CPF, profissao, cep from formularioAdotar;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    autenticar,
    cadastrarFormulario,
    listar
}

