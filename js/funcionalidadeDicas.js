const dicasEstudo = [
    "Comece pequeno: defina metas curtas de 15 a 30 minutos diários para criar consistência.",
    "Mantenha uma rotina fixa estudando sempre no mesmo horário para automatizar o hábito.",
    "Planeje o conteúdo no dia anterior para não perder tempo decidindo o que estudar.",
    "Aplique a Técnica Pomodoro fazendo pausas de 5 minutos a cada 25 minutos de foco.",
    "Pratique o estudo ativo fazendo resumos, mapas mentais ou explicando a matéria para si mesmo.",
    "Organize um ambiente limpo, bem iluminado e livre de distrações antes de começar.",
    "Fique longe do celular e silencie notificações durante o bloco de foco.",
    "Aprenda a dizer não para compromissos que fujam do seu planejamento de estudos.",
    "Evite o perfeccionismo: é melhor estudar um pouco hoje do que esperar pelo 'dia ideal'.",
    "Priorize o sono regular de 7 a 8 horas, pois o cérebro fixa o aprendizado enquanto você dorme.",
    "Faça pausas reais para se alongar ou beber água, evitando telas nos intervalos.",
    "Monitore e celebre pequenos avanços semanais para manter a dopamina e a motivação altas.",
    "Seja gentil consigo mesmo: se falhar um dia, apenas retome no dia seguinte sem culpa.",
    "Alterne as matérias ou tópicos para manter o cérebro engajado e evitar o tédio.",
    "Faça revisões espaçadas (1 dia, 7 dias e 30 dias depois) para não esquecer o conteúdo.",
    "Pratique com exercícios e simulados para testar seu nível real de retenção.",
    "Mantenha-se hidratado e faça lanches leves para evitar a queda de energia e o sono.",
    "Estude os tópicos mais difíceis no período do dia em que você tem mais energia.",
    "Crie recompensas saudáveis para o final da sua meta, como assistir a um episódio de série.",
    "Não se compare com o ritmo dos outros; foque apenas na sua própria evolução diária."
]

const sessaoDicas = document.getElementById('SessaoDica')

let dicaAtual = Math.floor(Math.random() * dicasEstudo.length)

function MostrarDica() {
    sessaoDicas.innerHTML = ` 
   <p id="dica">${dicasEstudo[dicaAtual]}</p>
   <button id="botaoPegaDica" onclick="PegarDica()">Pegar dica aleatória</button>
   `
}

function PegarDica() {

    let dicaNova = Math.floor(Math.random() * dicasEstudo.length)

    if (dicaNova == dicaAtual) {
        dicaNova = Math.floor(Math.random() * dicasEstudo.length)

        sessaoDicas.innerHTML = ` 
        <p id="dica">${dicasEstudo[dicaNova]}</p>
        <button id="botaoPegaDica" onclick="PegarDica()">Pegar dica aleatória</button>
   `
    } else {
        sessaoDicas.innerHTML = ` 
        <p id="dica">${dicasEstudo[dicaNova]}</p>
        <button id="botaoPegaDica" onclick="PegarDica()">Pegar dica aleatória</button>
   `
    }

}

MostrarDica()
