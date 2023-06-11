class Gallery extends HTMLElement{
    constructor(){
        super()
        this.gallery()
    }


gallery(){
    this.innerHTML = `
    <base href>
    <link href="./src/comp-gallery/index.css" rel="stylesheet">
    
    <div class="fotos">
    <img src="https://www.eltiempo.com/files/article_multimedia/uploads/2019/03/01/5c7945efee74a.jpeg" alt=""  class="foto">
    <img src="https://i0.wp.com/entrecristianos.com/wp-content/uploads/2012/01/justinBieber2012-a.jpg?resize=370%2C245" alt=""  class="foto">
    <img src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/01/25/16746316111154.jpg" alt=""  class="foto">
    <img src="https://img2.rtve.es/i/?w=1600&i=1582211953764.jpg" alt=""  class="foto">

  </div>
  
        

    `;
    }
}

customElements.define('comp-galley', Gallery)
export default Gallery;