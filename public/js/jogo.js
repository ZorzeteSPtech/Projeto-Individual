function onloadEsconder() {
  document.getElementById("pontuacao").style.display = "none";
  document.getElementById("jogo").style.display = "none";
}

const listaDeQuestoes = [
  {
    pergunta: "Que lugar é esse no fundo?",
    alternativaA: "Picos de Cristis",
    alternativaB: "Bacia Antiga",
    alternativaC: "O Vazio",
    alternativaD: "Dirtmouth",
    alternativaCorreta: "alternativaB",
    background: "background-image: url('../assets/img/bacia1.png')",
  },

  {
    pergunta:
      "Quantos 'GEO's' são necessários para comprar uma 'Chave Elegante' na loja do 'Sly'?",
    alternativaA: "1100 Geo",
    alternativaB: "2000 Geo",
    alternativaC: "500 Geo",
    alternativaD: "800 Geo",
    alternativaCorreta: "alternativaD",
  },

  {
    pergunta: "Onde o Rei Pálido foi visto pela primeira vez?",
    alternativaA: "Dirtmouth",
    alternativaB: "Borda do Reino",
    alternativaC: "Jardins da Rainha",
    alternativaD: "Palácio Branco",
    alternativaCorreta: "alternativaB",
  },

  {
    pergunta: "O que é o protagonista?",
    alternativaA: "Um receptáculo vazio",
    alternativaB: "Um seguidor do vazio",
    alternativaC: "O Deus do Vazio",
    alternativaD: "Uma encarnação do vazio",
    alternativaCorreta: "alternativaA",
  },

  {
    pergunta: "Por que a Radiância quis destruir o Reino de Hallownest?",
    alternativaA: "Vingança contra o Rei Pálido",
    alternativaB: "Vingança contra os insetos",
    alternativaC: "Ela apenas fez porque podia",
    alternativaD: "Por amor a Dama Branca",
    alternativaCorreta: "alternativaA",
  },

  {
    pergunta: "Qual destes veio primeiro?",
    alternativaA: "Rei Pálido",
    alternativaB: "Dama Branca",
    alternativaC: "Radiância",
    alternativaD: "Deus do Vazio",
    alternativaCorreta: "alternativaD",
  },

  {
    pergunta: "O que era o Rei Pálido?",
    alternativaA: "Uma criatura qualquer que ganhou poder de outra divindade",
    alternativaB:
      "Um Wyrm vindo de continêntes distântes com poder concentrado",
    alternativaC:
      "Um seguidor do vazio que se converteu a criação de alma pura",
    alternativaD:
      "O Deus Inseto que decidiu unificaar Hallownest para agradar seu povo",
    alternativaCorreta: "alternativaB",
  },

  {
    pergunta: "O que aconteceu com o povo de Hallownest?",
    alternativaA: "Sempre foram criaturas selvagens",
    alternativaB: "Uma infecção tomou conta deles",
    alternativaC: "Os que estão no jogo são insetos que queriam tomar o pdoer",
    alternativaD: "Eles estão apenas protegendo o reino de você",
    alternativaCorreta: "alternativaB",
  },
];

// variáveis globais
let numeroDaQuestaoAtual = 0;
let pontuacaoFinal = 0;
let tentativaIncorreta = 0;
let certas = 0;
let erradas = 0;
let quantidadeDeQuestoes = listaDeQuestoes.length;
// let isUltima = numeroDaQuestaoAtual == quantidadeDeQuestoes-1 ? true : false

let id_usuario = sessionStorage.getItem("ID_USUARIO");

function onloadEsconder() {
  document.getElementById("pontuacao").style.display = "none";
  document.getElementById("jogo").style.display = "none";
}

function iniciarQuiz() {
  document.getElementById("pontuacao").style.display = "flex";
  document.getElementById("jogo").style.display = "flex";

  document.getElementById("qtdQuestoes").innerHTML = quantidadeDeQuestoes;

  preencherHTMLcomQuestaoAtual(0);

  btnSubmeter.disabled = false;
  btnProx.disabled = true;
  // btnConcluir.disabled = true
  btnTentarNovamente.disabled = true;


   fetch(`/jogo/melhorPontuacao/${id_usuario}`)
    .then((result) => {
      if (result.ok) {
        result.json()
        .then((res) => {

            console.log(res[0])
            const melhorPonto = document.getElementById("melhorPonto")

            melhorPonto.innerHTML = res[0].ponto_total;

        })
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

fetch(`/jogo/top3`)
  .then((result) =>{

    if(result.ok){

      result.json()
      .then ((res) =>{

        const top1 = document.getElementById("top1")
        const top2 = document.getElementById("top2")
        const top3 = document.getElementById("top3")

        console.table(res);

        top1.innerHTML = `nome: ${res[0].nome} - pontuação: ${res[0].ponto_total}`;
        top2.innerHTML = `nome: ${res[1].nome} - pontuação: ${res[1].ponto_total}`;
        top3.innerHTML = `nome: ${res[2].nome} - pontuação: ${res[2].ponto_total}`;

      })

    }

  })

function preencherHTMLcomQuestaoAtual(index) {
  habilitarAlternativas(true);
  const questaoAtual = listaDeQuestoes[index];
  numeroDaQuestaoAtual = index;
//   console.log("questaoAtual");
//   console.log(questaoAtual);
  document.getElementById("spanNumeroDaQuestaoAtual").innerHTML =
    Number(index) + 1; // ajustando porque o index começa em 0
  document.getElementById("spanQuestaoExibida").innerHTML =
    questaoAtual.pergunta;
  document.getElementById("labelOpcaoUm").innerHTML = questaoAtual.alternativaA;
  document.getElementById("labelOpcaoDois").innerHTML =
    questaoAtual.alternativaB;
  document.getElementById("labelOpcaoTres").innerHTML =
    questaoAtual.alternativaC;
  document.getElementById("labelOpcaoQuatro").innerHTML =
    questaoAtual.alternativaD;
}

function submeter() {
  const options = document.getElementsByName("option"); // recupera alternativas no html

  let hasChecked = false;
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      hasChecked = true;
      break;
    }
  }

  if (!hasChecked) {
    alert("Não há alternativas escolhidas. Escolha uma opção.");
  } else {
    btnSubmeter.disabled = true;
    btnProx.disabled = false;

    habilitarAlternativas(false);

    checarResposta();
  }
}

function habilitarAlternativas(trueOrFalse) {
  let opcaoEscolhida = trueOrFalse ? false : true;

  primeiraOpcao.disabled = opcaoEscolhida;
  segundaOpcao.disabled = opcaoEscolhida;
  terceiraOpcao.disabled = opcaoEscolhida;
  quartaOpcao.disabled = opcaoEscolhida;
}

function avancar() {
  btnProx.disabled = true;
  btnSubmeter.disabled = false;

  desmarcarRadioButtons();

  if (numeroDaQuestaoAtual < listaDeQuestoes.length) {
    preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual);
  } else {
    finalizarJogo();
  }
  limparCoresBackgroundOpcoes();
}

function tentarNovamente() {
  // atualiza a página
  window.location.reload();
}

function checarResposta() {
  const questaoAtual = listaDeQuestoes[numeroDaQuestaoAtual]; // questão atual
  const respostaQuestaoAtual = questaoAtual.alternativaCorreta; // qual é a resposta correta da questão atual

  const options = document.getElementsByName("option"); // recupera alternativas no html

  let alternativaCorreta = null; // variável para armazenar a alternativa correta

  options.forEach((option) => {
    if (option.value === respostaQuestaoAtual) {
      console.log(
        "alternativaCorreta está no componente: " + alternativaCorreta
      );
      alternativaCorreta = option.labels[0].id;
    }
  });

  // verifica se resposta assinalada é correta
  options.forEach((option) => {
    if (option.checked === true && option.value === respostaQuestaoAtual) {
      document
        .getElementById(alternativaCorreta)
        .classList.add("text-success-with-bg");
      pontuacaoFinal++;
      certas++;
      document.getElementById("spanCertas").innerHTML = certas;
      numeroDaQuestaoAtual++;
    } else if (option.checked && option.value !== respostaQuestaoAtual) {
      const wrongLabelId = option.labels[0].id;

      document
        .getElementById(wrongLabelId)
        .classList.add("text-danger-with-bg");
      document
        .getElementById(alternativaCorreta)
        .classList.add("text-success-with-bg");
      tentativaIncorreta++;
      erradas++;
      document.getElementById("spanErradas").innerHTML = erradas;
      numeroDaQuestaoAtual++;
    }
  });
}

function limparCoresBackgroundOpcoes() {
  const options = document.getElementsByName("option");
  options.forEach((option) => {
    document
      .getElementById(option.labels[0].id)
      .classList.remove("text-danger-with-bg");
    document
      .getElementById(option.labels[0].id)
      .classList.remove("text-success-with-bg");
  });
}

function desmarcarRadioButtons() {
  const options = document.getElementsByName("option");
  for (let i = 0; i < options.length; i++) {
    options[i].checked = false;
  }
}

function finalizarJogo() {
  let textoParaMensagemFinal = null;
  let classComCoresParaMensagemFinal = null;
  const porcentagemFinalDeAcertos = pontuacaoFinal / quantidadeDeQuestoes;

  if (porcentagemFinalDeAcertos <= 0.3) {
    textoParaMensagemFinal = "Parece que você não estudou...";
    classComCoresParaMensagemFinal = "text-danger-with-bg";
  } else if (
    porcentagemFinalDeAcertos > 0.3 &&
    porcentagemFinalDeAcertos < 0.9
  ) {
    textoParaMensagemFinal = "Pode melhorar na próxima, hein!";
    classComCoresParaMensagemFinal = "text-warning-with-bg";
  } else if (porcentagemFinalDeAcertos >= 0.9) {
    textoParaMensagemFinal = "Uau, parabéns!";
    classComCoresParaMensagemFinal = "text-success-with-bg";
  }

  textoParaMensagemFinal +=
    "<br> Você acertou " +
    Math.round(porcentagemFinalDeAcertos * 100) +
    "% das questões.";

    console.log(id_usuario);
    console.log(pontuacaoFinal);

  fetch("/jogo/pontuacao", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id_usuario, pontuacaoFinal }),
  })
    .then((result) => {
      if (result.ok) {
        console.log("Pontuação enviada com sucesso!");
      } else {
        console.log("Erro ao enviar pontuação", result.status);
      }
    })
    .catch((erro) => {
      console.log("Erro: Não foi possível enviar a pontuação", erro);
    });

  document.getElementById("msgFinal").innerHTML = textoParaMensagemFinal;
  document
    .getElementById("msgFinal")
    .classList.add(classComCoresParaMensagemFinal);
  document.getElementById("spanPontuacaoFinal").innerHTML = pontuacaoFinal;

  document.getElementById("jogo").classList.add("text-new-gray");

  btnProx.disabled = true;
  btnSubmeter.disabled = true;
  // btnConcluir.disabled = true
  btnTentarNovamente.disabled = false;
}
