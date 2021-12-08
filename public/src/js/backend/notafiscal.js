class Notafiscal{
    constructor(data, num, quant, valor_metro, valor_total){
        this._data = data;
        this._num = num;
        this._quantidade = quant;
        this._valor_metro = valor_metro;
        this._valor_total = valor_total;
    }
    get data(){
        return this._data;
    }
    set data(data){
        this._data = data;
    }
    get num(){
        return this._num;
    }
    set num(num){
        this._num = num;
    }
    get quantidade(){
        return this._quantidade;
    }
    set quantidade(qnt){
        this._quantidade = qnt;
    }
    get valor_metro(){
        return this._valor_metro;
    }
    set valor_metro(valor_metro){
        this._valor_metro = valor_metro;
    }
    get valor_total(){
        return this._valor_total;
    }
    set valor_total(valor_total){
        this._valor_total = valor_total;
    }
}