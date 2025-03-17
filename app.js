//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
    let input = document.querySelector("#amigo");
    let nome = input.value.trim(); 

    if (nome === "") {
        alert("Digite um nome válido");
        return;
    }

    if (listaAmigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;    
    }
    
    listaAmigos.push(nome);
    exibirNomesNaTela();
    exibirTextoNaTela(`Nome adicionado:${nome}`);

    input.value = ""; 
}

function exibirTextoNaTela(texto) {
    let elemento = document.getElementById("mensagem");
    if (elemento) {
        elemento.textContent = texto;
    } else {
        console.log(texto);
    }

}
function exibirNomesNaTela() {
    let listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; 

    listaAmigos.forEach((nome) => {
        let li = document.createElement("li"); 
        li.textContent = nome; 
        listaElement.appendChild(li); 
    });
}

function sortearAmigo () {
    if (listaAmigos.length === 0 ){
        alert ("Adicione pelo menos um nome antes de sortear");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceSorteado];

    exibirTextoNaTela (`O amigo sorteado é: ${amigoSorteado}`) ; 

    listaAmigos = [];
    exibirNomesNaTela();
}
