let distanciaPercorridaEmMetros = 100;
let tempoEmSegundos = 16;

let VelocidadeMedia = (distanciaPercorridaEmMetros / tempoEmSegundos) * 3.6;
let VelocidadeMediaDuasCasas = VelocidadeMedia.toFixed(2);
console.log(`A Velocidade Média desenvolvida no percurso foi de: ${VelocidadeMediaDuasCasas} Km/h`);
