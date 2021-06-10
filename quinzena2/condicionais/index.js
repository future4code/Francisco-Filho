// Exercícios de interpretação de código
//ex01
/*
a) Explique o que o código faz. Qual o teste que ele realiza? 
Ele verifica se um numero é par ou nao
b) Para que tipos de números ele imprime no console "Passou no teste"? 
numero par
c) Para que tipos de números a mensagem é "Não passou no teste"?
numero impar*/

//EX02
//A) O cliente do mercado diz a fruta e recebe o preco
//B)"O preço da fruta ", maça " é ", "R$ 2.25")
//C) o preco da pera vai de 5.5 para 5 reais.

//EX03
//A) a primeira linha pede um numero para o usuario
//B) se digitado 10  a msg é Esse número passou no teste, se digitar -10 da erro
//C)


//Exercícios de escrita de código

//EX01)
/*
const idade = Number(prompt('Digite sua Idade'))

if(idade >= 18) {
    console.log('VOce pode dirigir')
    } else {
        console.log('Voce nao pode dirigir')
    }
*/
//EX02)

/* const turno = prompt('Digite seu turno, V, M, N ?')
if(turno ==='V') {
    console.log('Boa tarde')
} else if (turno === 'M') {
    console.log('Bom dia')
} else if (turno == 'N') {
    console.log('Boa Noite')
} */

// EX03)
/*const turno = prompt('Digite seu turno, V, M, N ?')

switch (turno) {
    case 'V':
        console.log('Boa tarde')
        break
    case 'M':
        console.log('Bom dia')
        break
    case 'N':
        console.log('Boa Noite')
        break
    default:
        console.log('voce digitou merda')
        break
}*/
//EX04)
/*const genero = prompt('Digite seu genero favorito').toLowerCase()
const ingresso = Number(prompt('Qual o valorp para torrar ?'))

    if (genero === 'fantasia' && ingresso <= 15) {
        console.log('Bom Filme') 
    } else {
        console.log('Escolha outro ')
    }
*/


const nome = prompt('Qual seu nome ?')
const tipoJogo = prompt('Qual o tipo de jogo, IN ou DO ?')
const etapaJogo = prompt('Qual sua etapa do Jogo,SF, DT, FI ? ')
const categoria = Number(prompt('Qual a categoria de 1 a 4 ?'))
const quantidade = Number(prompt('Vai querer quantos ingressos? '))


function valorIngresso(tipoJogo, etapaJogo, categoria, quantidade) {
    



}







console.log("Nome do Cliente : ", nome)
console.log("Tipo de Jogo: ", tipoJogo)
console.log("Etapa do Jogo: ", etapaJogo)
console.log("Categoria do Jogo: ", categoria)
console.log("Quantidades de ingressos ", quantidade)
console.log("Valor do ingresso", resultValor)
console.log("Valor Total", RESULTADOTOTAL)



/*Nome do cliente:  
Tipo do jogo:   
Etapa do jogo:  
Categoria:  
Quantidade de Ingressos:  
---Valores--- 
Valor do ingresso:  
Valor total:  */