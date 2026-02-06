const prompt = require('prompt-sync') ();

function Caracteres() {
    let num1 = Number(prompt('Digite um número: '))
    let num2 = Number(prompt('Digite outro número: '))
    let operacao = prompt('Escolha a operação (*, -, +, /): ')

    if (operacao === '+') {
        console.log('A soma dos números é ', num1 + num2)
    } else if (operacao === '-') {
        console.log('A subtração dos números é ', num1 - num2)
    } else if (operacao === '*') {
        console.log('A multiplicação dos números é ', num1 * num2)
    } else if (operacao === '/') {
        console.log('A divisão dos números é ', num1 / num2)
    } else {
        console.log('Operação inválida!')
    }
}

Caracteres()