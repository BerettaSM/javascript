let relogio;

function contar() {
    let res = window.document.getElementById('resultado');
    let data;
    relogio = setInterval(function(){
        data = new Date();
        let hora = data.getHours();
        let min = data.getMinutes();
        let seg = data.getSeconds();
        seg = (seg < 10) ? `0${seg}` : seg;
        res.innerHTML = `<p>Horário: <strong><mark>${hora}:${min}:${seg}</mark></strong></p>`;
    }, 1000);
}

function parar() {
    clearInterval(relogio);
}