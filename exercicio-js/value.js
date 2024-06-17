function calcularValor(valorBoleto, dataVencimento, percentualJurosDiario) {
    const hoje = new Date();
    const vencimento = new Date(dataVencimento);
    
    const diff = hoje.getTime() - vencimento.getTime();
    const diasAtraso = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (diasAtraso > 0) {
        const juros = valorBoleto * (percentualJurosDiario / 100) * diasAtraso;
        const valorAtualizado = valorBoleto + juros;
        return valorAtualizado.toFixed(2);
    } else {
        return valorBoleto.toFixed(2);
    }
}