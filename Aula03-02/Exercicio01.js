const prompt = require('prompt-sync') ();

let num1 =  Number(prompt('Escolha o primeiro número: '))
let num2 =  Number(prompt('Escolha o segundo número: '))

let soma = num1 + num2
let multiplicacao = num1 * num2
let subtração = num1 - num2
let divisao = num1 / num2

console.log('A soma dos números é ', soma)
console.log('A multiplicação dos números é ', multiplicacao)
console.log('A subtração dos números é ', subtração)
console.log('A divisão dos números é ', divisao)


