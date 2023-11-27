var database = require("../database/config");

function cadastrarGato(nomeGato, idadeGato, caractP, raca, cor, possuiDoencas, quaisDoencas, vacinado, sexoGato, esterelizado, historiaDoGato, nivelAtividade, necessidadesEspeciais, relacaoAnimais, ambientePreferido, fotoDoGato, numeroTelefone, email, termosCond) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeGato, idadeGato, caractP, raca, cor, possuiDoencas, quaisDoencas, vacinado, sexoGato, esterelizado, historiaDoGato, nivelAtividade, necessidadesEspeciais, relacaoAnimais, ambientePreferido, fotoDoGato, numeroTelefone, email, termosCond);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nomeGato, idadeGato, caractP, raca, cor, possuiDoencas, quaisDoencas, vacinado, sexoGato, esterelizado, historiaDoGato, nivelAtividade, necessidadesEspeciais, relacaoAnimais, ambientePreferido, fotoDoGato, numeroTelefone, email, termosCond) VALUES ('${nomeGato}', '${idadeGato}', '${caractP}', '${raca}', '${cor}', '${possuiDoencas}', '${quaisDoencas}', '${vacinado}', '${sexoGato}', '${esterelizado}', '${historiaDoGato}', '${nivelAtividade}', '${necessidadesEspeciais}', '${relacaoAnimais}', '${ambientePreferido}', '${fotoDoGato}', '${numeroTelefone}', '${email}', '${termosCond}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
// alterar ------------------------------------------------------ xd----
// function listar() {
//     console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
//     var instrucao = `
//         SELECT 
//             a.id AS idAviso,
//             a.titulo,
//             a.descricao,
//             a.fk_usuario,
//             u.id AS idUsuario,
//             u.nome,
//             u.email,
//             u.senha
//         FROM aviso a
//             INNER JOIN usuario u
//                 ON a.fk_usuario = u.id;
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

module.exports = {
    // listar,
    cadastrarGato
};
