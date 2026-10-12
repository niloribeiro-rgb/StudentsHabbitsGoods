const head = document.querySelector('head')

function linkarCSS() {
    document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="css/style.css">')
    document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="css/menu.css">')
    document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="css/footer.css">')
    document.head.insertAdjacentHTML('beforeend', ' <link rel="stylesheet" href="css/card.css">')
    document.head.insertAdjacentHTML('beforeend', ' <link rel="stylesheet" href="css/jogo.css">')
}

function linkarScripts(){
    const caminhosJs = ["js/script.js", "js/gerarMenu.js", "js/gerarFooter.js", "js/funcionalidadeDicas.js  "]

    caminhosJs.forEach(rotas =>{
        const script = document.createElement('script')
        script.src = rotas
        script.defer = true

        head.appendChild(script)
    })
}

linkarCSS()
linkarScripts()