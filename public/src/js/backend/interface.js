function login_adm(){
    var log = document.getElementById("username-adm").value;
    var sen = document.getElementById("password-adm").value;

    if(loginADM(log, sen)){
        //Troca pagina
    }
    else{
        // email ou senha incorreta
    }
}

function login_cliente(){
    var log = document.getElementById("username-cliente").value;
    var sen = document.getElementById("password-cliente").value;

    if(loginCliente(log, sen)){
        //Troca pagina
    }
    else{
        // email ou senha incorreta
    }
}

function seja_nosso_cliente(){
    var nome = document.getElementById("name-3b9a").value;
    var email = document.getElementById("email-3b9a").value;
    var msg = document.getElementById("message-3b9a").value;

    if(cadastro(nome, email, msg)){
        //Troca pagina
    }
    else{
        // email ou senha incorreta
    }
}