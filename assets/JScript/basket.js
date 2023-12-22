const product = document.getElementById("product");


function getBasket() {
    product.innerHTML= ""
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    db = cart
    db.map((item , index) => {
        let box = document.createElement("div")
        box.className = "col-12 col-md-6 col-lg-3 col-xl-3"
        box.innerHTML = `<img src="${item.image}"/>
        <p>${item.title}</p>
        <p>${item.price} yuan</p>
        <button class="btn btn-success" onclick="removeItem(${index})">Sebetden Sil</button>`
        product.appendChild(box)
       });
}

getBasket()

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.splice(index ,1)
    localStorage.setItem("cart", JSON.stringify(cart))
    getBasket()
}