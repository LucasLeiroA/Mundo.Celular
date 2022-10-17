import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXgtmi2nFeZjkxMRCxxA-xS0aDtNRMDds",
  authDomain: "mundocelularcoder.firebaseapp.com",
  projectId: "mundocelularcoder",
  storageBucket: "mundocelularcoder.appspot.com",
  messagingSenderId: "384470088555",
  appId: "1:384470088555:web:2195ff625d366bca95aa2e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getItems() {
  const miCollecion = collection(firestore, "productos");
  let respuesta = await getDocs(miCollecion);
  let dataDocs = respuesta.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });
  return dataDocs;
}

export async function getSingleItem(id) {
  try {
    const docRef = doc(firestore, "productos", id);
    const docSnapshot = await getDoc(docRef);

    const docFormateado = { ...docSnapshot.data(), id: docSnapshot.id };
    return docFormateado;
  } catch (error) {
    console.log(error);
  }
}

export async function getItemsByCategoty(cat){
    const collectionRef = collection(firestore,"productos") ;
    const queryCategory = query(collectionRef , where("category" , "==" , cat));

    const respuesta = await getDocs(queryCategory);
    
    let dataDocs = respuesta.docs.map((documento) => {
        let docFormateado = {...documento.data(), id: documento.id}
        return docFormateado;
    })


    return dataDocs;
}

export async function createBuyOrder(oderData){
  const collectionRef = collection(firestore , "orders");
  let respuesta = await addDoc(collectionRef,oderData);
  return respuesta.id;
}

export default firestore;
