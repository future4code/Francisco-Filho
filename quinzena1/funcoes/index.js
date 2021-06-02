//Exercícios de interpretação de código 01
// A)  sera impresso no console, os numeros 10 e 50
// B) continua funcionando e aparece 10 e 50

//Exercicios de interpretação de codigo02
//A) a função verifica se existe a palavra cenoura na frase inserida pelo usuario
//B) True/True//True


//Exercícios de escrita de código
/*function imprimiFrase() {
	console.log('Eu sou Francisco, tenho 31 anos, moro no Rio de Janeiro e sou geografo.')
}*/

/*
	let nome = prompt('Qual seu nome ? ')
	let anos = Number(prompt('Qual sua idade ? '))
	let cidade = prompt('Qual sua cidade ?')
	let profissao = prompt('Qual sua profissão ? ')

function fraseMontar(nome, anos, cidade, profissao) {

	const frase = 'Eu sou ' + nome + ', tenho ' + anos + ', moro em  ' + cidade + ' e Sou ' + profissao
	return frase
}

console.log(fraseMontar(nome, anos, cidade, profissao))
*/


// ex02
// A
/*
let num1 = 2
let num2 = 6

function calculo(num1, num2) {
	const soma = num1 + num2
	return soma

}

console.log(calculo(num1, num2))
*/

//B

/*let nume1 = 2
let nume2 = 6

function confBool(nume1, nume2) {
	const boole = nume1 >= nume2
	return boole

}
console.log(confBool(nume1, nume2))*/

//C

/*let numeE = Number(prompt('Digite um numero '))

function confere(numeE) {

	const impar = (numeE % 2) === 0
	return impar
}
console.log(confere(numeE))*/

/*let frase = prompt('Digite a frase')

function fraseParaImprimir(frase) {

	const fraseImp =  frase.length + ' digitos para a frase ' + frase.toUpperCase()
	return fraseImp
}
console.log(fraseParaImprimir(frase)) */

//EX03

let numero01 = Number(prompt(' Digite um numero '))
let numero02 = Number(prompt(' Digite um numero '))

function soma(numero01, numero02) { 
	let somando = numero01 + numero02
	return somando

}
function diminu(numero01, numero02) { 
	let diminuindo = numero01 - numero02
	return diminuindo

}
function multi(numero01, numero02) { 
	let multiplicando = numero01 * numero02
	return multiplicando

}

function divi(numero01, numero02) { 
	let dividindo = numero01 / numero02
	return dividindo

}
console.log(divi(numero01, numero02))
console.log(multi(numero01, numero02))