const imagemCena = document.getElementById('imagemCena')
const situacao = document.getElementById('situacao')
const containerOpcoes = document.getElementById('opcoes')
let pontos = 0

async function ExibirCena(cenaNome = "PrimeiraCena") {
    const resposta = await fetch('../JSON/jogo.json')
    const dados = await resposta.json()

    let cenaAtual = dados.cenas[cenaNome]
    situacao.textContent = ''
    containerOpcoes.innerHTML = ''

    if (cenaAtual.imagemInicial) {
        imagemCena.src = cenaAtual.imagemInicial

        setTimeout(() => {
            mostrarSituacao(cenaAtual)
        }, 2800)
    } else {
        mostrarSituacao(cenaAtual)
    }
}

function mostrarSituacao(cenaAtual) {
    situacao.textContent = cenaAtual.situacao

    cenaAtual.opcoes.forEach(opcao => {
        const p = document.createElement('p')
        p.textContent = opcao.texto
        containerOpcoes.appendChild(p)
        p.addEventListener('click', () => OpcaoSelecionada(opcao))
    });

}

function OpcaoSelecionada(opcaoClicada) {
    if (opcaoClicada.status == 'Bom') {
        pontos += 5
    } else if (opcaoClicada.status == 'Paia') {
        pontos -= 10
    }
    if (pontos < 0) {
        pontos = 0
    }

    console.log(`Pontos: ${pontos}`)

    containerOpcoes.innerHTML = ""

    if (opcaoClicada.imagem) {
        imagemCena.src = opcaoClicada.imagem
    }

    setTimeout(() => {

        if (opcaoClicada.imagem2) {
            imagemCena.src = opcaoClicada.imagem2;

            setTimeout(() => {
                OlhandoSeTemMais(opcaoClicada.proximaCena);
            }, 2800);

        } else {
            OlhandoSeTemMais(opcaoClicada.proximaCena);
        }

    }, 2800);

    function OlhandoSeTemMais(cenaFrente) {
        if (cenaFrente == false) {
            ExibirStatusGame()
        } else {
            ExibirCena(cenaFrente)
        }
    }
}

function ValidandoResultado() {
    let texto = ''
    let corNota = ''
    let imagem = ''
    let imagemRosto = ''

    if (pontos < 10) {
        corNota = 'red'
        texto = 'Sentimos muito mas você foi absurdamente mal nesse teste, mas fique tranquilo, você ainda pode mudar seus hábitos, nunca é tarde para isso.'
        imagem = '../assets/imagemGame/resultado/ResultadoPessimo.png'
        imagemRosto = '../assets/imagemGame/RostoPessimo.png'
    } else if (pontos <= 20) {
        corNota = '#ffcc00'
        texto = 'Mais ou menos, ainda pode melhorar em seu desempenho.'
        imagem = '../assets/imagemGame/resultado/ResultadoMaisOuMenos.png'
        imagemRosto = '../assets/imagemGame/RostoMaisOuMenos.png'
    } else {
        corNota = 'green'
        texto = 'Parabéns! Você fez escolhas excelentes hoje e teve um dia muito produtivo.'
        imagem = '../assets/imagemGame/resultado/ResultadoOtimo.png'
        imagemRosto = '../assets/imagemGame/ImagemFinal.png'
    }

    return { corNota, texto, imagem, imagemRosto }

}
function ExibirStatusGame() {
    const resultado = ValidandoResultado()

    const gameContainer = document.getElementById('GameContainer')
    gameContainer.style.display = 'none'

    const body = document.querySelector('body')

    body.innerHTML = `
     <div class="ContainerResultado">
        <div class="ConteudoTop">
            <div class="imagemStatusRosto">
           <img src="${resultado.imagemRosto}" alt="imagem">
            </div>
            <div class="textos">
             <h1>Fim do dia!</h1>
             <p>${resultado.texto}</p>
             <span style="font-size: 25px; color: ${resultado.corNota};">Nota: ${pontos}</span>
            </div>
        </div>
        <div class="conteudoEmbaixo">
            <img src= "${resultado.imagem}" alt="imagem">
        </div>
    </div>
    
    `



}
ExibirCena()

