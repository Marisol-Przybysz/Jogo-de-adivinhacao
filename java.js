window.onload = function () {
    const input = document.createElement("input");
    input.type = "number";
    input.id = "caixaNumero";
    input.placeholder = "Digite um número...";

    const container = document.getElementById("caixatxt");
    container.appendChild(input);

};

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
var na = numeroAleatorio;

function armazenarValor() {
    const valorTexto = document.getElementById("caixaNumero").value;
    const n = Number(valorTexto);

    if (n == na) {
        document.getElementById("resultado").innerText = "Você acertou!";
    }
    if (n > na) {
        document.getElementById("resultado").innerText = "Muito alto";
    }
    if (n < na) {
        document.getElementById("resultado").innerText = "Muito baixo";
    }
}