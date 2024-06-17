function mes(numero) {
    let meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    
    if (numero >= 0 && numero < 12) {
        return meses[numero];
    } else {
        return 'Número de mês inválido';
    }
  }