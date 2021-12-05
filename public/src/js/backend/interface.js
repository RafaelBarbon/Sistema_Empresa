
function login_adm(){
    var log = document.getElementById("username-5b0a").value;
    var sen = document.getElementById("password-5b0a").value;
    
    if(loginADM(log, sen)){
        //Troca pagina
    }
    else{
        // email ou senha incorreta
    }
}