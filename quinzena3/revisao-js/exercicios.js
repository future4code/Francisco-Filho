// EXERCÍCIO 01
function inverteArray(array) {
  var arrayInvertido = array.slice(0).reverse()
  return arrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {

  let arrayNumerosPares = []
  for(let valor of array){
    if(valor % 2 === 0){
     
      arrayNumerosPares.push(valor * valor)
      
    }

  }
  return arrayNumerosPares
   
  }
 


// EXERCÍCIO 03
function retornaNumerosPares(array) {
  
  let arrayNumerosPares = []
    for(let valor of array){
      if(valor % 2 === 0){
       
        arrayNumerosPares.push(valor)
        
      }
  
    }
    return arrayNumerosPares

}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
 let maiorNumero = 0
 for(let i = 0; i < array.length; i++ ){
      if(array[i] > maiorNumero){
        maiorNumero = array[i]
      }

 }

return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  for(let i = 0; i < array.length; i++ ){
    console.log(array.length)
  }
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {


 
    if (a==b && b==c) {
      return 'Equilátero';}
    else {
    if (a==b || a==c || c==b) {
      return 'Isósceles';}
    else {
      return 'Escaleno';}
    }
 
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {

  
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
 let ret =  {largura: lado1, altura: lado2, perimetro: 2 * (lado1 + lado2), area: lado1 * lado2}

 return ret
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const pessoaAnonima = {
  ...pessoa,
  nome: "ANÔNIMO"	
  }
return pessoaAnonima

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const maior18 = arrayDePessoas.filter((maior) => {
    return maior.idade >= 18
  })
  return maior18
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const menor18 = arrayDePessoas.filter((menor) => {
    return menor.idade <= 18
  })
  return menor18
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

  for(let valor of array){
    return valor * 2
  }


}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
