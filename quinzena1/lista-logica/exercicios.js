// Exemplos


// Exercício 0A
function soma() {
  // escreva seu código aqui

  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')
  

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const altura = prompt('Qual a altura ?')
  const largura = prompt('Qual a largura')

  console.log(Number(altura) * Number(largura))
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = Number(prompt('Qual o Ano Atual ?'))
  const anoDeNascimento = Number(prompt('Nasceu em que ano? '))
  
  const IdadeAtual = anoAtual - anoDeNascimento
  console.log(IdadeAtual)
  
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const peso = Number(prompt('Qual seu Peso ?'))
  const altura = Number(prompt('Qual sua altura ?'))

  const imc = peso / (altura * altura)
  console.log(imc)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui

  const nome = prompt('Qual seu Nome ?') 
  const idade = prompt('QUal sua idade')
  const email = prompt('Qual seu e-mail?')
  
  console.log('Meu nome é '+ nome +  ', tenho ' +  idade + ' anos, e o meu email é ' +  email + '.')

}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const cor1 = prompt('Qual sua cor favorita ? ')
  const cor2 = prompt('Qual sua cor favorita ? ')
  const cor3 = prompt('Qual sua cor favorita ? ')
  let corFavorita = [cor1, cor2, cor3]


  console.log(corFavorita)

}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  let string = prompt("escreva")

  console.log(string.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custo = Number(prompt('Qual o custo do espetaculo ?'))
  const ingresso = Number(prompt('Qual o custo do ingresso ?'))
  const custoEspetaculo = custo / ingresso
  console.log(custoEspetaculo)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const string1 = prompt('Digite uma palavra ')
  const string2 = prompt('Digite uma palavra ')
  const comparacao =  Number(string1.length) === Number(string2.length)
  console.log(comparacao)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui

  let string1 = prompt('Digite uma palavra')
  let string2 = prompt('Digite uma palavra')

  let string1M = string1.toUpperCase()
  let string2M = string2.toUpperCase()

  const comparacao = string1M == string2M
  console.log(comparacao)
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  let anoAtual = Number(prompt('Digite o ano atual '))
  let anoNasc = Number(prompt('Digite o ano Nascimento '))
  let anoRg = Number(prompt('Digite o ano RG '))
 
  let idade = anoAtual - anoNasc
  let emissao = anoAtual - anoRg


  console.log((idade<=20&&emissao>=5)||(idade>20&&idade<=50&&emissao>=10)||(idade>50&&emissao>=15))



}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui

  let ano = Number(prompt('Qual o ano ?'))
  let anoQuatroc = (ano%400===0)
  let quatro = (ano%4===0)
  let cem = (ano%100!=0)

  console.log(quatro && cem || anoQuatroc)

  
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  let ano18 = prompt('Voce tem mais de 18 anos ?')
  let ensMed = prompt('Voce tem ensino medio ?')
  let hora = prompt('Voce tem Horario ?')

  let ano18Ch = ano18 === 'sim'
  let ensmed = ensMed === 'sim'
  let hora01 = hora === 'sim'

  console.log(ano18Ch && ensmed && hora01)


}