function calcularValor(valorBoleto, dataVencimento, percentualJurosDiario) {
    let hoje = new Date();
    let vencimento = new Date(dataVencimento);
    
    let diff = hoje.getTime() - vencimento.getTime();
    let diasAtraso = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (diasAtraso > 0) {
        let juros = valorBoleto * (percentualJurosDiario / 100) * diasAtraso;
        let valorAtualizado = valorBoleto + juros;
        return valorAtualizado.toFixed(2);
    } else {
        return valorBoleto.toFixed(2);
    }
}
