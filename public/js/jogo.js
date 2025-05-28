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

var ponto = pontoAtual.value;
var melhor = melhorPonto.value;

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

function mapa() {
  var randomMapa = Math.floor(Math.random() * mapas.length);

  var section = document.getElementById("mapa");

  var mapaCerto = 0;
  var miniCerto = 0;
  
  //switch >:( 

  if (randomMapa == 0) {
    section.style.backgroundImage = "url(./assets/img/mapa.webp)";
    mapaCerto = 1;
  }

  if (randomMapa == 1) {
    section.style.backgroundImage = "url(./assets/img/mapa.webp)";

    mapaCerto = 2;
  }

  if (randomMapa == 2) {
    section.style.backgroundImage = "url(./assets/img/mapa.webp)";

    mapaCerto = 3;
  }

  if (randomMapa == 3) {
    section.style.backgroundImage = "url(./assets/img/mapa.webp)";

    mapaCerto = 4;
  }

  if (randomMapa == 4) {
    section.style.backgroundImage = "url(./assets/img/mapa.webp)";

    mapaCerto = 5;
  }

  if (randomMapa == 5) {
    section.style.backgroundImage = "url(./assets/img/mapa.webp)";

    mapaCerto = 6;
  }

  if (randomMapa == 6) {
    section.style.backgroundImage = "url(./assets/img/baciaAntiga.png)";

    mapaCerto = 7;
  }

  if (randomMapa == 7) {
    section.style.backgroundImage = "url(./assets/img/mapa.webp)";

    mapaCerto = 8;
  }

  if (randomMapa == 8) {
    section.style.backgroundImage = "url(./assets/img/mapa.webp)";

    mapaCerto = 9;
  }

  if (randomMapa == 9) {
    section.style.backgroundImage = "url(./assets/img/mapa.webp)";

    mapaCerto = 10;
  }

  if (randomMapa == 10) {
    section.style.backgroundImage = "url(./assets/img/mapa.webp)";

    mapaCerto = 11;
  }

  if (randomMapa == 11) {
    section.style.backgroundImage = "url(./assets/img/mapa.webp)";

    mapaCerto = 12;
  }

  if (randomMapa == 12) {
    section.style.backgroundImage = "url(./assets/img/mapa.webp)";

    mapaCerto = 13;
  }

  if (randomMapa == 13) {
    section.style.backgroundImage = "url(./assets/img/mapa.webp)";

    mapaCerto = 14;
  }

  if (randomMapa == 14) {
    section.style.backgroundImage = "url(./assets/img/mapa.webp)";

    mapaCerto = 15;
  }

  console.log("Número sorteado:", randomMapa);
}




if (mapaCerto == miniMapa){

  ponto += 100;


  if (jogoAcabou()){
  fetch("/ponto/somar",{

    method: "POST"
    
  })
}

}



let locations = [];
let currentImage = null;
let score = 0;

const imageEl = document.getElementById("target-image");
const mapEl = document.getElementById("map");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("next");

fetch("data/locations.json")
  .then((res) => res.json())
  .then((data) => {
    locations = data;
    loadNextImage();
  });

function loadNextImage() {
  const randomIndex = Math.floor(Math.random() * locations.length);
  currentImage = locations[randomIndex];
  imageEl.src = `../assets/images/${currentImage.filename}`;
}

mapEl.addEventListener("click", function (e) {
  const rect = mapEl.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const clickY = e.clientY - rect.top;

  const correctX = currentImage.location.x;
  const correctY = currentImage.location.y;

  const distance = Math.sqrt(
    Math.pow(clickX - correctX, 2) + Math.pow(clickY - correctY, 2)
  );
  const maxDistance = Math.sqrt(
    Math.pow(rect.width, 2) + Math.pow(rect.height, 2)
  );
  const distancePercent = (distance / maxDistance) * 100;

  const earnedPoints = Math.max(0, Math.floor(100 - distancePercent));
  score += earnedPoints;

  scoreEl.textContent = `Pontuação: ${score} (+${earnedPoints})`;
});

nextBtn.addEventListener("click", loadNextImage);
