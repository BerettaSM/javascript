let computador;

function randomizar() {
    computador = 1 + Math.floor(Math.random() * 100);
}

function chutar() {
    let res = window.document.getElementById('resultado');
    let jogador = Number(window.prompt('Qual é o seu palpite?'));
    if (jogador > computador) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MENOR</strong>.</p>`;
    } else if (jogador < computador) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MAIOR</strong>.</p>`;
    } else if (jogador === computador){
        res.innerHTML += `PARABÉNS! Você acertou! Eu tinha sorteado o valor <strong>${computador}</strong>!`;
        window.document.getElementById('botao').style.visibility = 'hidden';
    }
    
}