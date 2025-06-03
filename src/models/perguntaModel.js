const database = require("../database/config");

function inserirPergunta(texto, idUsuario) {
  const instrucaoSql = `INSERT INTO pergunta (pergunta, fkUsuario) VALUES ('${texto}', ${idUsuario})`;

  console.log(texto);

  return database.executar(instrucaoSql);
}

module.exports = {
  inserirPergunta,
};
