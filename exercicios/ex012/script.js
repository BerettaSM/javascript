function calcular() {
    let res = window.document.getElementById('resultado');
    let n = Number(window.prompt('Digite um número: '));
    let parimp;
    if (n%2==0) {
        parimp = '<strong>PAR!</strong>';
    } else {
        parimp = '<strong>ÍMPAR!</strong>';
    }
    res.innerHTML = `<p>O número ${n} que foi digitado é ${parimp}</p>`;
}