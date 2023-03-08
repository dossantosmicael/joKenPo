/*aplicações do jogo*/
const imgEu = document.getElementById(`eu`)
const imgPc = document.getElementById(`pc`)
const jogar = document.getElementById(`jogar`)
const contador = document.getElementById(`contador`)
const vitoria = document.getElementById(`vitoria`)
const derrota = document.getElementById(`derrota`)

/*sons*/
const audioVitoria = new Audio("assets_sounds_winning.wav")
const audioDerrota = new Audio("assets_sounds_losing.wav")

/*variaveis de contagem do placar*/
var contEu = 0
var contPc = 0

/*variaveis do usuario*/
var jogador1 = ""
var jogador2 = ""
