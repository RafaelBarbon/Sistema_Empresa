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
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "../../../../node_modules/@firebase/app-compat/dist/app-compat.d.ts";
import { getAnalytics } from "../../../../node_modules//@firebase/analytics/dist/analytics-public.d.ts";
import { getDatabase, ref, set } from "../../../../node_modules/@firebase/database/dist/src/api/Database.d.ts";
//import { getFirestore, collection, getDocs } from "../../../../node_modules/firebase/@firestore/lite";
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
//async function getCities(db) {
//  const citiesCol = collection(db, 'cities');
//  const citySnapshot = await getDocs(citiesCol);
//  const cityList = citySnapshot.docs.map(doc => doc.data());
//  return cityList;/
//}

async function get_adm() {
  const admCol = collection(db, 'adm');
  const admSnapshot = await getDocs(admCol);
  const adm = admSnapshot.docs.map(doc => doc.data());
  return adm;
}


function loginADM(email,senha){
    var user = new Adm(email,senha);
    //var userbd = get_adm();// Coletar do banco de dados

    const admCol = collection(db, 'adm');
  const admSnapshot = await getDocs(admCol);
  const adm = admSnapshot.docs.map(doc => doc.data());


    console.log(adm);
   // Criar um novo obj
   // Comparar os objs
}