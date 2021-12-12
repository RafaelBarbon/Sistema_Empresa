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

    info(){
        return "Código: " + this._cod + " Tipo: " + this._tipo + " Preço: R$ " + this._preco + " Idade: " + this._idade + " meses.\n\n";
    }
}

var madeira = new Madeira(null,null,null,null);

async function listar_madeiras(){
    var infos = "";
    var ret = window.database.get_madeira().then(function(madeiras){
        for(mad in madeiras){
            madeira._cod = mad;
            madeira._idade = madeiras[mad].Idade;
            madeira._preco = madeiras[mad].Valor;
            madeira._tipo = madeiras[mad].Tipo;
            infos += madeira.info();
        }
        return infos;
    })
    .catch(function(){return false;});
    retorno = await ret;
    return retorno;
    /*
    A cada madeira coletada, atualizar as informações no OBJ e chamar o método para formatar as informações
    */
    //infos += madeira.info();
    //return infos;
}

async function remover_madeira(num){
    ret = window.database.remove_madeira(num).then(function(){return true;})
    .catch(function(){return false;})
    retorno = await ret 
    return retorno;
}

async function adicionar_madeira(num,preco,tipo,idade){
    var ret = window.database.insert_madeira(num,preco,idade,tipo).then(function (){return true;})
    .catch(function(){return false;})
    var retorno = await ret;
    return retorno;
}

async function atualizar_madeira(num,preco,tipo,idade){
    var ret = window.database.update_madeira(num,preco,idade,tipo).then(function (){return true;})
    .catch(function(){return false});
    var retorno = await ret;
    return retorno;
}