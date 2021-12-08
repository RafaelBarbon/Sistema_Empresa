class Pedido{
    constructor(numero, quantidade, data){
        this._numero = numero;
        this._quantidade = quantidade;
        this._data = data;
    }
    get numero(){
        return this._numero;
    }
    set numero(numero){
        this._numero = numero;
    }
    get quantidade(){
        return this._quantidade;
    }
    set quantidade(quantidade){
        this._quantidade = quantidade;
    }
    get data(){
        return this._data;
    }
    set data(data){
        this._data = data;
    }
}