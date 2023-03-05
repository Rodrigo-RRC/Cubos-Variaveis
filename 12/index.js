let montanteM = 90_000;
let capitalC = 60_000;
let numeroMesesN = 24;
let calculoA = (Math.pow(montanteM / capitalC, 1 / numeroMesesN) - 1).toFixed(5);
let iJuros = 100 * calculoA;
//console.log(calculoA);

console.log(`O seu financiamento de ${capitalC} reais teve uma taxa de juros de ${iJuros}%, pois após ${numeroMesesN} meses você teve que pagar ${montanteM} reais`)