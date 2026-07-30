
const veiculo = JSON.parse(localStorage.getItem("veiculo"));
const revisao = JSON.parse(localStorage.getItem("revisao"));

if(veiculo){

    document.getElementById("modelo").innerHTML=
    `${veiculo.marca} ${veiculo.modelo}`;
    document.getElementById("kmAtual").innerHTML=
    `${veiculo.km} km`;

}

if(revisao){

    document.getElementById("oleo").innerHTML=
    revisao.oleo ? "✅ OK" : "❌ Pendente";
    document.getElementById("freio").innerHTML=
    revisao.freio ? "✅ OK" : "❌ Pendente";
    document.getElementById("ar").innerHTML=
    revisao.ar ? "✅ OK" : "❌ Pendente";

}


const token=localStorage.getItem("token");

if(!token){

window.location.href="login.html";


}

function logout(){

localStorage.removeItem("token");

window.location.href="login.html";

}
