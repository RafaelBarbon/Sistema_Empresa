class Cliente{
    constructor(nome, end, tel, cnpj, email, senha){
        this._nome = nome;
        this._endereco = end;
        this._telefone = tel;
        this._cnpj = cnpj;
        this._email = email;
        this._senha = senha;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get endereco(){
        return this._endereco;
    }

    set endereco(endereco){
        this._endereco = endereco;
    }

    get telefone(){
        return this._telefone;
    }

    set telefone(telefone){
        this._telefone = telefone;
    }

    get cnpj(){
        return this._cnpj;
    }

    set cnpj(cnpj){
        this._cnpj = cnpj;
    }

    get email(){
        return this._email;
    }

    set email(email){
        this._email = email;
    }

    get senha(){
        return this._senha;
    }

    set senha(senha){
        this._senha = senha;
    }

    info(){
        return "Nome: " + this._nome + " Email: " + this._email + "\nTelefone: " + this._telefone + " CNPJ: " + this._cnpj + "\nEndereço: " + this._endereco + ".\n";
    }
}

var cliente = new Cliente(null,null,null,null,null,null);

function cadastro(nome, email, CNPJ,endereco,tel,senha){
    var existe;// TODO Tenta procurar o CNPJ no banco de dados
    if(existe == CNPJ)
        return false;
    else{ // TODO Cadastra no banco de dados as informações
        return true;
    }
}

function loginCliente(log,sen){
    return true;
    var cnpj,senha,email,end,nome,tel; // TODO coleta do banco de dados
    if(log == cnpj && sen == senha){
        cliente.cnpj = cnpj;
        cliente.senha = senha;
        cliente.email = email;
        cliente.endereco = end;
        cliente.nome = nome;
        cliente.telefone = tel;
        return true;
    }
    return false;
}

function listar_consumidores(){
    var clientes; // TODO coletar do banco de dados as informações de todos os consumidores
    var txt = "";
    /*
    A cada consumidor, atualizar as informações do OBJ e chamar o método para imprimir as informações do mesmo
    */
    txt += cliente.info();
    return txt;
}