import {addProductWithId} from '../firebase.js'

const nameInput = document.getElementById('name')
const descripcionlInput = document.getElementById('descripcion')
const categoryInput = document.getElementById('category')
const subcategoryInput = document.getElementById('subcategor')
const precioInput = document.getElementById('precio')
const inputFile = document.getElementById('img')
const submitbtn = document.getElementById('agregar-producto')


submitbtn.addEventListener('click', (e) => uploadProduct(e))

async function uploadProduct(e) {
    e.preventDefault()

    const file = inputFile.files[0]

    const newObj = {
        name: nameInput.value,
        descripcion: descripcionlInput.value,
        category: categoryInput.value,
        subcategor: subcategoryInput.value,
        precio: precioInput.value,
        img:inputFile.value
    }

    const id = newObj.name.toLowerCase().replace(/ /g, '-')

    console.log('will write object ', newObj)

    // await addProduct(newObj)
    await addProductWithId(newObj, id, file)
    alert("Producto creado")
    
}