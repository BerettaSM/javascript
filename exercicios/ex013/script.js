function calcular() {
    let res = window.document.getElementById('resultado');
    let n1 = Number(window.prompt('Digite um número: '));
    let n2 = Number(window.prompt('Digite outro número: '));
    let complemento;
    if (n1 > n2) {
        complemento = `o maior valor é <strong>${n1}</strong>`;
    } else if (n2 > n1) {
        complemento = `o maior valor é <strong>${n2}</strong>`;
    } else {
        complemento = `ambos são <strong>IGUAIS</strong>`;
    }
    res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>,${complemento}</p>`;
}