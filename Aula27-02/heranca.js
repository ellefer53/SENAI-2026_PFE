class Jogador {//classe mãe
    #nome;
    #numero;

    constructor(nome, numero){
        this.#nome = nome;
        this.#numero = numero;
    }
    get nome(){
        return this.#nome;
    }
    get numero(){
        return this.#numero;
    }
}//Classe mãe geralmente não é instanciada

class JogadorFutebol extends Jogador{
    peDominante;
    totalGols;

    constructor(nome, numero, peDominante, qtdGols){
        super(nome, numero);
        this.peDominante = peDominante;
        this.totalGols = qtdGols;
    }

    fazerGol(qtd){
        return this.totalGols += qtd;
    }

    mostrar(){
        return `O jogador ${super.nome} camisa número ${super.numero} tem o pé dominante ${this.peDominante} e tem ${this.totalGols} gols.`
    }
}

const Jorge = new JogadorFutebol('Jorge', 10, 'direito', 10);
console.log(Jorge.mostrar());
