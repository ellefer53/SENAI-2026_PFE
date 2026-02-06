const prompt = require('prompt-sync')();

let a = prompt('Digite um número: ');
let b = prompt('Digite outro número: ');

if (a < b) {
    console.log('O maior número é ', a);
} else if (b > a) {
    console.log('O maior número é ', b);
} else if (a == 0 || b == 0) {
    console.log('Um dos números é zero');
} else {
    console.log('Os números são iguais');
}