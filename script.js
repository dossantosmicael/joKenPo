/*aplicações do jogo*/
const imgEu = document.getElementById(`eu`)
const imgPc = document.getElementById(`pc`)
const jogar = document.getElementById(`jogar`)
const contador = document.getElementById(`contador`)
const vitoria = document.getElementById(`vitoria`)
const derrota = document.getElementById(`derrota`)

/*sons*/
const audioVitoria = new Audio("sons/assets_sounds_winning.wav")
const audioDerrota = new Audio("sons/assets_sounds_losing.wav")

/*variaveis de contagem do placar*/
var contEu = 0
var contPc = 0

/*variaveis do usuario*/
var jogador1 = ""
var jogador2 = ""

jogar.addEventListener("click", () => {
    reset()
    playPc()
})

function reset() {
    jogador1 = document.querySelector('input[name="play"]:checked').value 
    imgEu.innerHTML = "<img src='imagens/" + jogador1 + ".png'>"
    imgPc.innerHTML = ""
}

function playPc() {
    let opt = ['pedra', 'papel', 'tesoura']
    let num = Math.floor(Math.random() * (2 - 0 + 1) + 0)
    jogador2 = opt[num]
    imgPc.innerHTML = "<img src='imagens/" + jogador2 + ".png'>"
    game()
}

function game() {
    jogar.disable = true

    let win = "0"

    if (jogador1 == jogador2) {
    } else if (jogador1 == "pedra") {
        win = jogador2 == 'tesoura' ? 1 : -1
    } else if (jogador1 == 'papel') {
        win = jogador2 == 'pedra' ? 1 : -1
    } else if (jogador1 == 'tesoura') {
        win = jogador2 == 'papel' ? 1 : -1
    }

    if(win == 0){
        
    } else if(win > 0){ 
        contEu = contEu + 1
        audioVitoria.play()
    } else {
        contPc = contPc + 1
        audioDerrota.play()
    }

    if (contEu >= 5){
        vitoria.classList.remove('none')
        vitoria.classList.add('center')
    }

    if (contPc >= 5){
        derrota.classList.remove('none')
        derrota.classList.add('center')
    }

    contador.innerHTML = contEu +  ":" + contPc

    setTimeout(()=>{
        jogar.disabled = false
        clear();
    },2000)
    }

    function clear() {
        imgEu.innerHTML = ""
        imgPc.innerHTML = ""
    }

    function novoJogo() {
        contador.innerHTML = "0:0"
        contEu = 0
        contPc = 0
        reset()
        vitoria.classList.add('none')
        vitoria.classList.remove('center')
        derrota.classList.add('none')
        derrota.classList.remove('center')
    }