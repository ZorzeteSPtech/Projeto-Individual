const ctxPartida = document.getElementById("partidas");

function pontos() {
  console.log("Peguei em");
  const header = {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },

  };

  var pegar_ponto = [];

  fetch(`jogo/chart/${idUsuario}`)
    .then((result) => {
      result.json().then((json) => {
        const pontoTotal = document.getElementById(`partidas`).getContext("2d");

        console.log(json);

        for (let i = json.length; i > 0; i--) {
          pegar_ponto.push(json[i].ponto_total);
        }

        new Chart(pontoTotal, {
          type: "line",
          data: {
            labels: ["1", "2", "3", "4", "5"],
            datasets: [
              {
                label: `Pontuaçãp total`,
                data: pegar_ponto,
                borderWidth: 1,
              },
            ],
          },

          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      });
    })

    .catch((error) => {
      console.log("Erro: não foi possível fazer a requisição", error);
    });
}
