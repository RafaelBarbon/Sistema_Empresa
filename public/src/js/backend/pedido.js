class Pedido{
    constructor(numero, quantidade, data){
        this._numero = numero;
        this._quantidade = quantidade;
        this._data = data;
    }
    get numero(){
        return this._numero;
    }
    set numero(numero){
        this._numero = numero;
    }
    get quantidade(){
        return this._quantidade;
    }
    set quantidade(quantidade){
        this._quantidade = quantidade;
    }
    get data(){
        return this._data;
    }
    set data(data){
        this._data = data;
    }
    info_do_pedido(){
        return "Pedido nº" + this._numero + ": Quantidade: " + this._quantidade + " m³ Data: " + this._data + ".\n";
    }
}

var pedido = new Pedido(null,null,null);

// Funções de pedidos para um cliente

function fazer_pedido(cnpj, qnt,data){
    // TODO criar novo pedido no banco de dados
    window.database.insert_pedido(cnpj,qnt,data); // TODO insere no banco de dados
    return true;
    return false;
}

async function pedidos_em_aberto(cnpj){
    var infos = "";
    var ret = window.database.select_pedidos(cnpj).then(function(pedidos){
        console.log(pedidos);
        for(ped in pedidos){
            console.log(pedidos[ped]);
            //TODO: Rever atribuição
            pedido._data = (pedidos[ped].Data);
            pedido._numero = (ped);
            pedido._quantidade = (pedidos[ped].Quantidade);
            infos += pedido.info_do_pedido();
            console.log(infos);
        }
        return infos;
    })
    var retorno = await ret;
    return retorno;
    /*
    A cada pedido, substitui as infos do obj e chama o método de retorno das infos de um pedido
    */
    //infos += pedido.info_do_pedido();
    //return infos;
}

async function pedidos_historico(cnpj){
    var infos = "";
    var ret = window.database.select_pedidos_historico(cnpj).then(function(pedidos){
        console.log(pedidos);
        for(ped in pedidos){
            console.log(pedidos[ped]);
            //TODO: Rever atribuição
            pedido._data = (pedidos[ped].Data);
            pedido._numero = (ped);
            pedido._quantidade = (pedidos[ped].Quantidade);
            infos += pedido.info_do_pedido();
            console.log(infos);
        }
        return infos;
    })
    var retorno = await ret;
    return retorno;
    /*
    A cada pedido, substitui as infos do obj e chama o método de retorno das infos de um pedido
    */
    //infos += pedido.info_do_pedido();
    //return infos;
}

// Funções de pedidos para ADM

async function listar_pedidos_abertos(){
    var pedidosA;
    // TODO coleta do banco de dados todos os pedidos em aberto de todos os clientes
   
    var ret = window.database.get_clientes().then(function(clientes){
        //Função anonima que retorna os pedidos de cada cliente
        var retrn = async function(clien){
            var r = window.database.select_pedidos(clien).then(function(pedidos){
                //console.log(pedidos);
                var inf = "";
                for(ped in pedidos){
                    pedido._data = pedidos[ped].Data;
                    pedido._numero = ped;
                    pedido._quantidade = pedidos[ped].Quantidade;
                    inf += pedido.info_do_pedido();
                }
                return inf;
            }) 
            var ree = await r
            console.log(ree);
            return ree
        }

        var infos = "";
        var f = async function(clientes){

        }
        var painel = document.getElementById("adm-textarea");
        painel.value = "";
        for(cliente in clientes){
            retrn(cliente).then(function(valor){
                var painel = document.getElementById("adm-textarea");
                painel.value += valor;
                //console.log("Cliente:" + cliente + valor);
                //infos += valor;
            })
            //await t;
        }
        return true;
    });
    var retorno = await ret;

    //retorno.than()


    console.log(retorno);
    return retorno;
    /*
    A cada pedido lido do banco, atualiza o OBJ e chama-se o método para imprimir as informações a respeito do mesmo
    */
    
}

async function listar_pedidos_fechados(){
    var pedidosA;
    // TODO coleta do banco de dados todos os pedidos em aberto de todos os clientes
   
    var ret = window.database.get_clientes().then(function(clientes){
        //Função anonima que retorna os pedidos de cada cliente
        var retrn = async function(clien){
            var r = window.database.select_pedidos_historico(clien).then(function(pedidos){
                //console.log(pedidos);
                var inf = "";
                for(ped in pedidos){
                    pedido._data = pedidos[ped].Data;
                    pedido._numero = ped;
                    pedido._quantidade = pedidos[ped].Quantidade;
                    inf += pedido.info_do_pedido();
                }
                return inf;
            }) 
            var ree = await r
            console.log(ree);
            return ree
        }
        var painel = document.getElementById("adm-textarea");
        painel.value = "";
        for(cliente in clientes){
            retrn(cliente).then(function(valor){
                var painel = document.getElementById("adm-textarea");
                painel.value += valor;
                //console.log("Cliente:" + cliente + valor);
                //infos += valor;
            })
            //await t;
        }
        return true;
    });
    var retorno = await ret;

    //retorno.than()


    console.log(retorno);
    return retorno;
}

async function atender_ped(num){//ERRO
    var ped; 
    var ret = window.database.busca_pedido(num).then(function(cnpj){
        if(cnpj != null){
            console.log("CNPJ:" + cnpj);
            window.database.select_pedidos(cnpj).then(function(pedidos){
                //console.log(pedidos);
                //console.log("Teste");
                //console.log(pedidos[num]);
                pedido._data = (pedidos[num].Data);
                pedido._numero = (num);
                pedido._quantidade = (pedidos[num].Quantidade);
                //insert_historicopedido(cnpj, num, pedido.quantidade(), pedido.data());
                return true;
            })
            .catch(function(){console.log("Catch do buscapedido");return false;});
            //remove_pedido(cnpj, num);
        }else{
            return false;
        }
    }).catch(function(){return false;})

    retorno = await ret;
    
    //remove_pedido(cnpj, num);
    //insert_historicopedido(cnpj, num, qtdade, data);
    
    
    // TODO coletar do banco de dados o pedido em questão e atualizar o OBJ
    // TODO remover do banco de dados o pedido em questão
    // TODO adicionar no banco de dados na tabela de histórico o pedido
    //return true;
    //return false;
    console.log("Fim");
    return retorno;
}

function excluir_ped(num){
    var ped; // TODO coletar o pedido (ver se existe)
    // TODO remover o pedido se existir
    


    return true;
    return false;
}