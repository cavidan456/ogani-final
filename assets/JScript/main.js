const product = document.getElementById("product");
const productSearch = document.getElementById("product-two");
const productSort = document.getElementById("product-sort");
const inp = document.getElementById("inp");
const btn = document.getElementById("btn");
const btnSort = document.getElementById("btnSort");
const loadMore= document.getElementById("more-data");


let limit = 8
let page = 1
 
async function getProducts() {
    productSearch.style.display ="none"
    skip = (limit -1) * page
   const res= await axios.get(`https://655dd2b79f1e1093c599f093.mockapi.io/products?page=${page}&limit=${limit}&skip=${skip}`)
   const data = res.data
   db=data
   db.forEach(item => {
    let box = document.createElement("div")
    box.className = "col-12 col-md-6 col-lg-3 col-xl-3"
    box.innerHTML = `<img src="${item.image}"/>
    <p>${item.title}</p>
    <p>${item.price} yuan</p>
    <button class="btn btn-success" onclick="addToBasket(${item.id})">Sebete ekle</button>`
    product.appendChild(box)
   });
  page++;
}
getProducts()
loadMore.addEventListener("click" ,getProducts);
function addToBasket(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push(db.find(item=>item.id == id))
    localStorage.setItem("cart", JSON.stringify(cart))
}

// search by name 

function searchName(){
    product.style.display = "none"
    productSearch.style.display = "flex"
    axios.get(`https://655dd2b79f1e1093c599f093.mockapi.io/products?title=${inp.value}`)
    .then(res=>{
        db = res.data
        db.forEach(item => {
            let boxSearch = document.createElement("div")
            boxSearch.className = "col-12 col-md-6 col-lg-3 col-xl-3"
            boxSearch.innerHTML = `<img src="${item.image}"/>
            <p>${item.title}</p>
            <p>${item.price} yuan</p>
            <button class="btn btn-success" onclick="addToBasket(${item.id})">Sebete ekle</button>`
            productSearch.appendChild(boxSearch)
           });
    })
}
btn.addEventListener("click" , searchName);

// sort elemek

function sortProduct() {
    product.style.display = "none"
    axios.get(`https://655dd2b79f1e1093c599f093.mockapi.io/products`)
    .then((res)=>{
        const data = res.data
        db = data
        let databaza = db.sort((item, items)=>item.price - items.price);
    databaza.forEach(item => {
            let boxSort = document.createElement("div")
            boxSort.className = "col-12 col-md-6 col-lg-3 col-xl-3"
            boxSort.innerHTML = `<img src="${item.image}"/>
            <p>${item.title}</p>
            <p>${item.price} yuan</p>
            <button class="btn btn-success" onclick="addToBasket(${item.id})">Sebete ekle</button>`
            productSort.appendChild(boxSort)
           });
    })
}

btnSort.addEventListener("click" , sortProduct)