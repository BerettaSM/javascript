function calcular() {
    let res = window.document.getElementById('resultado');
    let data = new Date();
    res.innerHTML = `<p>O que eu recebi do sistema foi <mark>${data}</mark></p>`;
}