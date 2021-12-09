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

function fazer_pedido(qnt,data){
    // TODO criar novo pedido no banco de dados
    window.database.insert_pedido(m3,data); // TODO insere no banco de dados
    return true;
    return false;
}

function pedidos_em_aberto(){
    //TODO coleta do banco de dados os pedidos de um cliente
    var pedidos;
    var infos = "";
    /*
    A cada pedido, substitui as infos do obj e chama o método de retorno das infos de um pedido
    */
    infos += pedido.info_do_pedido();
    return infos;
}

function pedidos_historico(){
    //TODO coleta do banco de dados os pedidos de um cliente
    var pedidosH;
    var infos = "";
    /*
    A cada pedido, substitui as infos do obj e chama o método de retorno das infos de um pedido
    */
    infos += pedido.info_do_pedido();
    return infos;
}

// Funções de pedidos para ADM

function listar_pedidos_abertos(){
    var pedidosA;
    // TODO coleta do banco de dados todos os pedidos em aberto de todos os clientes
    var infos = "";
    /*
    A cada pedido lido do banco, atualiza o OBJ e chama-se o método para imprimir as informações a respeito do mesmo
    */
    infos += pedido.info_do_pedido();
    return infos;
}

function listar_pedidos_fechados(){
    var pedidosH;
    // TODO coleta do banco de dados todos os pedidos fechados de todos os clientes
    var infos = "";
    /*
    A cada pedido lido do banco, atualiza o OBJ e chama-se o método para imprimir as informações a respeito do mesmo
    */
    infos += pedido.info_do_pedido();
    return infos;
}

function atender_ped(num){
    var ped; // TODO coletar do banco de dados o pedido em questão e atualizar o OBJ
    // TODO remover do banco de dados o pedido em questão
    // TODO adicionar no banco de dados na tabela de histórico o pedido
    return true;
    return false;
}

function excluir_ped(num){
    var ped; // TODO coletar o pedido (ver se existe)
    // TODO remover o pedido se existir
    return true;
    return false;
}