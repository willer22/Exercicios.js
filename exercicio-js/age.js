function calcularIdade(dataNascimento) {
    
    let hoje = new Date();
    let nascimento = new Date(dataNascimento);
    
    let diff = hoje.getTime() - nascimento.getTime();
    let idade = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    
    return {
        maiorDeIdade: idade >= 18,
        idadeCalculada: idade
    }
}

console.log(calcularIdade('1998-12-11'))