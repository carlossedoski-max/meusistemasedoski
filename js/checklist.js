
function salvarChecklist() {

    const revisao = {

        veiculo: document.getElementById("veiculo").value,

        placa: document.getElementById("placa").value,

        km: document.getElementById("km").value,

        oleo: document.getElementById("oleo").checked,

        filtro: document.getElementById("filtro").checked,

        ar: document.getElementById("ar").checked,

        freio: document.getElementById("freio").checked,

        velas: document.getElementById("velas").checked

    };

    localStorage.setItem(
        "revisao",
        JSON.stringify(revisao)
    );

    alert("Checklist salvo com sucesso!");
    window.location.href = "historico.html";
    

}