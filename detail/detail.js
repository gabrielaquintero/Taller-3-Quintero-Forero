import "./product-detail.js"

let productContainer = document.getElementById("container")

function createElement(){
    let productos=document.createElement("product-detail")
    
    productContainer.append(productos)
        }

        createElement()