const prompt = require('prompt-sync')();

let temCracha;
let estaDeUniforme;
let ehMonitor;
let temCadastro;

let cracha1 = prompt('O funcionario possui cracha? (s/n): ');
if (cracha1 == 's' || cracha1 == 'S') {
    temCracha = true;
}
let uniforme1 = prompt('O funcionario esta com uniforme? (s/n): ');
if(uniforme1 == 's' || uniforme1 == 'S') {
    estaDeUniforme = true;
}
let monitor1 = prompt('O funcionario é monitor? (s/n): ');
if(monitor1 == 's' || monitor1 == 'S') {
    ehMonitor = true;
}
let cadastro1 = prompt('O funcionario tem cadastro? (s/n): ');
if(cadastro1 == 's' || cadastro1 == 'S') {
    temCadastro = true;
}

if ((temCracha && estaDeUniforme && temCadastro) || (ehMonitor && temCadastro)) {
    console.log('Acesso liberado');
} else {
    console.log('Acesso negado');
}