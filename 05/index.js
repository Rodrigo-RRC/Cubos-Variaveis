let xA = -2;
let xB = 4;
let yA = 10;
let yB = -12;

let distanciaEntrePontos = Math.sqrt(Math.pow(xB - xA, 2) + Math.pow(yB - yA, 2));
let distanciaEntrePontosDuasCasas = distanciaEntrePontos.toFixed(2);

console.log(`A distância entre os dois pontos será: ${distanciaEntrePontosDuasCasas}`);
