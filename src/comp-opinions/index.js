class Opinions extends HTMLElement {
    constructor() {
        super()
        this.opinions()
    }


    opinions() {
        this.innerHTML = `
    <base href>
    <link href="./src/comp-opinions/index.css" rel="stylesheet">
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
    
    <div class="card mb-3" style="max-width: 700px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="./img/1.png" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Air pods</h5>
        <p class="card-text">I bought these headphones 6 months ago and it is the best purchase I have made, I use them every day.</p>
        <p class="card-text"><small class="text-muted">Samanta Guerrero</small></p>
      </div>
    </div>
  </div>
</div>

<div class="card mb-3" style="max-width: 700px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="./img/2.png" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Airtag</h5>
        <p class="card-text">I bought the airtag because I always lost my house keys but I found the solution with this.</p>
        <p class="card-text"><small class="text-muted">Cristian Ortiz</small></p>
      </div>
    </div>
  </div>
</div>
    </div>

    
    <div class="carousel-item">
    <div class="card mb-3" style="max-width: 700px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="./img/3.png" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Apple Wallet</h5>
        <p class="card-text">now I have my documents organized and I can use them quickly and safely.</p>
        <p class="card-text"><small class="text-muted">Valeria Martinez</small></p>
      </div>
    </div>
  </div>
</div>

<div class="card mb-3" style="max-width: 700px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="./img/4.png" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Case for charge</h5>
        <p class="card-text">now i can fast charge my cell phone using and also the case looks nice.</p>
        <p class="card-text"><small class="text-muted">Laura Forero</small></p>
      </div>
    </div>
  </div>
</div>

    </div>
    <div class="carousel-item">
    <div class="card mb-3" style="max-width: 700px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="./img/5.png" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Ipad Pro</h5>
        <p class="card-text">I bought this ipad to replace the notebooks when I study and it has been very efficient for my learning process.</p>
        <p class="card-text"><small class="text-muted">Rossy Hurtado</small></p>
      </div>
    </div>
  </div>
</div>

<div class="card mb-3" style="max-width: 700px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="./img/6.png" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Apple Watch</h5>
        <p class="card-text">1 year ago I bought this watch for my marathon training and it has been a great help to keep track of my process.</p>
        <p class="card-text"><small class="text-muted">Gabriel Quintero</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    `;
    }
}

customElements.define('comp-opinions', Opinions)
export default Opinions;