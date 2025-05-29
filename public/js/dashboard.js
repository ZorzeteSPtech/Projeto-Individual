partidasJogadas
partidas
top3


const ctxPartida = document.getElementById('partidas');
const ctxJogadas = document.getElementById('partidasJogadas');


fetch("jogo/partidas")

new Chart(ctxPartida, {
    type: 'bar',
    data: {
        labels: ['Recente', '2', '3', '4', '5'],
        datasets: [{
            label: '# of Votes',
            data: [],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


fetch("jogo/partidasJogadas")

new Chart(ctxJogadas, {
    type: 'line',
    data: {
        labels: ['Recente', '2', '3', '4', '5'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
