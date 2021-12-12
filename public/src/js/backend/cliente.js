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
        return "Nome: " + this._nome + " Email: " + this._email + "\nTelefone: " + this._telefone + " CNPJ: " + this._cnpj + "\nEndereço: " + this._endereco + ".\n\n";
    }
}

var cliente = new Cliente(null,null,null,null,null,null);

async function cadastro(nome, email, CNPJ,endereco,tel,senha){
    //var existe;// TODO Tenta procurar o CNPJ no banco de dados
    let db = window.database;
    var ret;
    ret = db.get_cliente(CNPJ).then(function(resul){
        if(resul == false){
            db.insert_cliente(CNPJ, nome, senha, email, tel, endereco);//OK
            return true;
        }
        else{
            return false;
        }
    });
    var retorno = await ret;
    return retorno;
    
    /*if(existe == CNPJ)
        return false;
    else{ // TODO Cadastra no banco de dados as informações
        return true;
    }*/
}

async function loginCliente(log,sen){
    let db = window.database;
    var ret;
    ret = db.get_cliente(log).then(function(resul){
        if(resul.Senha == sen){
            cliente.cnpj = log;
            cliente.senha = resul.Senha;
            cliente.email = resul.Email;
            cliente.endereco = resul.Endereco;
            cliente.nome = resul.Nome;
            cliente.telefone = resul.Telefone;
            return true;
        }
        else{
            return false;
        }
    });
    var retorno = await ret;
    return retorno;
}

async function listar_consumidores(){
    let database = window.database;
    var ret = database.get_clientes().then(function(clientes){
            var txt = "";
            for(var cliente1 in clientes){
                cliente.cnpj = cliente1;
                cliente.senha = clientes[cliente1].Senha;
                cliente.email = clientes[cliente1].Email;
                cliente.endereco = clientes[cliente1].Endereco;
                cliente.nome = clientes[cliente1].Nome;
                cliente.telefone = clientes[cliente1].Telefone;
                txt += cliente.info();
            }
            return txt;
        })
    var retorno = await ret;
    return retorno;
    /*
    A cada consumidor, atualizar as informações do OBJ e chamar o método para imprimir as informações do mesmo
    */
    //txt += cliente.info();
    //return txt;
}