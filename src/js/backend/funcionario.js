class Funcionario{
    constructor(nome,cargo, id, salario, email, senha){
        this._nome = nome;
        this._cargo = cargo;
        this._id = id;
        this._salario = salario;
        this._email = email;
        this._senha = senha;
    }
    get nome(){
        return this._nome;
    }
    get cargo(){
        return this._cargo;
    }
    get id(){
        return this._id;
    }
    get salario(){
        return this._salario;
    }
    get email(){
        return this._email;
    }
    get senha(){
        return this._senha;
    }

    set nome(nome){
        this._nome = nome;
    }
    set cargo(cargo){
        this._cargo = cargo;
    }
    set id(id){
        this._id = id;
    }
    set salario(salario){
        this._salario = salario;
    }
    set email(email){
        this._email = email;
    }
    set senha(senha){
        this._senha = senha;
    }
}