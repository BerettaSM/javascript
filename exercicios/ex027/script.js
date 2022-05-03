function contar() {
    let res = window.document.getElementById('resultado');
    let num = Number(window.document.getElementById('num').value);
    let string = `<h2>Tabuada de ${num}</h2>`;
    let cont = 1;
    while (cont <= 10) {
        string += `${num} x ${cont} = <strong>${num*cont}</strong><br>`;
        cont++;
    }
    res.innerHTML = string;
}