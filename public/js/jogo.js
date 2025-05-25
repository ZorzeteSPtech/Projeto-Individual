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

  if (randomMapa == 0) {
    section.style.backgroundImage = "url(../assets/img/mapa.webp)";
    mapaCerto = 1;
    miniCerto = 1;
  }

  if (randomMapa == 1) {
    section.style.backgroundImage = "url(../assets/img/mapa.webp)";

    mapaCerto = 2;
    miniCerto = 2;
  }

  if (randomMapa == 2) {
    section.style.backgroundImage = "url(../assets/img/mapa.webp)";

    mapaCerto = 3;
    miniCerto = 3;
  }

  if (randomMapa == 3) {
    section.style.backgroundImage = "url(../assets/img/mapa.webp)";

    mapaCerto = 4;
    miniCerto = 4;
  }

  if (randomMapa == 4) {
    section.style.backgroundImage = "url(../assets/img/mapa.webp)";

    mapaCerto = 5;
    miniCerto = 5;
  }

  if (randomMapa == 5) {
    section.style.backgroundImage = "url(../assets/img/mapa.webp)";

    mapaCerto = 6;
    miniCerto = 6;
  }

  if (randomMapa == 6) {
    section.style.backgroundImage = "url(../assets/img/mapa.webp)";

    mapaCerto = 7;
    miniCerto = 7;
  }

  if (randomMapa == 7) {
    section.style.backgroundImage = "url(../assets/img/mapa.webp)";

    mapaCerto = 8;
    miniCerto = 8;
  }

  if (randomMapa == 8) {
    section.style.backgroundImage = "url(../assets/img/mapa.webp)";

    mapaCerto = 9;
    miniCerto = 9;
  }

  if (randomMapa == 9) {
    section.style.backgroundImage = "url(../assets/img/mapa.webp)";

    mapaCerto = 10;
    miniCerto = 10;
  }

  if (randomMapa == 10) {
    section.style.backgroundImage = "url(../assets/img/mapa.webp)";

    mapaCerto = 11;
    miniCerto = 11;
  }

  if (randomMapa == 11) {
    section.style.backgroundImage = "url(../assets/img/mapa.webp)";

    mapaCerto = 12;
    miniCerto = 12;
  }

  if (randomMapa == 12) {
    section.style.backgroundImage = "url(../assets/img/mapa.webp)";

    mapaCerto = 13;
    miniCerto = 13;
  }

  if (randomMapa == 13) {
    section.style.backgroundImage = "url(../assets/img/mapa.webp)";

    mapaCerto = 14;
    miniCerto = 14;
  }

  if (randomMapa == 14) {
    section.style.backgroundImage = "url(../assets/img/mapa.webp)";

    mapaCerto = 15;
    miniCerto = 15;
  }

  console.log("Número sorteado:", randomMapa);
}
