CREATE DATABASE adoteFelpudos;

USE adoteFelpudos;

CREATE TABLE usuario (
	pessoaId INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	cpf VARCHAR(50),
	senha VARCHAR(50)
);
select * from formularioAdocao;

CREATE TABLE formularioAdocao (
    idFormulario INT PRIMARY KEY AUTO_INCREMENT,
    nomeGato VARCHAR(50),
    idadeGato CHAR(2),
    caractP VARCHAR(50),
    raca VARCHAR(25),
    cor VARCHAR(25),
    possuiDoencas VARCHAR(3),
    quaisDoencas VARCHAR(100),
    vacinado VARCHAR(50),
    sexoGato VARCHAR(50),
    esterelizado VARCHAR(50),
    historiaDoGato LONGTEXT, 
    nivelAtividade VARCHAR(50),
    necessidadesEspeciais VARCHAR(50),
    relacaoAnimais LONGTEXT,
    ambientePreferido LONGTEXT,
    fotoDoGato VARCHAR(50),
    numeroTelefone VARCHAR(50),
    email VARCHAR(50),
    termosCond LONGTEXT
);

select cor, count(cor) as quantidade from formularioAdocao group by cor order by quantidade;

CREATE TABLE formularioAdotar (
	idFormulario INT PRIMARY KEY AUTO_INCREMENT,
    nomeCompleto VARCHAR(50),
    CPF CHAR(11),
    profissao VARCHAR(50),
    jaTemGato VARCHAR(50),
    endereco VARCHAR(50),
    telefone VARCHAR(50),
    idade CHAR(3),
    bairro VARCHAR(50),
    cep CHAR(8),
    numeroAdultos CHAR(2),
    numeroCriancas CHAR(2),
    porqueAdotar longtext,
    moraEm longtext,
    seCasaAlugada longtext,
    teveGatos VARCHAR(10),
    seJaTeve longtext,
    asPessoasConcordam longtext,
    alguemTemAlergia longtext,
    porqueDevolveria longtext,
    responsabilidade longtext,
    tireSuasDuvidas longtext
);

select * from usuario;

select nomeGato, idadeGato, cor, sexoGato from formularioAdocao;

select * from formularioAdotar;

select * from formularioAdocao;