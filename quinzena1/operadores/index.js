//const bool1 = true
//const bool2 = false
//const bool3 = !bool2

//let resultado = bool1 && bool2
//console.log("a. ", resultado)

//resultado = bool1 && bool2 && bool3 
//console.log("b. ", resultado) 

//resultado = !resultado && (bool1 || bool2) 
//console.log("c. ", resultado)

//console.log("d. ", typeof resultado)

// Resultados False, False, True, Boleana


//let primeiroNumero = prompt("Digite um numero!")
//let segundoNumero = prompt("Digite outro numero!")

//const soma = Number(primeiroNumero) + Number(segundoNumero)

//console.log(soma)



 //Exercícios de escrita de código
 //EX01

/*const idade1 = Number(prompt("Qual a sua idade ?"))
const idade2 = Number(prompt("Qual a idade do seu amigo ?"))
const diminui = idade1 >= idade2
const diferenca = idade1 - idade2

console.log("Sua idade é maior do que a do seu melhor amigo?" + diminui) 
console.log(diferenca) */

//EX02
/*const numPar = Number(prompt("Insira un numero Par "))
const resto = Number(numPar % 2)
console.log(resto)*/
// ao colocar um numero impar ele da o resultado 1

//EX03
/* const idade = Number(prompt("Qual a sua idade? "))
const meses = idade * 12
const dias = idade * 365
const horas = idade * 8760
console.log(meses)
console.log(dias)
console.log(horas)*/ 

//ex04
const num01 = Number(prompt("Primeiro numero ?"))
const num02 = Number(prompt("segundo Numero ?"))

const maior01 = num01 >= num02
const primIgual = num01 === num02
const primDiv = (num01 % num02) === 0
const secDiv = (num02 % num01) === 0


console.log(maior01)
console.log(primIgual)
console.log(primDiv)
console.log(secDiv)
/* O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? */