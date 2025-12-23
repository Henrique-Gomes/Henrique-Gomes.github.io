const resultElem = document.getElementById('result');

function handleParcela(value) {
    const parcela = value;
    const prestacoes = parseInt(document.getElementById('prestacoes').value);
    const juroAnual = parseFloat(document.getElementById('juro').value);

    updateResult(parcela, prestacoes, juroAnual);
}

function handlePrestacoes(value) {
    const parcela = parseFloat(document.getElementById('parcela').value);
    const prestacoes = value;
    const juroAnual = parseFloat(document.getElementById('juro').value);
    
    updateResult(parcela, prestacoes, juroAnual);
}

function handleJuro(value) {
    const parcela = parseFloat(document.getElementById('parcela').value);
    const prestacoes = parseInt(document.getElementById('prestacoes').value);
    const juroAnual = value;
    
    updateResult(parcela, prestacoes, juroAnual);
}

function updateResult(parcela, prestacoes, juroAnual) {
    const percentAnual = juroAnual / 100;
    const juroMensal = Math.pow(1 + percentAnual, 1/12) - 1

    let montante = 0;

    for (i = 1; i <= prestacoes; i++) {
        montante += parcela * Math.pow(1 + juroMensal, i)
    }

    const valorDoBemParcelado = parcela * prestacoes;
    const rendimento = montante - valorDoBemParcelado;

    resultElem.textContent = rendimento;
}
