const header = document.querySelector('header')

header.innerHTML = `
    <div class="logo">
            <img src="assets/Logo.png" alt="logo">
        </div>

        <div class="links">
            <nav>
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="dicas.html">Dicas</a></li>
                    <li><a href="testeHbito.html">Teste de hábitos</a></li>
                </ul>
            </nav>
        </div>
         <div class="menuContainer">
            <details>
                <summary><img src="assets/icons/menuIcon.svg" alt=""></summary>
                <div class="conteudo">
                    <a href="index.html">Inicio</a>
                    <a href="html/servicos.html">Serviços</a>
                    <a href="html/equipe.html">Nossa equipe</a>
                    <a href="html/solicitar.html">Solicitar</a>
                </div>
            </details>
        </div>

`