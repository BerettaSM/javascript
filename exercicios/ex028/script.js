function fatorial() {
    let res = window.document.getElementById('resultado');
    let num = Number(window.document.getElementById('num').value);
    let string = `<h2>Calculando ${num}!</h2>`;
    let cont = num;
    let f = 1;
    while (cont >= 1) {
        f *= cont;
        string += cont + (cont != 1 ? ' x ' : ' = ');
        cont--;
    }
    string += `<strong>${f.toLocaleString('pt-br')}</strong>`;
    res.innerHTML += string;
}