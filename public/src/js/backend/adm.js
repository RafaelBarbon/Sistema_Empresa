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

    async loginADM(email,senha){
        let db = window.database;
        //var user = new Adm(email,senha);
        //var emaildb, senhadb;
        var resul = db.get_adm().then(function(response){ 
            if(email == response.Email && senha == response.Senha){
                ADM._email = email;
                ADM._senha = senha;
                return true;
            }
            else{
                return false;
            }
        }); 
        var ret = await resul;
        return ret;
    }
}

var ADM = new Adm(null,null);