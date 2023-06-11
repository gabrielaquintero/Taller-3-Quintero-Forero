import { handleGetProductsFromDB } from '../firebase.js'
let products;
 handleGetProductsFromDB().then(result => {
    console.log(result)
    products = result;
});


export default products; 


