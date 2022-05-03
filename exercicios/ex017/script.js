function gerar() {
    let res = window.document.getElementById('resultado');
    let numAleatorio = 1 + Math.floor(Math.random() * 100);
    res.innerHTML += `<p>Acabei de pensar no número <mark>${numAleatorio}</mark>!</p>`;
}

function limpar() {
    let res = window.document.getElementById('resultado');
    let padrao = '<p>Cada vez que você apertar o botão acima, eu penso em um número entre 1 e 100.</p>';
    res.innerHTML = padrao;
}