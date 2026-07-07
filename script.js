// Alerta de boas-vindas
window.onload = function () {
    alert("Bem-vindo(a) à Biblioteca Saber!");
};

// Data atual
const data = new Date();
const rodape = document.querySelector("footer");

const dataAtual = document.createElement("p");
dataAtual.innerHTML = "Data: " + data.toLocaleDateString("pt-BR");

rodape.appendChild(dataAtual);

// Criar botão Modo Escuro
const botaoModo = document.createElement("button");
botaoModo.innerHTML = "🌙 Modo Escuro";
botaoModo.className = "btn btn-warning m-3";

document.body.prepend(botaoModo);

botaoModo.addEventListener("click", function () {
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");
});

// Criar botão Voltar ao Topo
const voltarTopo = document.createElement("button");

voltarTopo.innerHTML = "⬆ Topo";
voltarTopo.className = "btn btn-primary";

voltarTopo.style.position = "fixed";
voltarTopo.style.bottom = "20px";
voltarTopo.style.right = "20px";

document.body.appendChild(voltarTopo);

voltarTopo.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Validação do formulário
const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (event) {

    const nome = formulario.querySelector('input[type="text"]').value;
    const email = formulario.querySelector('input[type="email"]').value;
    const mensagem = formulario.querySelector("textarea").value;

    if (nome === "" || email === "" || mensagem === "") {
        event.preventDefault();
        alert("Preencha todos os campos!");
    } else {
        alert("Mensagem enviada com sucesso!");
    }

});
