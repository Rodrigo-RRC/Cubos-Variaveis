let capitalInicial = 1000;
let taxaMensal = 10 / 100;
let tempoAplicado = 3;

let montante = capitalInicial * Math.pow((1 + taxaMensal), tempoAplicado);
let montanteDuasCasas = montante.toFixed(2);
console.log(`O montante de um capital R$ ${capitalInicial},00 aplicado durante um tempo de ${tempoAplicado} meses a uma taxa mensal de ${taxaMensal} (em decimal) será de: R$ ${montanteDuasCasas} `)