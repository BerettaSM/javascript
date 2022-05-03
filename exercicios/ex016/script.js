function calcular() {
    let res = window.document.getElementById('resultado');
    let anoAtual = new Date().getFullYear();
    let anoNasc = Number(window.prompt('Em que ano você nasceu?'))
    let idadeAtual = anoAtual - anoNasc;
    res.innerHTML = `<p>Quem nasceu em ${anoNasc} vai completar <strong>${idadeAtual}</strong> anos em ${anoAtual}.</p>`;
}