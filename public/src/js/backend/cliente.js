class Cliente{
    constructor(nome, end, tel, cnpj, cep, email, senha){
        this._nome = nome;
        this._endereco = end;
        this._telefone = tel;
        this._cnpj = cnpj;
        this._cep = cep;
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

    get cep(){
        return this._cep;
    }

    set cep(cep){
        this._cep = cep;
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



}