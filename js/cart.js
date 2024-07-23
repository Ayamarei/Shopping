let htmlProducts = document.getElementById('products');
let noItem = document.getElementById('noItem');



function displayProducts(products = []) {
    let total = 0;
    if (JSON.parse(localStorage.getItem("allProducts")).length===0) {
        noItem.innerHTML=`<div class="container my-5 text-center h-100 d-flex align-items-center">
        <div class="group-input m-auto w-75 p-5">
            <p class="text-warning fs-3">Your cart is empty <a href="./home.html" class="text-white fs-5">Click here for shopping</a></p>
        </div>
    </div> `
    
        let side = document.getElementById("side")
        side.classList.toggle("d-none")
      document.getElementById('total').innerHTML="$00.00"
         
    }
    
    let productsInCart = JSON.parse(localStorage.getItem("allProducts")) || products;

    let productsUi = productsInCart.map((item) => {
        let { price } = item
        total = total + price
         document.getElementById('total').innerHTML=("$")+ total +(".00")
        
        return `
        
                           <div class="card mb-3  group-input" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${item.imgUrl}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body ms-5">
            <h3 class="card-title">${item.title}</h3>
            <p class="card-text mt-3 text-dark">Lorem ipsum dolor sit amet.</p>
            <h2 class="price text-danger">${item.price}</h2>
            <button class="btn" onclick=" removed(${item.id})"> Remove Cart</button>
         
        </div>
      </div>
    </div>
  </div>
`
    })

    total.innerHTML = "$00.00";
    // total=total+item.price
    
    htmlProducts.innerHTML = productsUi;
}

displayProducts()

function removed(id) {
  let productsInCart=  localStorage.getItem("allProducts")
    if (productsInCart) {
        let items = JSON.parse(productsInCart);
        let filteredItem = items.filter((item) => item.id !== id)
        localStorage.setItem("allProducts", JSON.stringify(filteredItem))
        displayProducts(filteredItem)
    }
}