function ArrayNumeros() {

    let array = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));

    let maiorNumero = Math.max(...array);
    let menorNumero = Math.min(...array);

    let pares = array.filter(num => num % 2 === 0);
    let impares = array.filter(num => num % 2 !== 0);
    let percentualPares = (pares.length / array.length) * 100;
    let percentualImpares = (impares.length / array.length) * 100;

    let valorMedio = numeros.reduce((acc, curr) => acc + curr, 0) / numeros.length;

    console.log("Maior número: " + maiorNumero);
    console.log("Menor número: " + menorNumero);
    console.log("Percentual de números pares: " + percentualPares + "%");
    console.log("Percentual de números ímpares: " + percentualImpares + "%");
    console.log("Valor médio: " + valorMedio);
}

analisarArrayNumeros();