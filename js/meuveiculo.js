
const veiculo = JSON.parse(localStorage.getItem("veiculo"));

if (veiculo) {

  document.getElementById("modelo").innerHTML =
    `${veiculo.marca} ${veiculo.modelo}`;

    document.getElementById("marca").innerHTML =  veiculo.marca;
    document.getElementById("ano").innerHTML = veiculo.ano;
    document.getElementById("placa").innerHTML = veiculo.placa;
    document.getElementById("combustivel").innerHTML = veiculo.combustivel;
    document.getElementById("km").innerHTML = `${veiculo.km} km`;



}

function editarVeiculo() {

    window.location.href = "cadastro.html";
}