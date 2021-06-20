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
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3
  let respostas = []
  respostas.length = 5
  for (let i = 0; i < respostas.length; i++) {
    switch (i) {
      case 0:
        respostas[i] = (booleano1 && booleano2 && !booleano4)
        break;
      case 1:
        respostas[i] = ((booleano1 && booleano2) || !booleano3)
        break;
      case 2:
        respostas[i] = (booleano2 || booleano3) && (booleano4 || booleano1)
        break;
      case 3:
        respostas[i] = (!(booleano2 && booleano3) || !(booleano1 && booleano3))
        break;
      case 4:
        respostas[i] = (!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3))
        break;
      default:
        break;
    }
  }
  return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
let retornarPar = []
for (let i = 0; i < n; i++) {
  retornarPar.push(i*2)
}
return retornarPar
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
  let maior = num1
  let menor = num1
  if (num2 > maior) {
    maior = num2
  }
  if (num2 < menor) {
    menor = num2
  }
  let Y = maior % menor === 0
  let diferencaNum = Number(maior - menor)
  return { 'maiorNumero': maior, 'maiorDivisivelPorMenor': Y, 'diferenca': diferencaNum }
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10



function segundoMaiorEMenor(array) {
  maior = array[0]
  menor = array[0] * array[1]
  segundoMaior = array[0]
  segundoMenor = array[0]
  for (numbers of array) {
    if (numbers > maior) {
      segundoMaior = maior
      maior = numbers
    } else if (numbers < menor) {
      segundoMenor = menor
      menor = numbers
    }
  }
  if (array.length === 2) {
    segundoMaior = menor
    segundoMenor = maior
  } else if (array.length === 3) {
    let media = 0
    for (numbers2 of array) {
      if ((numbers2 > menor) && (numbers2 < maior)) {
        media = numbers2
      }
      segundoMaior = media
      segundoMenor = media
    }
  }
  return [segundoMaior, segundoMenor]
}


// EXERCÍCIO 11
function ordenaArray(array) {
let aux
for(let last = array.length -1; last > 0; last--){
  for(let i = 0; i < last; i++){
    if(array[i] > array[i+1]){
      aux = array[i]
      array[i] = array[i+1]
      array[i+1] = aux
    }
  }
}
return array
}

// EXERCÍCIO 12
function filmeFavorito() {
const dadoFilme = {
nome: "O Diabo Veste Prada",
ano: 2006,
diretor: "David Frankel",
atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
}
return dadoFilme


}

// EXERCÍCIO 13
function imprimeChamada() {

//   const dadoFilme = {
//     nome: "O Diabo Veste Prada",
//     ano: 2006,
//     diretor: "David Frankel",
//     atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
//     }
const chamadaFavorito = filmeFavorito()
return (`Venha assistir ao filme ${chamadaFavorito.nome}, de ${chamadaFavorito.ano}, dirigido por ${chamadaFavorito.diretor} e estrelado por ${chamadaFavorito.atores.join(', ')}.`)
//   return `Venha assistir ao filme ${dadoFilme.nome}, de ${dadoFilme.ano},dirigido por ${dadoFilme.diretor} e estrelado por ${dadoFilme.atores[0]}, ${dadoFilme.atores[1`
  
// }
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
    return menor.idade <= 17
  })
  return menor18
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

  const resultado = array.map((parame) => {
    return parame * 2
  })
  return resultado


}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const resultado = multiplicaArrayPor2(array)
  const resultado2 = resultado.map((input) => {
    return input.toString()
  })
  return resultado2
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  const resultado = array.map((input) => {
    if (input % 2 === 0) {
      return `${input} é par`
    } else {
      return `${input} é ímpar`
    }
  })
  return resultado
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  const filtroPessoas = pessoas.filter((input) => {
    if ((input.altura >= 1.5) && (input.idade > 14) && (input.idade < 60)) {
      return input
    }
  })
  return filtroPessoas
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const filtroPessoas = pessoas.filter((input) => {
    if (!((input.altura >= 1.5) && (input.idade > 14) && (input.idade < 60))) {
      return input
    }
  })
  return filtroPessoas
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  let checarTrue = false;
  while (!checarTrue) {
    checarTrue = true;
    for (let i = 0; i < consultasNome.length - 1; i++) {
      let nomeSeguinte = consultasNome[i + 1].nome
      let comparaInicial = (consultasNome[i].nome).localeCompare(nomeSeguinte)
      if (comparaInicial === 1) {
        checarTrue = false;
        let tmp = consultasNome[i + 1];
        consultasNome[i + 1] = consultasNome[i];
        consultasNome[i] = tmp;
      }
    }
  }
  return consultasNome;
}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {
  function transformaData(dataParametro) {
    const quebraPalavra = dataParametro.split(`/`)
    let dia = quebraPalavra[0]
    let mes = quebraPalavra[1]
    let ano = quebraPalavra[2]
    let resultado = [ano, mes, dia]
    return resultado
  }


  console.log(`PRIMEIRO PROGRAMA`)

  let checarTrue = false;
  while (!checarTrue) {
    checarTrue = true;
    for (let i = 0; i < consultasData.length - 1; i++) {
      let dataAntes = new Date(transformaData(consultasData[i].dataDaConsulta))
      let dataSeguinte = new Date(transformaData(consultasData[i + 1].dataDaConsulta))
      if (dataSeguinte < dataAntes) {
        checarTrue = false;
        let tmp = consultasData[i + 1];
        consultasData[i + 1] = consultasData[i];
        consultasData[i] = tmp;
      }
    }
  }
  return consultasData;
}

// EXERCÍCIO 20
function calculaSaldo(contas) {
  for (let i=0; i<contas.length; i++){
    let soma
    soma = 0
    for (creditos of contas[i].compras){
      soma += Number(creditos)
    }
    contas[i].saldoTotal = contas[i].saldoTotal - soma
    console.log (contas[i].saldoTotal)
  }
  return contas

}
