let database = window.database;
function login_adm(){
    var log = document.getElementById("adm-email").value;
    var sen = document.getElementById("adm-password").value;

    if(ADM.loginADM(log, sen)){
        //Troca vizualização
        document.getElementById("admlogin").style.visibility = "hidden";
        document.getElementById("admswap").style.visibility = "visible";

    }
    else{
        alert("Email ou senha incorretos");
    }
}

function login_cliente(){
    var log = document.getElementById("cliente_CNPJ").value;
    var sen = document.getElementById("cliente_senha").value;
    if(cliente.loginCliente(log, sen)){

        //Troca visualização
        document.getElementById("logincli").style.visibility = "hidden";
        document.getElementById("swapcli").style.visibility = "visible";
    }
    else{
        alert("CNPJ ou senha incorretos");
    }
}

// Cadastro de cliente
function seja_nosso_cliente(){
    var nome = document.getElementById("cadastro-nome").value;
    var email = document.getElementById("cadastro-email").value;
    var CNPJ = document.getElementById("cadastro-CNPJ").value;
    var endereco = document.getElementById("cadastro-endereco").value;
    var tel = document.getElementById("cadastro-tel").value;
    var senha = document.getElementById("cadastro-senha").value;
    var senhaconf = document.getElementById("cadastro-senhaconf").value;

    if(senha == senhaconf){
        if(cadastro(nome, email, CNPJ,endereco,tel,senha,senhaconf)){
            //Troca pagina
        }
        else{
            alert("Dados incorretos ou já existentes.");
        }
    }
    else{
        alert("Senhas não são iguais, tente novamente.");
    }
}

// Funções ADM (logadas)

// Textarea - exibição
function listar_pedidosA(){
    var painel = document.getElementById("adm-textarea");
    console.log("Retorno:"+ window.database.select_pedidosALL());//Nao fuciona retornar

    //console.log(pedidos_aberto);
    //texto.value = pedidos_aberto;
}

function listar_clientes(){
    var painel = document.getElementById("adm-textarea");
    console.log("Retorno:"+ window.database.select_pedidosALL());//Nao fuciona retornar
}

function listar_madeira(){
    var painel = document.getElementById("adm-textarea");
    console.log("Retorno:"+ window.database.select_pedidosALL());//Nao fuciona retornar
}

function listar_pedidosH(){
    var painel = document.getElementById("adm-textarea");
    console.log("Retorno:"+ window.database.select_pedidosALL());//Nao fuciona retornar
}

// Manipulação dos pedidos
function atender_pedido(){
    var num = document.getElementById("adm-atender_pedido").value;
}

function excluir_pedido(){
    var num = document.getElementById("adm-excluir_pedido").value;
    console.log("foi");
    window.database.remove_pedido(num);
}

// Manipulação das madeiras
function madeira_add(){
    var num = document.getElementById("adm-num_madeira_add").value;
    var preco = document.getElementById("adm-preco_madeira_add").value;
    var tipo = document.getElementById("adm-tipo_madeira_add").value;
    var idade = document.getElementById("adm-idade_madeira_add").value;

}

function madeira_att(){
    var num = document.getElementById("adm-num_madeira_att").value;
    var preco = document.getElementById("adm-preco_madeira_att").value;
    var tipo = document.getElementById("adm-tipo_madeira_att").value;
    var idade = document.getElementById("adm-idade_madeira_att").value;

}

function madeira_del(){
    var num = document.getElementById("adm-num_madeira_del").value;
}

// Funções do cliente (logadas)

function realizar_pedido(){
    var m3 = document.getElementById("cliente-m3_pedido").value;
    var data = document.getElementById("cliente-data_pedido").value;
    window.database.insert_pedido(m3,data);
}

// Textarea
function pedidos_abertos(){
    var painel = document.getElementById("cliente-pedidosA");
}

// Textarea
function pedidos_concluidos(){
    var painel = document.getElementById("cliente-pedidosH");
}