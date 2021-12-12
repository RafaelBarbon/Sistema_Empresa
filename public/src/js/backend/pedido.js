class Pedido{
    constructor(numero, quantidade, data,cnpj){
        this._numero = numero;
        this._quantidade = quantidade;
        this._data = data;
        this._cnpj = cnpj;
    }
    get numero(){
        return this._numero;
    }
    set numero(numero){
        this._numero = numero;
    }
    get cnpj(){
        return this._cnpj;
    }
    set cnpj(cnpj){
        this._cnpj = cnpj;
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
        return "Pedido nº" + this._numero + ": Quantidade: " + this._quantidade + " m³ Data: " + this._data + ".\n\n";
    }
}

var pedido = new Pedido(null,null,null,null);

// Funções de pedidos para um cliente

async function fazer_pedido(cnpj, qnt,data){
    var ret = window.database.insert_pedido(cnpj,qnt,data).then(function(ret){return ret;});
    //return true;
    //return false;
    var retorno = await ret;
    return retorno;
}

async function pedidos_em_aberto(cnpj){
    var infos = "";
    var ret = window.database.select_pedidos(cnpj).then(function(pedidos){
        //console.log(pedidos);
        for(ped in pedidos){
            //console.log(pedidos[ped]);
            //TODO: Rever atribuição
            pedido._data = (pedidos[ped].Data);
            pedido._numero = (ped);
            pedido._quantidade = (pedidos[ped].Quantidade);
            infos += pedido.info_do_pedido();
            //console.log(infos);
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
        //console.log(pedidos);
        for(ped in pedidos){
            pedido.data = (pedidos[ped].Data);
            pedido.numero = (ped);
            pedido.quantidade = (pedidos[ped].Quantidade);
            infos += pedido.info_do_pedido();
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
    var ret = window.database.get_clientes().then(function(clientes){
        //Função anonima que retorna os pedidos de cada cliente
        var retrn = async function(clien){
            var r = window.database.select_pedidos(clien).then(function(pedidos){
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
            })
        }
        return true;
    });
    var retorno = await ret;
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
            //console.log(ree);
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


    //console.log(retorno);
    return retorno;
}

async function atender_ped(num){
    var ret = window.database.busca_pedido(num).then(function(cnpj){
        if(cnpj != null){
            pedido._cnpj = cnpj;
            return true;
        }else{
            return false;
        }
    }).catch(function(){return false;})
    retorno = await ret;

    var ret2 = window.database.select_pedidos(pedido.cnpj).then(function(pedidos){
            pedido.data = (pedidos[num].Data);
            pedido.numero = (num);
            pedido.quantidade = (pedidos[num].Quantidade);
            return true;
        })
        .catch(function(){/*console.log("Catch do buscapedido");*/return false;});
    var retorno2 = await ret2;
    if(retorno2){
    var ret3 = window.database.remove_pedido(num, pedido.cnpj).then(function(ree){return ree});
        //remove_pedido(cnpj, num);
        var retorno3 = await ret3;
        if(retorno3){
            var ret4 = window.database.insert_historicopedido(pedido.cnpj, pedido.numero, pedido.quantidade, pedido.data).then(
                function(retornoo){
                    return retornoo;
                })
                .catch(function(){/*console.log("Catch do removepedido");*/return false;});
            var retorno4 = await ret4;
            return retorno4;
        }
    }
}

async function excluir_ped(num){
    var ret = window.database.busca_pedido(num).then(function(cnpj){
        if(cnpj != null){
            pedido._cnpj = cnpj;
            return true;
        }else{
            return false;
        }
    }).catch(function(){return false;})
    retorno = await ret;
    var ret2 = window.database.remove_pedido(num, pedido.cnpj).then(function(ree){return ree});
    var retorno2 = await ret2;
    return retorno2;
}