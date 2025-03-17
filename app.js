//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function exibirMensagemInicial () {
    exibirTextoNaTela ("Digite o nome dos seus amigos");
}

exibirMensagemInicial ()

function adicionarNome () {
    let nome = document.querySelector('input-name').value.trim();

    if (nome == "") {
        alert ("Digite um nome válido");
        return;
    }

    if (listaAmigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;    
    }
    
    listaDeNomes.push(nome);
    exibirNomesNaTela();

    exibirTextoNaTela("Nome adicionado: " ${nome});
}

function exibirTextoNaTela(texto) {
    let elemento = document.getElementById("mensagem");
    if (elemento) {
        elemento.textContent = texto;
    } else {
        console.log(texto);
    }

}

