function calcular() {
    let res = window.document.getElementById('resultado');
    let mes = window.prompt('Digite o mês em extenso (ex: Setembro)').toUpperCase();
    let estacao;
    switch(mes) {
        case 'DEZEMBRO': case 'JANEIRO': case 'FEVEREIRO':
            estacao = 'VERÃO';
            break;
        case 'MARÇO': case 'ABRIL': case 'MAIO':
            estacao = 'OUTONO';
            break;
        case 'JUNHO': case 'JULHO': case 'AGOSTO':
            estacao = 'INVERNO';
            break;
        case 'SETEMBRO': case 'OUTUBRO': case 'NOVEMBRO':
            estacao = 'PRIMAVERA';
            break;
        default:
            estacao = 'INDEFINIDA';
    }
    res.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na estação <mark><strong>${estacao}</strong></mark>.</p>`;
}