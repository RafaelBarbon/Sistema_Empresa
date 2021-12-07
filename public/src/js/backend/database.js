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
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

    //gera
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


    //realiza pedido
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

    //cliente
    insert_cliente(num, nome, senha, email, tel, endereco){
        const db = getDatabase();
        set(ref(db, "clientes/" + num),{
            Email: email,
            Senha: senha,
            Telefone: tel,
            Endereco: endereco,
            Nome: nome
        })
            .then(function(){return true;})
            .catch(function(error){return false;});
    }

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

    update_cliente(num, nome, senha, email, tel, endereco){
        const db = getDatabase();
        update(ref(db, "clientes/" + num),{
            Email: email,
            Senha: senha,
            Telefone: tel,
            Endereco: endereco,
            Nome: nome
        })
            .then(function(){return true;})
            .catch(function(error){return false;});
    }

    remove_cliente(num){
        const db = getDatabase();
        remove(ref(db, "clientes/" + num))
            .then(function(){return true;})
            .catch(function(error){return false;});
    }


    //madeira
    insert_madeira(num, preco, idade, tipo){
    const db = getDatabase();
    set(ref(db, "madeira/" + num),{
        Preco: preco,
        Idade: idade,
        Tipo: tipo
    })
        .then(function(){return true;})
        .catch(function(error){return false;});
    }

    select_madeira(num){ ///funciona
        const db2 = ref(getDatabase());
        get(child(db2,"madeira/" + num))
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

    update_madeira(num, preco, idade, tipo){
    const db = getDatabase();
    update(ref(db, "madeira/" + num),{
        Preco: preco,
        Idade: idade,
        Tipo: tipo
    })
        .then(function(){return true;})
        .catch(function(error){return false;});
    }

    remove_madeira(num){
    const db = getDatabase();
    remove(ref(db, "madeira/" + num))
        .then(function(){return true;})
        .catch(function(error){return false;});
    }

    //Historico pedidos
    insert_historicopedido(num, valor){
    const db = getDatabase();
    set(ref(db, "historicopedidos/" + num),{
        Valor: valor
    })
        .then(function(){return true;})
        .catch(function(error){return false;});
    }

    select_historicopedido(num){ ///funciona
        const db2 = ref(getDatabase());
        get(child(db2,"pedidos/" + num))
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

    //Nota_Fiscal
    insert_notafiscal(valortotal, quantidade, num, data, valormetro){
    const db = getDatabase();
    set(ref(db, "notafiscal/" + num),{
        ValorTotal: valortotal,
        Quantidade: quantidade,
        Data: data,
        ValorMetro: valormetro
    })
        .then(function(){return true;})
        .catch(function(error){return false;});
    }

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

    update_notafiscal(valortotal, quantidade, num, data, valormetro){
    const db = getDatabase();
    update(ref(db, "notafiscal/" + num),{
        ValorTotal: valortotal,
        Quantidade: quantidade,
        Data: data,
        ValorMetro: valormetro
    })
        .then(function(){return true;})
        .catch(function(error){return false;});
    }

    remove_notafiscal(num){
    const db = getDatabase();
    remove(ref(db, "notafiscal/" + num))
        .then(function(){return true;})
        .catch(function(error){return false;});
    }

    //Pedidos
    insert_pedido(num, duracao, data){
        const db = getDatabase();
        set(ref(db, "pedidos/" + num),{
            Duracao: duracao,
            Data: data
        })
            .then(function(){return true;})
            .catch(function(error){return false;});
    }

    select_pedidosALL(){ ///funciona
        const db2 = ref(getDatabase());
        let ret = get(child(db2,"pedidos/"))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    var out = snapshot.val();
                    console.log(out);
                    //return out;

                    var texto = document.getElementById("adm-textarea");
                    texto.value = "Data:" + out[1].Data;////Rever 
                    return out[1].Data;
                }
                else{
                    alert("Dado nao encontrado");
                }
            })
            .catch((error)=>{alert(error); console.log("ERRO")});
        //return null;
        //console.log(ret.getValue());
        //return info2;
    }

    select_pedidos(num){ ///funciona
        const db2 = ref(getDatabase());
        get(child(db2,"pedidos/" + num))
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

    update_pedido(num, duracao, data){
        const db = getDatabase();
        update(ref(db, "pedidos/" + num),{
            Duracao: duracao,
            Data: data
        })
            .then(function(){return true;})
            .catch(function(error){return false;});
    }

    remove_pedido(num){
        const db = getDatabase();
        remove(ref(db, "pedidos/" + num))
            .then(function(){return true;})
            .catch(function(error){return false;});
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