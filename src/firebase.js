// Import the functions you need from the SDKs you need
import { initializeApp } from "https://cdnjs.cloudflare.com/ajax/libs/firebase/9.22.1/firebase-app.js";
import { getDocs, getFirestore, collection, addDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD7pe8o5Vwyv68Gg4TVnWllg5e2x5k06JI",
    authDomain: "apple-30b4f.firebaseapp.com",
    projectId: "apple-30b4f",
    storageBucket: "apple-30b4f.appspot.com",
    messagingSenderId: "836798117939",
    appId: "1:836798117939:web:b624a0c662d15eb259cb46"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export async function getProductos(){
    const allTasks =[]
    const querySnapshot = await getDocs(collection(db,"productos"));
    querySnapshot.forEach((doc)=>{
        allTasks.push({...doc.data(), id: doc.id})
    });

    return allTasks;
}

export async function addTask(taskTitle){
    try {
        const docRef = await addDoc(collection(db, "productos"), {
          title: taskTitle,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export async function editDocument(title,id){

await setDoc(doc(db, "productos", id), {
  title: title,
  completed: true,
});

}