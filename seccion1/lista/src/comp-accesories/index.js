class Accesories extends HTMLElement {
  constructor() {
    super()
    this.accesories()
  }


  accesories() {
    this.innerHTML = `
    <base href>
    <link href="./src/comp-accesories/index.css" rel="stylesheet">
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
  
    <div class="carousel-item active" data-bs-interval="1000">
      <div class="alignBanner">
    <h2>Ipad Case</h2>
    <h4>The best option for the protection of your ipad,<br> 
      take care of it from bumps and scratches</h4>
      </div>
      <button type="button" class="btn btn-primary">Shop now</button>
      <img src="./img/accesorio1.png"/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <div class="alignBanner">
    <h2>Air Tag</h2>
    <h4> Keep your belongings safe knowing<br> 
    where they are at all times</h4>
</div>
    <button type="button" class="btn btn-primary">Shop now</button>
      <img src="./img/accesorio2.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="./img/accesorio3.png" class="d-block w-100" alt="...">
      <div class="alignBanner">
      <h2>Apple Pencil</h2>
    <h4> Be an artist on your
    ipad using the pencil</h4>
</div>
    <button type="button" class="btn btn-primary">Shop now</button>
    </div>
    
    

    `;
  }
}

customElements.define('comp-accesorios', Accesories)
export default Accesories;