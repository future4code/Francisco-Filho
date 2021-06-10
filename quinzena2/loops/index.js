




//Exercícios de interpretação de código
//EX01)
/* O codigo está fazendo 5 contagens e adicionando 1 a cada volta, o resultado é 10 */

//EX02
//a) será impresso todos os numeros maiores que 18
//b) Sim seria possivel, colocaria for numero of lista


//EX03)



//Exercícios de escrita de código

//EX01)
// let quantidades = Number(prompt('Quantos bixos vc tem ?'))

// let arrayPets = []
// let novospets = " "

// if (quantidades === 0) {
//     console.log('Adote um pet')
// } else {
//     for(let i = 0; i < quantidades; i++)

//         novospets = prompt('Qual o nome do pet ?')
//     arrayPets.push(novospets)

// }

// console.log(arrayPets)


// EX02)

//const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]


//A)
/*for (i = 0; i < array.length; i++)
  document.writeln(array[i]);
*/

// B)
/*for (i = 0; i < array.length; i++)
  document.writeln(array[i] / 10 );
*/


//C)
 /* for (i = 0; i < array.length; i++) {
      if ((array[i] % 2) === 0 ) {
        document.writeln(array[i]);
      }
  }*/

 /* for (i = 0; i < array.length; i++)
  document.writeln(`O elemento do índex ${i}  é ${array[i]}`);
*/
  
// D)
/*const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

 function pegaMaior(array) {
   let maiorNumero = 0

  for (let i = 0; i < array.length; i++) {
     if (array[i] > maiorNumero) {
       maiorNumero = array[i]
  }
}
   return maiorNumero
 }
 function pegaMenor(array) {
    let menorNumero = 22
 
   for (let i = 0; i < array.length; i++) {
      if (array[i] < menorNumero) {
        menorNumero = array[i]
   }
 }
    return menorNumero
  }
 console.log(` O maior número é ${pegaMaior(array)} e o menor é  ${pegaMenor(array)}  `)*/