function contar() {
    let res = window.document.getElementById('resultado');
    let numInput = window.document.getElementById('num');
    let num = Number(numInput.value);
    let string = `<h1>Contando de 0 até ${num}</h1><p>`;
    let cont = 0;
    while (cont <= num) {
        string += cont + ' &#x1F449; ';
        cont++;
    }
    res.innerHTML += string + ' &#x1F3C1;';
    numInput.value = null;
}