// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-analytics.js";
/*
function select_pedido(num){ ///funciona
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
*/

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
//const analytics = getAnalytics(app);
import {getDatabase, ref, get, set, child, update, remove} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-database.js"

//gera
function insert_gera(nota, pedido){
  const db = getDatabase();
  set(ref(db, "realizapedidos/" + num),{
      Nota: nota,
      Pedido: pedido
  })
      .then(function(){return true;})
      .catch(function(error){return false;});
}

function select_gera(num){ ///Nao funciona
  const db2 = getDatabase();
  get(child(db2,"gera/" + num))
      .then(function (snapshot){if(snapshot.exists()){ console.log(snapshot)}})
      .catch(function(error){return false});
}

function update_gera(nota, pedido){
  const db = getDatabase();
  update(ref(db, "gera/" + num),{
      Nota: nota,
      Pedido: pedido
  })
      .then(function(){return true;})
      .catch(function(error){return false;});
}

function remove_gera(num){
  const db = getDatabase();
  remove(ref(db, "gera/" + num))
      .then(function(){return true;})
      .catch(function(error){return false;});
}


//realiza pedido
function insert_realizapedido(num, cod, cnpj){
  const db = getDatabase();
  set(ref(db, "realizapedidos/" + num),{
      Cod: cod,
      Cnpj: cnpj
  })
      .then(function(){return true;})
      .catch(function(error){return false;});
}

function select_realizapedido(num){ ///Nao funciona
  const db2 = getDatabase();
  get(child(db2,"relizapedidos/" + num))
      .then(function (snapshot){if(snapshot.exists()){ console.log(snapshot)}})
      .catch(function(error){return false});
}

function update_realizapedido(num, cod, cnpj){
  const db = getDatabase();
  update(ref(db, "realizapedidos/" + num),{
      Cod: cod,
      Cnpj: cnpj
  })
      .then(function(){return true;})
      .catch(function(error){return false;});
}

function remove_realizapedido(num){
  const db = getDatabase();
  remove(ref(db, "realizapedidos/" + num))
      .then(function(){return true;})
      .catch(function(error){return false;});
}

//cliente
function insert_cliente(num, nome, senha, email, tel, endereco){
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

  function select_cliente(num){ ///Nao funciona
    const db2 = getDatabase();
    get(child(db2,"clientes/" + num))
        .then(function (snapshot){if(snapshot.exists()){ console.log(snapshot)}})
        .catch(function(error){return false});
  }

  function update_cliente(num, nome, senha, email, tel, endereco){
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

  function remove_cliente(num){
    const db = getDatabase();
    remove(ref(db, "clientes/" + num))
        .then(function(){return true;})
        .catch(function(error){return false;});
  }


//madeira
function insert_madeira(num, preco, idade, tipo){
  const db = getDatabase();
  set(ref(db, "madeira/" + num),{
      Preco: preco,
      Idade: idade,
      Tipo: tipo
  })
      .then(function(){return true;})
      .catch(function(error){return false;});
}

function select_madeira(num){ ///Nao funciona
  const db2 = getDatabase();
  get(child(db2,"madeira/" + num))
      .then(function (snapshot){if(snapshot.exists()){ console.log(snapshot)}})
      .catch(function(error){return false});
}

function update_madeira(num, preco, idade, tipo){
  const db = getDatabase();
  update(ref(db, "madeira/" + num),{
      Preco: preco,
      Idade: idade,
      Tipo: tipo
  })
      .then(function(){return true;})
      .catch(function(error){return false;});
}

function remove_madeira(num){
  const db = getDatabase();
  remove(ref(db, "madeira/" + num))
      .then(function(){return true;})
      .catch(function(error){return false;});
}

//Historico pedidos
function insert_historicopedido(num, valor){
  const db = getDatabase();
  set(ref(db, "historicopedidos/" + num),{
      Valor: valor
  })
      .then(function(){return true;})
      .catch(function(error){return false;});
}

function select_historicopedido(num){ ///Nao funciona
  const db2 = getDatabase();
  get(child(db2,"historicopedidos/" + num))
      .then(function (snapshot){if(snapshot.exists()){ console.log(snapshot)}})
      .catch(function(error){return false});
}

function update_historicopedido(num, valor){
  const db = getDatabase();
  update(ref(db, "historicopedidos/" + num),{
      Valor: valor
  })
      .then(function(){return true;})
      .catch(function(error){return false;});
}

function remove_historicopedido(num){
  const db = getDatabase();
  remove(ref(db, "historicopedidos/" + num))
      .then(function(){return true;})
      .catch(function(error){return false;});
}

//Nota_Fiscal
function insert_notafiscal(valortotal, quantidade, num, data, valormetro){
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

function select_notafiscal(num){ ///Nao funciona TODO
  const db2 = getDatabase();
  get(child(db2,"notafiscal/" + num))
      .then(function (snapshot){if(snapshot.exists()){ console.log(snapshot)}})
      .catch(function(error){return false});
}

function update_notafiscal(valortotal, quantidade, num, data, valormetro){
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

function remove_notafiscal(num){
  const db = getDatabase();
  remove(ref(db, "notafiscal/" + num))
      .then(function(){return true;})
      .catch(function(error){return false;});
}

//Pedidos
function insert_pedido(num, duracao, data){
    const db = getDatabase();
    set(ref(db, "pedidos/" + num),{
        Duracao: duracao,
        Data: data
    })
        .then(function(){return true;})
        .catch(function(error){return false;});
}

function select_pedido(num){ ///Nao funciona
    const db2 = getDatabase();
    get(child(db2,"pedidos/" + num))
        .then(function (snapshot){if(snapshot.exists()){ console.log(snapshot)}})
        .catch(function(error){return false});
}

function update_pedido(num, duracao, data){
    const db = getDatabase();
    update(ref(db, "pedidos/" + num),{
        Duracao: duracao,
        Data: data
    })
        .then(function(){return true;})
        .catch(function(error){return false;});
}

function remove_pedido(num){
    const db = getDatabase();
    remove(ref(db, "pedidos/" + num))
        .then(function(){return true;})
        .catch(function(error){return false;});
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
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

async function get_adm() {
  const admCol = collection(db, 'adm');
  const admSnapshot = await getDocs(admCol);
  const adm = admSnapshot.docs.map(doc => doc.data());
  return adm;
}*/



