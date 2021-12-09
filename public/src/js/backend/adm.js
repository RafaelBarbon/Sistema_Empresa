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

    loginADM(email,senha){
        var user = new Adm(email,senha);
        var emaildb, senhadb;
        //var userbd = get_adm();// TODO Coletar do banco de dados
        if(email == emailbd && senha == senhabd){
            this._email = email;
            this._senha = senha;
            return true;
        }
        return false;
    }
}

var ADM = new Adm(null,null);