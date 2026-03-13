class Pessoa {
    //encapsulamento
    Nome = 'Ellefer';
    #cpf = '44444444444';
    #salário = 5000;

    //método getters e setters
    setCpf(valor){
        this.#cpf = valor;
    }
    getCpf(){
        return this.#cpf;
    }
    setSalário(valor){
        this.#salário = valor;
    }
    getSalário(){
        return this.#salário;
    }   
}
const pessoa = new Pessoa();
pessoa.setCpf('44444444444');
pessoa.setSalário('5000');
console.log(pessoa.getCpf());
console.log(pessoa.getSalário());