const prompt = require('prompt-sync')();
let a = prompt('Digite um cupom: ');

if (a === 'OURO') {
    console.log('Desconto de 15%');
} else if (a === 'PRATA') {
    console.log('Desconto de 10%');
} else if (a === 'BRONZE') {
    console.log('Desconto de 5%');
} else {
    console.log("Cupom inválido");
}