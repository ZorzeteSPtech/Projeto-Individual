var database = require("../database/config");

function inserirPonto (idUsuario, pontos){
        console.log("ACESSEI O PONTOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente.");

        var instrucaoSql = `INSERT INTO pontuacao (idPontuacao, ponto_total, melhor_ponto, fkUsuario, fkRodada) VALUES (NULL, ${pontos}, ${pontos}, ${idUsuario}, 1)`;

            return database.executar(instrucaoSql);

}

function atualizarMelhorPonto(idUsuario, pontos){

    var instrucaoSql = `UPDATE pontuacao SET melhor_ponto = ${pontos}
        WHERE fkUsuario = ${idUsuario} AND melhor_ponto < ${pontos}`;

    return database.executar(instrucaoSql);

}


function contarPartida (idUsuario){

    var instrucaoSql = `SELECT COUNT(*) as totalPartidas
        FROM pontuacao
            WHERE fkUsuario = ${idUsuario}`;

    return database.executar(instrucaoSql);

}

module.exports = {

    inserirPonto,
    atualizarMelhorPonto,
    contarPartida

}