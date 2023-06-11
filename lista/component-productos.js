
class ProductItem extends HTMLElement {
  constructor() {
    super();
    this.array = []
    }
    
    
    
    connectedCallback(){
      this.newProduct = this.getAttribute('newProduct')
      this.product(this.array)
  }
  
  static get observedAttributes() {
      return ['newProduct','array'];
  }
  
  attributeChangedCallback(name, oldValue, newValue){
      this.newProduct = newValue;
      console.log(this.newProduct);
      this.product(this.array)
      
  }
  

  product(lista) {
  console.log(lista);
  lista.forEach(item =>{
        let url = item.name.replaceAll(" ","-")
        let urlProduct = "../detail/detail.html?id="+url
        
          this.innerHTML += `
          
          <div class="card" style="width: 18rem;">
          <img src=${item.img} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.precio}</p>
            <h6 class="card-description">${item.descripcion}</h6>
            <a href="${urlProduct}" class="btn btn-primary">See more</a>
          </div>
        </div>
        
       `
      })
      
      
  }

  ProductsFilter(filterType) {
    let filter = [];
    this.innerHTML = ''
    if(!filterType || filterType === 'All'){
      filter = this.array;
    } else if(filterType != 'All' && filterType){
      filter = this.array.filter(product => product.category === filterType.toLowerCase())
    }
    this.product(filter)
}


}
  



customElements.define("product-item", ProductItem);
export default ProductItem