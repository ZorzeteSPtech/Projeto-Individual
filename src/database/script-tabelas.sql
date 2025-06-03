create database if not exists individual;
use individual;

create table if not exists usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45)
);

create table if not exists pergunta(
idPergunta int primary key auto_increment,
pergunta varchar(500),
fkUsuario int,

constraint perguntaUsuario
	foreign key (fkUsuario)
		references usuario(idUsuario)
);


create table if not exists pontuacao(
idPontuacao int primary key auto_increment,
ponto_total int,

fkUsuario int,
    
constraint PontoUsuario
	foreign key (fkUsuario)
		references usuario(idUsuario)
        
);




