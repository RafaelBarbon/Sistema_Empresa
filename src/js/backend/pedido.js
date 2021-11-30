class Pedido{
    constructor(numero, duracao, data){
        this._nome = nome;
        this._duracao = duracao;
        this._data = data;
    }
    get nome(){
        return this._nome;
    }
    set nome(nome){
        this._nome = nome;
    }
    get duracao(){
        return this._duracao;
    }
    set duracao(duracao){
        this._duracao = duracao;
    }
    get data(){
        return this._data;
    }
    set data(data){
        this._data = data;
    }
}