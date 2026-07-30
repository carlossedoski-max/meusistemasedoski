
function salvarVeiculo() {

    const veiculo = {

        marca: document.getElementById("marca").value,
        
        modelo: document.getElementById("modelo").value,
        
        ano: document.getElementById("ano").value,
        
        placa: document.getElementById("placa").value,
        
        combustivel: document.getElementById("combustivel").value, 
    
        km: document.getElementById("km").value,
        
        
    
    };

    localStorage.setItem(
       "veiculo",
       JSON.stringify(veiculo)

);

   alert("Veiculo cadastrado com sucesso!");

   window.location.href = "dashboard.html";


}