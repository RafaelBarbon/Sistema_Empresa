// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-analytics.js";
import {getDatabase, ref, get, set, child, update, remove} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-database.js";

class Database{
    constructor(){
        const firebaseConfig = {
            apiKey: "AIzaSyAxNeq8jF3tgNcFNrUEZvj7M9nkxeqGW-0",
            authDomain: "mrbmadeiras-25db8.firebaseapp.com",
            databaseURL: "https://mrbmadeiras-25db8-default-rtdb.firebaseio.com",
            projectId: "mrbmadeiras-25db8",
            storageBucket: "mrbmadeiras-25db8.appspot.com",
            messagingSenderId: "825841875347",
            appId: "1:825841875347:web:3b03279f3ddd2531969066",
            measurementId: "G-QCPV70M0JM"
        };
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        //const analytics = getAnalytics(app);
    }

    async get_clientes(){
        const db2 = ref(getDatabase());
        var ret = get(child(db2,"Clientes"))//retorna uma promise
                .then((snapshot)=>{
                    if(snapshot.exists()){
                        //console.log(snapshot.val());
                        return snapshot.val();
                    }
                    else{
                        alert("Dado nao encontrado");
                    }
                })
                .catch((error)=>{alert(error)});
            var resul = await ret;
            return resul;
    }

    async get_adm(op){//OK
        const db2 = ref(getDatabase());
        var ret;
        //if(op == 1){
            ret = get(child(db2,"Admlog"))//retorna uma promise
                .then((snapshot)=>{
                    if(snapshot.exists()){
                        return snapshot.val();
                    }
                    else{
                        alert("Dado nao encontrado");
                    }
                })
                .catch((error)=>{alert(error)});
            var resul = await ret;
            return resul;
        /*}else{
            get(child(db2,"Admlog/Senha"))
                .then((snapshot)=>{
                    if(snapshot.exists()){
                        var ret = snapshot.val();
                    }
                    else{
                        alert("Dado nao encontrado");
                    }
                })
                .catch((error)=>{alert(error)});
            var resul = await ret;
            return resul;
        }*/
    }
//gera
    /*
    insert_gera(nota, pedido){
    const db = getDatabase();
    set(ref(db, "gera/" + num),{
        Nota: nota,
        Pedido: pedido
    })
        .then(function(){return true;})
        .catch(function(error){return false;});
    }

    select_gera(num){ ///funciona
        const db2 = ref(getDatabase());
        get(child(db2,"gera/" + num))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    return snapshot.val();
                }
                else{
                    alert("Dado nao encontrado");
                }
            })
            .catch((error)=>{alert(error)});
    }

    update_gera(nota, pedido){
    const db = getDatabase();
    update(ref(db, "gera/" + num),{
        Nota: nota,
        Pedido: pedido
    })
        .then(function(){return true;})
        .catch(function(error){return false;});
    }

    remove_gera(num){
    const db = getDatabase();
    remove(ref(db, "gera/" + num))
        .then(function(){return true;})
        .catch(function(error){return false;});
    }
*/

 /*   //realiza pedido
    insert_realizapedido(num, cod, cnpj){
    const db = getDatabase();
    set(ref(db, "realizapedidos/" + num),{
        Cod: cod,
        Cnpj: cnpj
    })
        .then(function(){return true;})
        .catch(function(error){return false;});
    }

    select_realizaoedido(num){ ///funciona
        const db2 = ref(getDatabase());
        get(child(db2,"realizapedidos/" + num))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    return snapshot.val();
                }
                else{
                    alert("Dado nao encontrado");
                }
            })
            .catch((error)=>{alert(error)});
    }

    update_realizapedido(num, cod, cnpj){
    const db = getDatabase();
    update(ref(db, "realizapedidos/" + num),{
        Cod: cod,
        Cnpj: cnpj
    })
        .then(function(){return true;})
        .catch(function(error){return false;});
    }

    remove_realizapedido(num){
    const db = getDatabase();
    remove(ref(db, "realizapedidos/" + num))
        .then(function(){return true;})
        .catch(function(error){return false;});
    }
*/
    //cliente

    async get_cliente(cnpj){//OK
        const db2 = ref(getDatabase());
        var ret;
        ret = get(child(db2,"Clientes/" + cnpj))//retorna uma promise
            .then((snapshot)=>{
                if(snapshot.exists()){
                    return snapshot.val();
                }
                else{
                    return false;
                }
            })
            .catch((error)=>{alert(error)});
        var resul = await ret;
        return resul;
    }

    async insert_cliente(num, nome, senha, email, tel, endereco){//OK
        const db = getDatabase();
        set(ref(db, "Clientes/" + num),{
            Email: email,
            Senha: senha,
            Telefone: tel,
            Endereco: endereco,
            Nome: nome
        })
            .then(function(){return true;})
            .catch(function(error){return false;});
    }
/*
    select_cliente(num){ ///funciona
        const db2 = ref(getDatabase());
        get(child(db2,"clientes/" + num))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    return snapshot.val();
                }
                else{
                    alert("Dado nao encontrado");
                }
            })
            .catch((error)=>{alert(error)});
    }
*/
    update_cliente(num, nome, senha, email, tel, endereco){
        const db = getDatabase();
        update(ref(db, "Clientes/" + num),{//OK
            Email: email,
            Senha: senha,
            Telefone: tel,
            Endereco: endereco,
            Nome: nome
        })
            .then(function(){return true;})
            .catch(function(error){return false;});
    }

    remove_cliente(num){//OK
        const db = getDatabase();
        remove(ref(db, "Clientes/" + num))
            .then(function(){return true;})
            .catch(function(error){return false;});
    }


    //madeira

    async get_madeira(){
        const db2 = ref(getDatabase());
        var ret = get(child(db2,"Madeira"))//retorna uma promise
                .then((snapshot)=>{
                    if(snapshot.exists()){
                        return snapshot.val();
                    }
                    else{
                        alert("Dado nao encontrado");
                    }
                })
                .catch((error)=>{alert(error)});
            var resul = await ret;
            return resul;
    }

    async insert_madeira(num, preco, idade, tipo){//OK
        const db = getDatabase();
        var ret = set(ref(db, "Madeira/" + num),{
            Tipo: tipo,
            Idade: idade,
            Valor: preco
        })
            .then(function(){return true;})
            .catch(function(error){return false;});
            var retorno = await ret;
            return retorno;
    }

    /*
    select_madeira(num){ ///funciona
        const db2 = ref(getDatabase());
        get(child(db2,"Madeira/" + num))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    return snapshot.val();
                }
                else{
                    alert("Dado nao encontrado");
                }
            })
            .catch((error)=>{alert(error)});
    }
*/
    async update_madeira(num, preco, idade, tipo){//OK
        const db = getDatabase();
        var ret = update(ref(db, "Madeira/" + num),{
            Tipo: tipo,
            Idade: idade,
            Valor: preco
        })
            .then(function(){return true;})
            .catch(function(error){return false;});
            var retorno = await ret;
            return retorno;
    }

    async remove_madeira(num){//OK
    const db = getDatabase();
    var ret = remove(ref(db, "Madeira/" + num))
        .then(function(){return true;})
        .catch(function(error){return false;});
        var retorno = await ret;
        return retorno;
    }



    async select_pedidos_historico(cnpj){ ///OK(FALTA MANIPULAR)
        const db = getDatabase();
        var ret = get(child(ref(db),"Clientes/" + cnpj+"/Historicopedidos/")).then(function(snapshot){
                if(snapshot.exists()){
                    //console.log(snapshot.val());
                    return snapshot.val();
                }
            });
        var resul = await ret;
        return resul;
    }

    //Historico pedidos
    async insert_historicopedido(cnpj, num, quantidade, data){//OK
    const db = getDatabase();

    var ret = set(ref(db, "Clientes/" + cnpj +"/Historicopedidos/" + num),{
        Quantidade: quantidade, 
        Data: data
    })
        .then(function(){return true;})
        .catch(function(){return false;});
        var retorno = await ret;
        return retorno;
    }

    select_historicopedidoALL(num){ ///OK
        const db2 = ref(getDatabase());
        //this.insert_pedido('10','20');
        get(child(db2,"Clientes/"))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    var out = snapshot.val();
                    var txt = "";
                    for(var element in out){//Para cada cliente(CNPJ)
                        //
                        txt += `Cliente(CNPJ)  ${element}`;
                        pedidos = element.Historicopedidos
                        for(var pedido in pedidos){
                            txt += `\n - Número do pedido ${pedido} - Data: ${pedidos[pedido].Data} - Quantidade: ${pedidos[pedido].Quantidade} m³.\n`;
                        }
                    }
                    var texto = document.getElementById("adm-textarea");
                    texto.value = txt;
                }
                else{
                    alert("Dado nao encontrado");
                }
            })
            .catch((error)=>{alert(error);});
        


        
        //VERSÃO ANTERIOR
        /*const db2 = ref(getDatabase());
        get(child(db2,"pedidos/" + num))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    var out = snapshot.val();
                    var txt = "";
                    for(var element in out){
                        txt += `Número do pedido ${element} - Data: ${out[element].Data} - Duração: ${out[element].Quantidade} m³.\n`;
                    }
                    var texto = document.getElementById("adm-textarea");
                    texto.value = txt;
                }
                else{
                    alert("Dado nao encontrado");
                }
            })
            .catch((error)=>{alert(error)});
            */

    }
/*
    update_historicopedido(num, valor){
    const db = getDatabase();
    update(ref(db, "historicopedidos/" + num),{
        Valor: valor
    })
        .then(function(){return true;})
        .catch(function(error){return false;});
    }

    remove_historicopedido(num){
    const db = getDatabase();
    remove(ref(db, "historicopedidos/" + num))
        .then(function(){return true;})
        .catch(function(error){return false;});
    }
*/
    //Nota_Fiscal(Deverá ser Inserida depois adicionar o pedido )
    //Cliente -> Historico pedido -> pedido(Numero) -> Insere a nota fiscal
    insert_notafiscal(cnpj, numpedido, valortotal, quantidade, num, data, valormetro){//OK
    const db = getDatabase();
    set(ref(db, "Cliente/" + cnpj + "/Historicopedidos" + "/Notafiscal/" + num),{
        ValorTotal: valortotal,///REVER
        Quantidade: quantidade,
        Data: data,
        ValorMetro: valormetro
    })
        .then(function(){return true;})
        .catch(function(error){return false;});
    }

    /*
    select_notafiscal(num){ ///funciona
        const db2 = ref(getDatabase());
        get(child(db2,"notafiscal/" + num))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    return snapshot.val();
                }
                else{
                    alert("Dado nao encontrado");
                }
            })
            .catch((error)=>{alert(error)});
    }
    */

    update_notafiscal(cnpj, numpedido, valortotal, quantidade, num, data, valormetro){//OK
    const db = getDatabase();
    update(ref(db, "Clientes/Historicopedidos/" + numpedido + "/Notafiscal/" + num),{
        ValorTotal: valortotal,
        Quantidade: quantidade,
        Data: data,
        ValorMetro: valormetro
    })
        .then(function(){return true;})
        .catch(function(error){return false;});
    }
    /*
    remove_notafiscal(num){
    const db = getDatabase();
    remove(ref(db, "notafiscal/" + num))
        .then(function(){return true;})
        .catch(function(error){return false;});
    }
    */

    async select_index(){
        const db = getDatabase();
        var ret = get(child(ref(db),"Index/")).then(function(snapshot){
                if(snapshot.exists()){
                    return snapshot.val();
                }
            });
        var resul = await ret;
        return resul;
    }

    async update_index(num){
        const db = getDatabase();
        update(ref(db, "Index"),{
            Valor: num
        })
            .then(function(){return true;})
            .catch(function(error){return false;});
    }

    //Pedidos
    async insert_pedido(cnpj, quantidade, data){
        const db = getDatabase();
        var index;
        var ret = this.select_index().then(function(ind){
            //console.log(ind);
            index = ind.Valor;
            return true;
        });
        var retorno = await ret;
        if(retorno){
            var ret2 = set(ref(db, "Clientes/" + cnpj + "/Pedidos/" + index),{ // Cria pedido com base no index
                Quantidade: quantidade,
                Data: data
            }).then(function(){
                    return true;
            })
            var retorno3 = await ret2;
            if(retorno3){
                var valor = index + 1;
                update(ref(db, "Index"),{
                    Valor: valor
                })
                return true;
            }
        }
    }


    select_pedidosALL(){// OK 
        const db2 = ref(getDatabase());
        //this.insert_pedido('10','20');
        get(child(db2,"Clientes/"))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    var out = snapshot.val();
                    var txt = "";
                    for(var element in out){//Para cada cliente(CNPJ)
                        //
                        txt += `Cliente(CNPJ)  ${element}`;
                        pedidos = element.Pedidos
                        for(var pedido in pedidos){
                            txt += `\n - Número do pedido ${pedido} - Data: ${pedidos[pedido].Data} - Quantidade: ${pedidos[pedido].Quantidade} m³.\n`;
                        }
                    }
                    var texto = document.getElementById("adm-textarea");
                    texto.value = txt;
                }
                else{
                    alert("Dado nao encontrado");
                }
            })
            .catch((error)=>{alert(error);});


        /*Vrs. anterior
        const db2 = ref(getDatabase());
        //this.insert_pedido('10','20');
        get(child(db2,"pedidos/"))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    var out = snapshot.val();
                    var txt = "";
                    for(var element in out){
                        txt += `Número do pedido ${element} - Data: ${out[element].Data} - Quantidade: ${out[element].Quantidade} m³.\n`;
                    }
                    var texto = document.getElementById("adm-textarea");
                    texto.value = txt;
                }
                else{
                    alert("Dado nao encontrado");
                }
            })
            .catch((error)=>{alert(error);});
            */
    }

    async select_pedidos(cnpj){ ///OK(FALTA MANIPULAR)
        const db = getDatabase();
        var ret = get(child(ref(db),"Clientes/" + cnpj+"/Pedidos")).then(function(snapshot){
                if(snapshot.exists()){
                    //console.log(snapshot.val());
                    return snapshot.val();
                }else{
                    return false;
                }
            })
            .catch(function(){/*console.log("Catch do select)pedidos");*/return false;});
        var resul = await ret;
        //console.log(resul);
        return resul;
    }

    update_pedido(cnpj, num, duracao, data){//OK
        const db = getDatabase();
        update(ref(db, "Clientes" + cnpj + "/Pedidos/" + num),{
            Duracao: duracao,
            Data: data
        })
            .then(function(){return true;})
            .catch(function(error){return false;});
    }


    async remove_pedido(num, cnpj){//OK
        const db = getDatabase();
        //var valor;
        //var ret = window.database.busca_pedido(num).then(function(cnpj){

        var ret = remove(ref(db, "Clientes/" + cnpj + "/Pedidos/" + num))
        .then(function(){
            return true;
        })
        .catch(function(error){return false;});
        //var retorno2 = await ret2;
        //return ret2;
        var retorno = await ret;
        /*if(this.select_pedidos(num)){
            this.insert_historicopedido(num);
        }*/
        return retorno;
        
    }

    async busca_pedido(num){//Retorna o cnpj do pedido
        const db = getDatabase();
        var rett = get(child(ref(db),"Clientes/")).then(function(snapshot){
                if(snapshot.exists()){
                    var c = null;
                    //console.log(snapshot.val());
                    var client = snapshot.val();
                    for(cliente in client){
                        //var c = clientes[cliente];
                        ///var rettp;
                        //console.log(client[cliente].Pedidos[num]);
                        if(client[cliente].Pedidos != null && client[cliente].Pedidos[num] != null){
                            c = cliente;
                        }else{
                            c = c;
                        }
                    }
                    return c;
                }else{
                    return null;
                }
            });
        var result = await rett;
        return result;
    }
}
/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "../../../../node_modules/@firebase/app-compat/dist/app-compat.d.ts";
import { getAnalytics } from "../../../../node_modules//@firebase/analytics/dist/analytics-public.d.ts";
import { getDatabase, ref, set } from "../../../../node_modules/@firebase/database/dist/src/api/Database.d.ts";
import { getFirestore, collection, getDocs } from "../../../../node_modules/firebase/@firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxNeq8jF3tgNcFNrUEZvj7M9nkxeqGW-0",
  authDomain: "mrbmadeiras-25db8.firebaseapp.com",
  databaseURL: "https://mrbmadeiras-25db8-default-rtdb.firebaseio.com",
  projectId: "mrbmadeiras-25db8",
  storageBucket: "mrbmadeiras-25db8.appspot.com",
  messagingSenderId: "825841875347",
  appId: "1:825841875347:web:3b03279f3ddd2531969066",
  measurementId: "G-QCPV70M0JM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

// Get a list of cities from your database
async getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

async get_adm() {
  const admCol = collection(db, 'adm');
  const admSnapshot = await getDocs(admCol);
}
  const adm = admSnapshot.docs.map(doc => doc.data());
  return adm;
*/

window.database = new Database();