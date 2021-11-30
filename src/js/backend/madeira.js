class Madeira{
    constructor(cod, idade, tipo, preco){
        this._cod = cod;
        this._idade = idade;
        this._tipo = tipo;
        this._preco = preco;
    }
    get codigo(){
        return this._cod;
    }
    get idade(){
        return this._idade;
    }
    get tipo(){
        return this._tipo;
    }
    get preco(){
        return this._preco;
    }
    
    set codigo(codigo){
        this._cod = codigo;
    }
    set idade(idade){
        this._idade = idade;
    }
    set tipo(tipo){
        this._tipo = tipo;
    }
    set preco(preco){
        this._preco = preco;
    }

}