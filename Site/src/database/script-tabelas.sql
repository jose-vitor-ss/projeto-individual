CREATE DATABASE adoteFelpudos;

USE adoteFelpudos;

CREATE TABLE gatil (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50)
);

CREATE TABLE usuario (
	pessoaId INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	cpf VARCHAR(50),
	senha VARCHAR(50)
);

insert into empresa (razao_social) values ('Gatil - Felpudos');
insert into gatil (descricao, fk_gatil) values ('Gatil - Consolação', 1);


 