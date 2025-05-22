var mapas = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15`];

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

  var randomMapa = Math.floor(Math.random() * 15);
  var cont = 0;

  if (randomMapa == mapas[0]) {

    alert("Wow!!");

  }

}



