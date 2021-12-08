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
        //var userbd = get_adm();// Coletar do banco de dados
        return true;
        return false;




       // Criar um novo obj
       // Comparar os objs
    }
}

var ADM = new Adm();