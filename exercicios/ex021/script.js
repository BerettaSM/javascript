function contar() {
    let res = window.document.getElementById('resultado');
    let string = '<h1>Contando de 1 até 10</h1><p>';
    let cont = 1;
    while (cont <= 10) {
        string += cont + ' &#x1F449; ';
        cont++;
    }
    res.innerHTML += string + ' &#x1F3C1;';
}