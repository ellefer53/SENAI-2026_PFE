const prompt = require('prompt-sync')();

let a = prompt('Digite um número: ');

if(a % 2 === 0) {
    console.log('O número é par');
} else {
    console.log('O número é ímpar');
}