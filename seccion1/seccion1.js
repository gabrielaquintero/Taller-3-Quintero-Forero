class Seccion1 extends HTMLElement {
    constructor(){
        super();
        this.seccion1()
    }
    seccion1(){
        this.innerHTML = `
    <base href>
    <link rel="stylesheet" href="./seccion1/seccion1.css">
    <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <h1>AirPods</h1>
        <h2> Max</h1>
        <h3> Sounds like an Epiphany</h3>
        <button class = "Shop Now">Shop Now</button>
        <h4> Learn more</h4>
        <img src="./img/seccion1blue.png" />
      </div>
      <div class="swiper-slide pink">
      <h1>AirPods</h1>
        <h2> Max</h1>
        <h3> Sounds like an Epiphany</h3>
        <button class = "Shop Now">Shop Now</button>
        <h4> Learn more</h4>
        <img src="./img/seccion1pink.png" />
        
      </div>
     
    </div>
   
  </div>
        

    `;
    }

}
customElements.define("seccion-1", Seccion1);
export default Seccion1