create database individual;
use individual;

create table usuario(
idUsuario int primary key auto_increment,
primeiro_nome varchar(45),
segundo_nome varchar(45),
email varchar(45),
senha varchar(45),
top3 int,

constraint UsuarioTop3
	foreign key (top3)
		references usuario(idUsuario)
);

create table rodada(
idRodada int primary key auto_increment,
ponto_atual int,
tempo_rodada time
);

create table ranking(
idRanking int primary key auto_increment,
rank_atual int,
ponto_necessario int
);

create table pontuacao(
idPontuacao int,
ponto_total int,
melhor_ponto int,

fkUsuario int,
fkRodada int,
fkRanking int,

constraint associativa
	primary key (idPontuacao, fkUsuario, fkRodada, fkRanking),
    
constraint PontoUsuario
	foreign key (fkUsuario)
		references usuario(idUsuario),
        
constraint PontoRodada
	foreign key (fkRodada)
		references rodada(idRodada),
        
constraint PontoRanking
	foreign key (fkRanking)
		references ranking(idRanking)

);





