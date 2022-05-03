function contar() {
    let res = window.document.getElementById('resultado');
    let string = '<h1>Contagem Regressiva de 10 a 1</h1><p>';
    let cont = 10;
    while (cont >= 1) {
        string += cont + ' &#x1F449; ';
        cont--;
    }
    res.innerHTML += string + ' &#x1F3C1;';
}