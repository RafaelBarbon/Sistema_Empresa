class Tercerizado extends Funcionario{
    constructor(nome, end, tel, cnpj, cep, email, senha){
        super(nome, end, tel, cep, email, senha);
        this._cnpj = cnpj;
    }
    get_cnpj(){
        return this._cnpj;
    }
    set_cnpj(cnpj){
        this._cnpj = cnpj;
    }
}