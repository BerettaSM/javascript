function contar() {
    let res = window.document.getElementById('resultado');
    let numInput1 = window.document.getElementById('fnum1');
    let numInput2 = window.document.getElementById('fnum2');
    let num1 = Number(numInput1.value);
    let num2 = Number(numInput2.value);
    let string = `<h1>Contando de ${num1} até ${num2}</h1><p>`;
    if (num1 > num2) {
        while(num1 >= num2) {
            string += num1 + ' &#x1F449; ';
            num1--;
        }
    } else if (num1 < num2) {
        while(num1  <= num2) {
            string += num1 + ' &#x1F449; ';
            num1++;
        }
    } else {
        string += 'Não é possível contar, pois os números são iguais ';
    }
    res.innerHTML += string + ' &#x1F3C1;</p>';
    numInput1.value = null;
    numInput2.value = null;
}