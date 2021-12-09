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
        return "Código: " + this._cod + " Tipo: " + this._tipo + " Preço: R$ " + this._preco + " Idade: " + this._idade + " meses.\n";
    }
}

var madeira = new Madeira(null,null,null,null);

function listar_madeiras(){
    var madeiras; // TODO coletar do banco de dados todas as madeiras cadastradas
    var infos = "";
    /*
    A cada madeira coletada, atualizar as informações no OBJ e chamar o método para formatar as informações
    */
    infos += madeira.info();
    return infos;
}

function remover_madeira(num){
    var wood; // TODO coletar do banco de dados
    // TODO remover a madeira do banco de dados
    return true;
    return false;
}

function adicionar_madeira(num,preco,tipo,idade){
    var wood; // TODO coletar no banco de dados para ver se já existe
    // TODO se não existe, adiciona
    return true;
    return false;
}

function atualizar_madeira(num,preco,tipo,idade){
    var wood; // TODO coletar no banco de dados para ver se existe
    // TODO se existe, atualiza, conferindo se o valor não é ""
    return true;
    return false;
}