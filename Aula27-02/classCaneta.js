class Caneta{
    cor = "amarela";
    marca = "Faber-Castell";
    ponta = "Fina";
    qtdTinta = 10;//ml
    tampa = false;

    escrever(){
        this.qtdTinta -= 1;
        return "Comecei escrever";
    }

    sublinhar(valor){
        if(valor > this.qtdTinta){
            return "quantidade de tinta insuficiente";
        } 
        this.qtdTinta -= valor;
        return "A quantidade de tinta restante depois de sublinhar: " + this.qtdTinta;  
    }
    recarregar(){
        if((this.qtdTinta + valor)>15){
            return "A quantidade de tinta informada execede a quantidade permitida de 15ml";
        }
        this.qtdTinta += valor;
        return "A quantidade de tinta depois d recarrega é " + this.qtdTinta;
    }
    getqtdTinta(){
        return this.qtdTinta;
    }   
}

const canetaFina = new Caneta();
//console.log(canetaFina);
//console.log(canetaFina.escrever());
//console.log("A qtde. restante de tinta é: " + canetaFina.getqtdTinta());
console.log(canetaFina.sublinhar(20
));
//console.log("A qtde. restante de tinta é: " + canetaFina.getqtdTinta());