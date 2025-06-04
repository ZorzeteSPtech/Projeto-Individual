var database = require("../database/config");

function inserirPonto(id_usuario, pontos) {
  console.log(
    "ACESSEI O PONTOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente."
  );

  var instrucaoSql = `INSERT INTO pontuacao (ponto_total, fkUsuario) VALUES (${pontos}, ${id_usuario})`;

  return database.executar(instrucaoSql);
}

function melhorPontuacao(idUsuario) {
  var instrucaoSql = `SELECT MAX(ponto_total) as ponto_total FROM pontuacao
        WHERE fkUsuario = ${idUsuario}`;

  return database.executar(instrucaoSql);
}

function top3() {
  var instrucaoSql = `SELECT nome, ponto_total FROM pontuacao 
	JOIN usuario 
		ON idUsuario = fkUsuario
	ORDER BY ponto_total DESC LIMIT 3;
`;

  return database.executar(instrucaoSql);
}

function chart(idUsuario) {
  var instrucaoSql = `SELECT u.nome, p.ponto_total 
FROM pontuacao p
JOIN usuario u ON p.fkUsuario = u.idUsuario
WHERE u.idUsuario = ${idUsuario}
ORDER BY p.idPontuacao DESC
LIMIT 5;
`;

  return database.executar(instrucaoSql);
}

module.exports = {
  inserirPonto,
  melhorPontuacao,
  top3,
  chart,
};
