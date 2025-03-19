# 🎁 Sorteador de Amigo Secreto  

Este projeto foi criado para o **challenge do curso de lógica de programação** e tem como objetivo ser um simples sorteador de amigo secreto. Os usuários podem adicionar nomes, visualizar a lista e sortear aleatoriamente um nome da lista.  

## 💻 Desenvolvimento  

Toda a lógica do projeto foi desenvolvida do zero em **JavaScript puro (Vanilla JS)**, sem o uso de frameworks ou bibliotecas externas.  

### 📝 Como funciona o código?  

O projeto conta com três funções principais:  

1. **Adicionar um nome à lista**  
   - Captura o nome digitado no campo de entrada.  
   - Verifica se o nome é válido e se já foi adicionado anteriormente.  
   - Exibe o nome na lista de participantes.  

   ```js
   let listaAmigos = [];

   function adicionarNome() {
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
       exibirTextoNaTela(`Nome adicionado: ${nome}`);
       
       input.value = "";
   }
   ```

2. **Exibir os nomes na tela**  
   - Atualiza dinamicamente a lista de amigos na interface.  
   - Usa `<li>` para cada nome adicionado.  

   ```js
   function exibirNomesNaTela() {
       let listaElement = document.getElementById("listaAmigos");
       listaElement.innerHTML = "";

       listaAmigos.forEach((nome) => {
           let li = document.createElement("li");
           li.textContent = nome;
           listaElement.appendChild(li);
       });
   }
   ```

3. **Sortear um nome aleatoriamente**  
   - Gera um índice aleatório dentro do array de nomes.  
   - Exibe o nome sorteado e limpa a lista para um novo sorteio.  

   ```js
   function sortearAmigo() {
       if (listaAmigos.length === 0) {
           alert("Adicione pelo menos um nome antes de sortear!");
           return;
       }

       let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
       let amigoSorteado = listaAmigos[indiceSorteado];

       exibirTextoNaTela(`🎉 O amigo sorteado é: ${amigoSorteado} 🎉`);

       listaAmigos = [];
       exibirNomesNaTela();
   }
   ```

## 🛠️ Estilização da Mensagem de Feedback  
Agora, a mensagem exibida no `<p id="mensagem">` ficou mais destacada:  
- **Texto verde** (`#05DF05`) 🟢  
- **Fonte maior** (`22px`)  
- **Texto em negrito**  
- **Espaço extra entre a mensagem e o botão "Sortear Amigo"**  

### 🌟 Código CSS adicionado:  
```css
#mensagem {
    color: #05DF05;
    font-size: 22px;
    font-weight: bold;
    margin-top: 20px;
    text-align: center;
}
.button-container {
    margin-top: 30px;
}
```

## 🚀 Como Usar  
1. Digite um nome no campo de entrada.  
2. Clique no botão "Adicionar".  
3. Veja os nomes adicionados à lista.  
4. Clique no botão "Sortear amigo" para escolher um nome aleatoriamente.  
5. A mensagem exibirá o nome sorteado e limpará a lista para um novo sorteio.  


Sinta-se à vontade para testar o projeto ao vivo acessando [este link](https://challenge-grocha.vercel.app/).

Espero que você se divirta usando este sorteador de amigo secreto.

## Tecnologias
<div>
  <img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</div>
