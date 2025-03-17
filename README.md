Este projeto foi criado para o **challenge do curso de lógica de programação** e tem como objetivo ser um simples sorteador de amigo secreto. Os usuários podem adicionar nomes, visualizar a lista e sortear aleatoriamente um nome da lista.

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
