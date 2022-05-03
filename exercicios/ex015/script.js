function calcular() {
    let res = window.document.getElementById('resultado');
    let data = new Date();
    const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
    const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    res.innerHTML = `<p>Dia: <mark>${data.getDate()}</mark></p>`;
    res.innerHTML += `<p>Mês: <mark>${meses[data.getMonth()]}</mark></p>`;
    res.innerHTML += `<p>Ano: <mark>${data.getFullYear()}</mark></p>`;
    res.innerHTML += `<p>Dia da semana: <mark>${diasSemana[data.getDay()]}</mark></p>`;
    res.innerHTML += `<p>Hora: <mark>${data.getHours()}</mark></p>`;
    res.innerHTML += `<p>Minutos: <mark>${data.getMinutes()}</mark></p>`;
    res.innerHTML += `<p>Segundos: <mark>${data.getSeconds()}</mark></p>`;
}