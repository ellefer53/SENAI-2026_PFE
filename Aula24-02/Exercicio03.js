class Bicicleta {
    Modelo = 'Speed';
    Marca = 'Caloi';
    Cor = 'Preta';
    Velocidade = '35km/h';

    //getters e setters
    setModelo(valor){
        this.Modelo = valor;
    }
    getModelo(){
        return this.Modelo;
    }
    setMarca(valor){
        this.Marca = valor;
    }
    getMarca(){
        return this.Marca;
    }
    setCor(valor){
        this.Cor = valor;
    }
    getCor(){
        return this.Cor;
    }
    setVelocidade(valor){
        this.Velocidade = valor;
    }
    getVelocidade(){
        return this.Velocidade;
    }
}
const bicicleta = new Bicicleta();
bicicleta.setModelo('Speed');
bicicleta.setMarca('Caloi');
bicicleta.setCor('Preta');
bicicleta.setVelocidade('35km/h');
console.log(bicicleta.getModelo());
console.log(bicicleta.getMarca());
console.log(bicicleta.getCor());
console.log(bicicleta.getVelocidade());