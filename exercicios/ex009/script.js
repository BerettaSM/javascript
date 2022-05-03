let cont = 0;

function contar() {
    cont ++;
    printar();
}

function zerar() {
    cont = 0;
    printar();
}

function printar() {
    var res = window.document.getElementById('resultado');
    res.innerHTML = `<p>O contador está com <mark>${cont}</mark> cliques.</p>`;
}