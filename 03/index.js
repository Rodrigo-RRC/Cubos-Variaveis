let valorTotal = 150;
let valorPago = 70;

let desconto = ((valorTotal - valorPago) / (valorTotal)) * 100;
let descontoDuasCasas = desconto.toFixed(2);
console.log(`O desconto será de ${descontoDuasCasas} %`)