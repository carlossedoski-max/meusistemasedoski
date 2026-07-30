
function login(event){

    event.preventDefault();

let email=document.getElementById("email").value;

let senha=document.getElementById("senha").value;

if(email==="carlossedoski@gmail.com"  && senha==="123456"){

localStorage.setItem("token","123");

window.location.href = "cadastro.html";

}else{

alert("Login inválido");

}

}