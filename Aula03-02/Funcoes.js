//Função tradicional
function saudacao() {
    console.log('Olá, seja bem vindo!')
}

//Função com parâmetro
function saudacaoParametro(nome, sobrenome) {
    console.log('Olá, ' + nome + ' ' + sobrenome + ', seja bem vindo!')
}

//Função Anonima
const Somar = function(num1 , num2)  {
    console.log('A soma dos números é ' + (num1 + num2));
}

//Função Arrow
const Subtrair = (num1 , num2) => {
    console.log('A subtração dos números é ' + (num1 - num2));
}

//Função Arrow com retorno
const SubtrairComRetorno = (num1 , num2) => {
    return num1 - num2
}

//Chamando as funções
saudacao();
saudacaoParametro('Lucas', 'Eduardo');
Somar(10, 5);
Subtrair(10, 5);

console.log('A subtração com retorno dos números é ' + SubtrairComRetorno(20,50))