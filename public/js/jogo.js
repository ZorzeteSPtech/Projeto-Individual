var mapas = [
  `1`,
  `2`,
  `3`,
  `4`,
  `5`,
  `6`,
  `7`,
  `8`,
  `9`,
  `10`,
  `11`,
  `12`,
  `13`,
  `14`,
  `15`,
];

let cont = 0;

const mapContainer = document.getElementById("mapContainer");
const closeBtn = document.getElementById("close-btn");
const mapImage = document.getElementById("mapImage");

var randomMapa = 0;

// Expandir ao clicar no mini-mapa
mapContainer.addEventListener("click", function (event) {
  // Evita expandir quando clicar no botão de fechar
  if (event.target === closeBtn) return;

  mapContainer.classList.add("expanded");
});

// Fechar o mapa expandido
closeBtn.addEventListener("click", function () {
  mapContainer.classList.remove("expanded");
});

let ponto = 0;

function iniciarJogo() {
  // Detecta mudança de hash (tipo clicar em <a href="#mapa">)
  window.addEventListener("hashchange", () => {
    if (window.location.hash === "#mapa") {
      mapa();
    }
  });

  // Também chama ao carregar a página com #mapa já na URL
  window.addEventListener("load", () => {
    if (window.location.hash === "#mapa") {
      mapa();
    }
  });

  fetch(`/jogo/melhorPontuacao/${idUsuario}`)
    .then((result) => {
      if (result.ok) {
        result.json().then((res) => {
          const melhorPonto = document.getElementById("melhorPonto");

          melhorPonto.innerHTML = res[0].ponto_total;
        });
      } else {
        console.log("Erro ao pegar a melhor pontuação", result.status);
      }
    })
    .then((json) => {
      if (json) {
        document.getElementById("melhorPontuacao").innerHTML =
          json.melhorPontuacao;
        console.log("Melhor pontuação atualizada:", json.melhorPontuacao);
      }
    })
    .catch((erro) => {
      console.log("Erro: Não foi possível pegar a melhor pontuação", erro);
    });
}


function plotar(){

  pontos();
  fetch(`/jogo/top3`).then((result) => {
    if (result.ok) {
      result.json().then((res) => {
        const top1 = document.getElementById("top1");
        const top2 = document.getElementById("top2");
        const top3 = document.getElementById("top3");

        top1.innerHTML = `nome: ${res[0].nome} - pontuação: ${res[0].ponto_total}`;
        top2.innerHTML = `nome: ${res[1].nome} - pontuação: ${res[1].ponto_total}`;
        top3.innerHTML = `nome: ${res[2].nome} - pontuação: ${res[2].ponto_total}`;
      });
    }
  });

}

function atribuir_ponto(valor_correto) {
  console.log(valor_correto);

  const pontinho = document.getElementById("pontoAtual");

  if (cont >= 5) {
    alert(`Jogo finalizado, voce fêz ${ponto} pontos`);
    jogoFinalizado();
  }
  if (valor_correto == randomMapa) {
    ponto += 100;
    mapa();
    cont++;

    pontinho.innerHTML = ponto;
  } else {
    alert("Você errou");
    mapa();
    cont++;
  }
}

function mapa() {
  var section = document.getElementById("mapa");

  randomMapa = Math.floor(Math.random() * mapas.length);

  //switch >:(

  if (randomMapa == 0) {
    section.style.backgroundImage =
      "url(./assets/img/img-jogo/baciaAntiga.png)";
  }
  if (randomMapa == 1) {
    section.style.backgroundImage = "url(./assets/img/img-jogo/bordaReino.png)";
  }

  if (randomMapa == 2) {
    section.style.backgroundImage =
      "url(./assets/img/img-jogo/caminhoVerde.png)";
  }

  if (randomMapa == 3) {
    section.style.backgroundImage =
      "url(./assets/img/img-jogo/canionNevoa.png)";
  }

  if (randomMapa == 4) {
    section.style.backgroundImage =
      "url(./assets/img/img-jogo/cidadeLagrimas.png)";
  }

  if (randomMapa == 5) {
    section.style.backgroundImage = "url(./assets/img/img-jogo/Colmeia.png)";
  }

  if (randomMapa == 6) {
    section.style.backgroundImage = "url(./assets/img/img-jogo/dirtmouth.png)";
  }

  if (randomMapa == 7) {
    section.style.backgroundImage =
      "url(./assets/img/img-jogo/encruzilhada.png)";
  }

  if (randomMapa == 8) {
    section.style.backgroundImage =
      "url(./assets/img/img-jogo/ermosFungicos.png)";
  }

  if (randomMapa == 9) {
    section.style.backgroundImage = "url(./assets/img/img-jogo/hidrovia.png)";
  }

  if (randomMapa == 10) {
    section.style.backgroundImage =
      "url(./assets/img/img-jogo/jardimRainha.png)";
  }

  if (randomMapa == 11) {
    section.style.backgroundImage =
      "url(./assets/img/img-jogo/ninhoProfundo.png)";
  }

  if (randomMapa == 12) {
    section.style.backgroundImage =
      "url(./assets/img/img-jogo/penhascoUivante.png)";
  }

  if (randomMapa == 13) {
    section.style.backgroundImage =
      "url(./assets/img/img-jogo/picoCristal.png)";
  }

  if (randomMapa == 14) {
    section.style.backgroundImage =
      "url(./assets/img/img-jogo/terraDescanco.png)";
  }

  console.log("Número sorteado:", randomMapa);
}

function jogoFinalizado() {
  fetch("/jogo/pontuacao", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ idUsuario, ponto }),
  })
    .then((result) => {
      if (result.ok) {
        console.log("Pontuação enviada com sucesso!");
        cont = 0;
        plotar();
        window.location = "./hallowGuess.html#ranking";
      } else {
        console.log("Erro ao enviar pontuação", result.status);
      }
    })
    .catch((erro) => {
      console.log("Erro: Não foi possível enviar a pontuação", erro);
    });
}
