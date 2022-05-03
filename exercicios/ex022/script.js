function contar() {
    let res = window.document.getElementById('resultado');
    let string = '<h1>Contando de 1 até 10, marcando os pares</h1><p>';
    let cont = 1;
    while (cont <= 10) {
        string += (cont % 2 === 0) ? `<strong><mark>${cont}</mark></strong>` : cont;
        string += ' &#x1F449; ';
        cont++;
    }
    res.innerHTML += string + ' &#x1F3C1;</p>';
}