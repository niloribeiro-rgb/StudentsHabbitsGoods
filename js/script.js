const containerCards = document.getElementById('containerCardDicas')

async function GerandoCards() {
    try {
        const response = await fetch(`JSON/cardsDicas.json`)
        const dados = await response.json()

        dados.forEach(card => {
            containerCards.innerHTML += `
            <div class="card">
                    <div class="Campo-Imagem">
                        <img src="${card.imagem}" alt="imagem">
                    </div>
                    <div class="tituloCard">
                        <h3>${card.titulo}</h3>
                    </div>
                    <div class="informacoesCard">
                        <p>${card.dica}</p>
                        <span>${card.observacao}</span>
                    </div>
                </div>
            `
        });
    } catch (error) {
      console.error("O arquivo json não foi encontrado")
    }
}

GerandoCards()