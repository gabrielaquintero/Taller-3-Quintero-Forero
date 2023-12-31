// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, collection, addDoc, setDoc, doc, getDocs, getDoc} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js";



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
const storage = getStorage(app)
export const auth = getAuth(app);

export async function handleGetProductsFromDB() {
  const querySnapshot = await getDocs(collection(db, "products"));
  const mappedArray = [];
  querySnapshot.forEach((doc) => {
      mappedArray.push(doc.data());
  });

return mappedArray;
}

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




export async function createUser(email, password, username, file) {
  try {
      const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
      );

      // Signed in
      const user = userCredential.user;

      // console.log("usuario creado con ->", user.uid);

      /// subir imagen
     const imageUrl = await uploadFile(file.name, file, 'users');

      /// crear registro en BD
      await addUserToDB({username, imageUrl, email},user.uid)

      return { status: true, info: user.uid };
  } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      return { status: false, info: errorMessage };
  }
}

export async function logInUser(email, password) {
  try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user;
      uid = user.uid;
      console.log("This user uid: " + uid)
      return { status: true, info: user.uid };
  } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorMessage)
      return { status: false, info: errorMessage };
  }
}

export async function logOut() {

  try {
      await signOut(auth)
      alert("sesion cerrada")
  } catch (error) {
      console.error(error)
  };
}

export async function addUserToDB(userData, uid) {
  console.log('userData ---->', userData)
  console.log('uid ---->', uid)
  try {
      const docRef = await setDoc(doc(db, "users", uid), userData);

      console.log(docRef)

      console.log("User written with ID: ", uid);
  } catch (e) {
      console.error("Error adding user: ", e);
  }
}


export async function uploadFile(name, file, folder) {
  const taskImgRef = ref(storage, `${folder}/${name}`);

  try {
      await uploadBytes(taskImgRef, file);
      const url = await getDownloadURL(taskImgRef);
      return url;
  } catch (error) {
      console.log("error creando imagen ->", error);
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////
let uid= "";

onAuthStateChanged(auth, (user) => {
  if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      uid = user.uid
      console.log("Mi usuario esta logeado: " + uid)
      // ...
  } else {
      // ...
     console.log("usuario no  loggeadp")
      
  }
});


export async function addProductWithId(product, id, file) {
  try {
      const imageUrl = await uploadFile(file.name, file, 'productos');

      await setDoc(doc(db, "productos", id), {
        ...product, 
        urlImage: imageUrl });
  } catch (e) {
      console.error("Error adding document: ", e);
  }
}

export async function drawUserCart() {
  const cartContainer = document.querySelector("#cart-item-container");
  cartContainer.innerHTML = '';

//Aqui traigo las cosas de mi carrito para pintarlos 
  let currentCart = await getUserCart();
  console.log(currentCart);

  currentCart.forEach((obj) => {
    const cartObj = document.createElement('div');
    cartObj.className = "cart-item";
    cartObj.innerHTML = `<img src="${obj.url}" alt="">
                      <div>
                          <h5>${obj.name}</h5>
                          <p>${obj.precio}</p>
                      </div>`;

    cartContainer.appendChild(cartObj);
  });
}

//Funcion para traer la informacion del usuario en la base de datos
export async function getUserCart(uid) { 
 
  console.log("My current user: " + uid)
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  //console.log(docSnap); 
  if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data().cart;
  } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      return undefined;
  }
}


export async function addDBCart(name, precio, urlImage) {
  let cart = await getUserCart();
  
  
  try {
      if (cart) { 
          const docRef = await setDoc(doc(db, "users", uid), {
              cart: [
                  ...cart,
                  { name, precio, urlImage }
              ]
          });
      } else { 
          const docRef = await setDoc(doc(db, "users", uid), {
              cart: [
                  { name, precio, urlImage }
              ]
          });
      }

  } catch (e) {
      console.error("Error adding document", e)
  }

}