// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, getDocs, getDoc, doc, query, where, addDoc, Timestamp, collection} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIACcYaA9GkYy6W2LsG_6YHv6YsDv3iY0",
  authDomain: "copa-winery.firebaseapp.com",
  projectId: "copa-winery",
  storageBucket: "copa-winery.appspot.com",
  messagingSenderId: "365116188749",
  appId: "1:365116188749:web:902f4c5f03be95781c1404"
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);
const appfirestore = getFirestore (appfirebase)

export async function  getItems(){
    const productCollection = collection(appfirestore, "products");
    const productsSnapshot = await getDocs(productCollection);
  
    let respuesta = productsSnapshot.docs.map(doc =>{
      return{
        ...doc.data(),
        id: doc.id
      }
    } );

    return respuesta;
}

export async function getItemOfCategory(categoryId){

  const productCollection = collection(appfirestore, "products");
  const q = query(productCollection, (where("category", "==", categoryId)));
  const productsSnapshot = await getDocs(q);

  let respuesta = productsSnapshot.docs.map( doc => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return respuesta;
}


export async function getAnItem(id){
  
  const docref = doc(appfirestore, "products", id )
  const docSnapshot = await getDoc(docref);

  return{
    id:docSnapshot.id, ...docSnapshot.data()
  }
}

export async function createBuyOrder(dataOrder){
  const ordersCollection = collection(appfirestore, "orders");
  const dateTime = Timestamp.now();

  const dataOrderDate = {
    ...dataOrder,
    date: dateTime
  }

  const orderCreated = await addDoc (ordersCollection, dataOrderDate)

  return orderCreated
}

export default appfirebase