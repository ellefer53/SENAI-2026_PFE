class Cidade { 
    Nome = 'São Paulo';
    Estado = 'SP';
    Habitantes = '12.325.232';
    mostra(){
        console.log(this.Nome);//chamada de atributo
        console.log(this.Estado);
        console.log(this.Habitantes);  
    }
}
const impressao = new Cidade();
impressao.mostra();