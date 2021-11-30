class Contratado extends Funcionario{
    constructor(nome, end, tel, cnpj, cep, email, senha){
        super(nome, end, tel, cep, email, senha);
        this._cpf = cpf;
    }
    get cpf(){
        return this._cpf;
    }
    set cpf(cpf){
        this._cpf = cpf;
    }
}