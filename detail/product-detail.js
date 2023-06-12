import { addDBCart, auth} from '../firebase.js';
import { getProductos } from "../firebase.js"


const verifyAuth = auth;

const currentUser = auth.currentUser;

console.log(currentUser)
let products = [];
let url = window.location.search;
let param = new URLSearchParams(url);
let productId = param.get('id').replace('"', '');
let productInfo;

class productDetail extends HTMLElement {
  constructor() {
    super();
    this.array = [];
  }

  connectedCallback() {
    this.arreglo();
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.newProduct = newValue;
    console.log(this.newProduct);
    this.arreglo();
  }

  product(product) {
    productInfo = {
      name: product.name,
      price: product.precio,
      img: product.urlImage
    };

    this.innerHTML += `
      <link rel='stylesheet' href='./product'>
      <div class="card" style="width: 18rem;">
      
        <img src=${product.urlImage} class="card-img-top" alt="...">
        
      </div>
      <div>
        <div>
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.precio}</p>
          <h5 class="description-prize">Or $45.79/mo. For 24 mo. Before Trade in.</h5>
        </div>
        <div>
          <h4 class="delivery-method">Select your delivery method.</h4>
        </div>
        <div class="btns">
          <div class="wrapper">
            <div class="link_wrapper">
              <a href="#">Home Delivery</a>
            </div>
          </div>
          <div class="wrapper">
            <div class="link_wrapper">
              <a href="#">Pick at</a>
            </div>
          </div>
        </div>
        <div class="descriptions">
          <h5 class="description1">Pick at your nearest store</h5>
          <h5 class="description2">Home delivery in less than 24 hours</h5>
          <h5 class="description3">1 year warranty in all Apple devices </h5>
          <a class="btn-btn-primary" id="Shop-button">Shop Now</a>
          sh
        </div>
        <div class="btn2"></div>
      </div>`;

    const shopButton = this.querySelector("#Shop-button");
    shopButton.addEventListener("click", () => {
      console.log(productInfo)
      const precio = productInfo.price? productInfo.price : 20000
      addDBCart(productInfo.name, precio, productInfo.img)
      alert("Producto agregado al carrito")
    });
  }

  async arreglo() {
    products=await getProductos()
    console.log(products);
  
    let product = products.find((item) => {
      let comparison = item.name.replaceAll(' ', '-');
      return comparison === productId;
    });
    console.log(product);
    this.product(product);
  }
}


customElements.define("product-detail", productDetail);
export default productDetail;
