class Adm{
    constructor(email, senha){
        this._email = email;
        this._senha = senha;
    }
    
    get email(){
        return this._email;
    }
    get senha(){
        return this._senha;
    }
    set email(email){
        this._email = email;
    }
    set senha(senha){
        return this._senha = senha;
    }
}