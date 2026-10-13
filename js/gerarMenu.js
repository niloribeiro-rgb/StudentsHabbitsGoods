const header = document.querySelector('header')

header.innerHTML = `
    <div class="logo">
            <img src="assets/Logo.png" alt="logo">
        </div>

        <div class="links">
            <nav>
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="#dicas">Dicas</a></li>
                    <li><a href="html/testeHabitoJogo.html">Teste de hábitos</a></li>
                </ul>
            </nav>
        </div>
         <div class="menuContainer">
            <details>
                <summary><img src="assets/icons/menuIcon.svg" alt=""></summary>
                <div class="conteudo">
                    <a href="index.html">Inicio</a>
                    <a href="#dicas">Dicas</a>
                    <a href="html/testeHabitoJogo.html">Teste de hábitos</a>
                </div>
            </details>
        </div>

`