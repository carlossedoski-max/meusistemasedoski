
const dados = JSON.parse(localStorage.getItem("revisao"));

const resultado = document.getElementById("resultado");

if (dados){

    resultado.innerHTML = `

<h2>${dados.veiculo}</h2>

<p><strong>Placa:</strong>${dados.placa}</p>

<p><strong>km:</strong> ${dados.km}</p>

<hr>

<p>Troca de oleo:

${dados.oleo ? "✅ Feito" : "❌ Não Feito"}</p>

<p>Velas:
    ${dados.velas ? "✅ Feito" : "❌ Não Feito"}</p>

<p>Fluido de Freio:
 ${dados.freio ? "✅ Feito" : "❌ Não Feito"}</p>

<p>Filtro de ar
 ${dados.ar ? "✅ Feito" : "❌ Não Feito"}</p>

<p>Filtro:
 ${dados.filtro ? "✅ Feito" : "❌ Não Feito"}</p>

`;
} else {

    resultado.innerHTML = "<h2>Nenhuma revisao encontrada.</h2>";



}
