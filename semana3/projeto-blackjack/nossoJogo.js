import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
const carta = comprarCarta()
let usuario = ("Usuário")
let computador = ("Computador")
let carta1Usuário = comprarCarta()
let carta1Computador = comprarCarta()
let carta2Usuário = comprarCarta()
let carta2Computador = comprarCarta()
let totalUsuario = Number(carta1Usuário.valor + carta2Usuário.valor)
let totalComputador = Number(carta1Computador.valor + carta2Computador.valor)

console.log("Bem vindo ao jogo de BlackJack")
if(confirm("Quer iniciar uma nova rodada?")){

if(confirm("Vamos comprar uma carta")){
   
   console.log(usuario +" "+" - cartas: "+ carta1Usuário.texto,carta2Usuário.texto , " - pontuação ", totalUsuario)
   
   console.log(computador +" "+" - cartas: "+ carta1Computador.texto,carta2Computador.texto, " - pontuação ", totalComputador)

   if(totalUsuario === totalComputador){
      console.log("EMPATE !!!")
   }if(totalUsuario > totalComputador){
      console.log("Usuário foi o Vencedor !!!")
      
   }if(totalUsuario < totalComputador){
      console.log("O computador foi o Vencedor !!!")
   }
} 
else {
   console.log("O jogo acabou")
}
} else{
   console.log("O jogo acabou")
}
