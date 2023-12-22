const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const btns = document.getElementById("btns")

function postala(e){
    e.preventDefault()
    axios.post("https://655dd2b79f1e1093c599f093.mockapi.io/forms",{
        username:username.value,
        email:username.value,
        password:password.value
    }).then((res)=>{
        console.log(res);
    })
}

btns.addEventListener("click" , postala);