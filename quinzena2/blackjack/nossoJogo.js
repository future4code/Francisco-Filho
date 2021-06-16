console.log("Bem vindo ao jogo de Blackjack!")


if(confirm("Quer iniciar uma nova rodada?")) {

let usuario01 = comprarCarta()
let usuario012 = comprarCarta()
let usuarioPc = comprarCarta()
let usuarioPc2 = comprarCarta()

let resultado01 = usuario01.valor + usuario012.valor   
let resultadoPc = usuarioPc.valor + usuarioPc2.valor

console.log(`Usuário - cartas: ${usuario01.texto} ${usuario012.texto} - ${resultado01}`)
console.log(`Computador - cartas: ${usuarioPc.texto} ${usuarioPc2.texto} - ${resultadoPc}`)

if (resultado01 > resultadoPc) {
console.log("O usuario ganhou") } 
else if (resultadoPc > resultado01) {
   console.log("o Pc Ganhou")
}
else if (resultado01 === resultadoPc) {
   console.log(" Deu empate")
}





} else {
	// o que fazer se o usuário clicar "cancelar"
   console.log("O jogo acabou")
}





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



  /*  if(confirm("pergunta de sim ou não")) {
      // o que fazer se o usuário clicar "ok"

             const carta = comprarCarta(); 
            // Sorteia uma carta. Por exemplo, o rei de ouros

            console.log(carta.texto) 
            // imprime o texto da carta. Nesse caso: "K♦️"

            console.log(carta.valor) 
// imprime o valor da carta (um número). Nesse caso: 10)
   } else {
      // o que fazer se o usuário clicar "cancelar"
      console.log("O jogo acabou".)
   }
   */