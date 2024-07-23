//TODO-------------------GLOBAL------------------
let logoutBtn = document.getElementById('LogoutBtn');
let htmlProducts = document.getElementById('products');
let cartItem = document.getElementById('cartItem');
let badge = document.getElementById('count');
let cart =document.querySelector(".cart i")
let usersNames 



let products=[
    {
        id: 1,
        title: 'Wall Clock',
        imgUrl: 'imag/1.jpg',
        price:50
 },
    {
        id: 2,
        title: ' Men Watch',
        imgUrl: 'imag/2.jpg',
        price:40
        
 },
    {
        id: 3,
        title: 'Parfum',
        imgUrl: 'imag/3.jpg',
        price:65
        
 },
    {
        id: 4,
        title: 'Wall Clock',
        imgUrl: 'imag/1.jpg',
        price:30
        
 },
 
    {
        id: 5,
        title: 'Laptob ',
        imgUrl: 'imag/istockphoto-1389603578-1024x1024.jpg',
        price:300
        
 },
 
    {
        id: 6,
        title: ' Headphone',
        imgUrl: 'imag/pexels-garrettmorrow-1649771.jpg',
        price:30
        
 },
]


let addedProdcut = []; 
//TODO---------------------FUNCTIONS----------------------
function logOut() {
    window.location.href = 'index.html'
    localStorage.removeItem('userName')
}
 


function displayProducts() {
    let productsUi = products.map((item)=> {
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
            <h2 class="price text-danger">$ ${item.price}.00</h2>
            <button class="btn" onclick=" addedToCart(${item.id})"> Add to cart</button>
         
        </div>
      </div>
    </div>
  </div>
`
    })
    
    htmlProducts.innerHTML = productsUi;
}

displayProducts();


function addedToCart(id) {
    let cartItemLength = document.querySelectorAll('#cartItem p');
    if (localStorage.getItem("userName")) {
        let choosenProduct = products.find((item) => item.id === id)
        cartItem.innerHTML += `<p>${choosenProduct.title}</p>`
        addedProdcut = [...addedProdcut, choosenProduct]
        localStorage.setItem("allProducts",JSON.stringify(addedProdcut))
    badge.classList.remove('d-none')
    badge.innerHTML=cartItemLength.length+1
    console.log(cartItemLength);
    } else {
        window.location.href='index.html'
    }
    
}

//TODO--------------EVENTS-------------
logoutBtn.addEventListener('click', function () {
    logOut()
})




cart.addEventListener("click", function () {
    let sidebar = document.querySelector(".sidebar")
    sidebar.classList.toggle ("d-none")
})


