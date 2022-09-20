function trocarImagem(filename, comidaName) {
  document.querySelector('.image').setAttribute('src', 'images/'+filename)
  document.querySelector('.image').setAttribute('data-comida', comidaName)
}
function pegarComida() {
  let comida = document.querySelector('.image').getAttribute('data-comida')
  alert('A comida é '+comida)

}

function subirTela() {
  window.scrollTo({
    top:0,
    left:0,
    behavior: "smooth"
  })
}

function decidirBotaoScroll() {
  if(window.scrollY === 0) {
    //ocultar o botao
    document.querySelector('.scrollbutton').style.display = 'none'
  } else {
    //mostrar o botao
    document.querySelector('.scrollbutton').style.display = 'block'
  }
}
window.addEventListener('scroll', decidirBotaoScroll)

let ingredientes = [
  ['uva', 'morango', 'pera'],
  ['massa', 'cobertura', 'ovo']
]

console.log(ingredientes[1][2])

function mostrarTelefone(elemento) {
  elemento.style.display = 'none'
  document.getElementById('telefone').style.display = 'block'
}

let carro = {
  nome: 'uno',
  modelo: 2000,
  peso: '800kg',
  ligado: false,
  ligar: function() {
    this.ligado = true
    console.log('vrum!vrum!')
  },
  acelerar: function() {
    if(this.ligado == true) {
      console.log('riririririri')
    } else {
      console.log('carro não está ligado')
    }
  }
}
console.log('o carro é ' + carro.modelo)
carro.ligar()
carro.acelerar()


let carros = [
  {nome: 'fiat', modelo: 'palio'},
  {nome: 'fiat', modelo: 'uno'},
  {nome: 'toyota', modelo: 'corola'}
]
console.log(carros[1].modelo)

function abrirMenu(){
  let area = document.getElementById('menu--area')
  if(area.classList.contains('menu--opened') == true) {
    area.classList.remove('menu--opened')
  } else {
    area.classList.add('menu--opened')
  }
}

let dia = 6
let diaNome = ''

switch(dia) {
  case 6:
  case 7:
    diaNome = 'final de semana'
    break
  default:
    diaNome = 'dia de semana'
    break
}

document.getElementById('dia').innerHTML = `Hoje é ${diaNome}`

let texto = ''

for(let i = 0; i < 50; i++) {
  texto = texto + i + '</br>'
}
 
document.getElementById('demo').innerHTML = texto

let cars = ['uno', 'palio', 'fusca']
let html = '<ul>'
for(let v in cars) {
  html += '<li>'+ cars[v] +'</li>'
}
html += '</ul>'
document.getElementById('list').innerHTML = html

let htmlw = ''
let c = 0
while(c <= 10) {
  htmlw += 'número: '+c+'</br>'
  c++
}

for(let c = 0; c <= 10; c++) {
  htmlw += c + '</br>'
}

document.getElementById('loop').innerHTML = htmlw

let name = 'ovo, leite, farinha, massa'
let res = name.split(',')

console.log(res)


//name.
//length - tamanho da string
//indexOf('') - procurar texto - se não achar retorna -1
//slice(0, 10) - comece em 0 termine em 10
//substr(7, 4) - comece no 7 com 4 caracteres
//replace('pecure por', 'e subustitua por') 
//toUpperCase() - maiusculo
//toLowerCase() - minuscula
//trim() - anular os espaços 
//charAt(3) - qual caracter está na posição 3 ou name[3]
//split(' ') - trransformar em array

let n = '10'

let r = parseInt(n) + 5
console.log(r)

//toString() - tranformar em string
//toFixed(3) - tres casas decimais depois do ponto
//parseInt(variavel) - tranformar em numero inteiro
//parseFloat(variavel) - tranformar em numero decimal flutuante

let lista = ['ovo', 'manteiga', 'farinha', 'massa']

lista.sort()
lista.reverse()
let ques = lista

console.log(ques)

//toString() - separar array por virgula
//join('-') - separar array por -
//indexOf('item') - onde está o item se não tiver, retorna -1
//pop() - remover ultimo item do array
//shifit() - remover primeiro item do array
//push('adicinar') - adicionar item no array
//splice(1, 1) - remover apartir do item 1, 1 item apenas
//lista.concat(lista2) - juntar as listas
//.sort() - ordenar por ordem alfabética
//reverse() - inverter a ordem

let listnum = [
  {id: 1, nome: 'Mila', sobrenome: 'oliveira'},
  {id: 2, nome: 'Chazz', sobrenome: 'eaton'},
  {id: 3, nome: 'Magdalena', sobrenome: 'perfumer'}
]
//let listnum2 = []

/*listnum2 = listnum.map(function(item) {
  return item * 2
}) */



/*listnum2 = listnum.filter(function(item) {
  if(item < 20) {
    return true
  } else {
    return false
  }
}) */



//todos - listnum2 = listnum.every(function(item) {
//alguns 

/*listnum2 = listnum.some(function(item) {
  if(item < 20) {
    return true
  } else {
    return false
  }
}) */

//let listnum = [45, 9, 4, 25, 16]
/* listnum2 = listnum.findIndex(function(item) {
  //findIndex - retorna a posicao do item 
  return (item == 16) ? true : false 
}) */

let pessoa = listnum.find(function(item) {
  return (item.id == 3) ? true : false 
})

let resultado = pessoa

console.log(resultado)


let d = new Date()
let novoValor = d.getSeconds() 


console.log(novoValor)

//d.toDateString() - dia da semana, mês. dia, ano
//toUTCString() - dia da semana, dia, ano, sem fuso horario 
//new Date(ano, mês(começa do 0), dia, hora, minuto, segundo)
//d.getFullYear() - pegar ano atual
//d.getMonth() - mês atual
//getDay() - dia da semana de 0 a 6 
//getDate() - dia do mês 
//getHours \ minutes \ secunds - pegar as horas \ minutos \ segundos


let date = new Date()

let hora = date.getHours()

if (hora >= 5 && hora < 12) {
 // alert('É DE MANHÃ')
} else if (hora >= 12 && hora < 18) {
 // alert('É DE TARDE')
} else {
 // alert('É DE NOITE')
}

let day = new Date()
day.setHours(day.getHours() + 1)

let newv = day
console.log(newv)

//day.setMonth(11) - mudar para o mês 11
//day.setDate(3) - mudar para o dia 3
//day.setDate(day.getDate() + 5) - aumentar 5 dias

let newValue = Math.floor(Math.random() * 100)

console.log(newValue)

//Math.PI - calcular o pi
//Math.round() - arredondar número, se for maior que 50 arredonda pra cima, se for menor arredonda pra baixo
//Math.floor() - sempre arredondar para baixo
//Math.ceil() - sempre arredondar para cima
//Math.abs() - retornar o positivo de um numero
//Math.min() - retorna o menor numero dentro do parametro
//Math.max() - retorna o maior numero dentro do parametro
//Math.floor(Math.random() * 100) - gerar um numero aleatorio entre 0 e 100



  
function buscar() {
  let cam1 = document.getElementById('camp1')
  let cam2 = document.getElementById('camp2')
  let cam3 = document.getElementById('camp3')
  let resc = document.getElementById('rescamp')
  let c1 = Number(cam1.value)
  let c2 = Number(cam2.value)
  let c3 = Number(cam3.value)
  let men = Math.min(c1, c2, c3)
  
  
  resc.innerHTML = `o menor valor é ${men}`
}


let timer

function começar() {
  timer = setInterval(showTime, 1000)
}

function parar() {
  clearInterval(timer)
}


function showTime() {
  let d = new Date()
  let h = d.getHours()
  let m = d.getMinutes()
  let s = d.getSeconds()
  let text = `${h}:${m}:${s}`

  document.querySelector('.demo').innerHTML = text
}

//1000 milisegundos é 1 segundo
//setInterval(função que quer rodar, de quanto em quando tempo quer rodar)
//clearInterval(variavel para parar)


let time
function rodar() {
  time = setTimeout(function() {
  document.querySelector('.dem').innerHTML = 'rodou'
  }, 2000)
}

function stop() {
  clearTimeout(time)
}

//setTimeout - esperar um tempo rodar a função
//setTimeOut - parar função antes de começar


//desconstruindo objeto
let pes = {
  nome: 'camila',
  sobrenome: 'oliveira',
  idade: 20,
  sociais: {
    facebook: 'camil',
    instagram: {
      url: '@ol',
      seguidores: 80
    }
  },
  
}

function pegarNomeC({nome, sobrenome, sociais:{instagram:{url:instagram}}}) {
  return `${nome} ${sobrenome} siga em ${instagram}` 
}
console.log(pegarNomeC(pes))


//descontruindo array

let info = ['camila ol', 'camila', 'oliveira', '@milla']

let [nomeComple, , , insta] = info

console.log(nomeComple, insta)

function criar() {
  return [1,2,3]
}

let [a,b,h] = criar()
console.log(a,b,h)

//arrow function
/*
function somar(x, y) {
  return x + y
}


let somar = (x, y) => {
  return x + y
}
*/

let somar = (x, y) => x+y

let letrasNoNome = (nome) => nome.length

console.log(letrasNoNome('camila'))

//Spread Operator
let numbrs = [1,2,3,4]
let outros = [...numbrs, 5, 6, 7, 8]

console.log(outros)

/*
let inf = {
  nam: 'camila',
  sbn: 'oliv',
  idade: 20
}

let novInf = {
  ...inf,
  cidade: 'TB',
  estado: 'pr',
  país: 'brasil'
}
console.log(novInf)
*/

function adicionarInf(inf) {
  let novaInf = {
    ...inf,
    status: 0,
    token: 'hgjklotrrd',
    data_cad: '23/09'
  }
  return novaInf
}
console.log(adicionarInf({nam: 'camila', sbn: 'oliv'}))

//Operator Rest
function adic(...numeros) {

  console.log(numeros)
}
adic(5, 6, 9, 78, 4, 'camila')

//juntar Spread com Rest

function adc(noms, ...novoNoms) {
  let conjunto = [
    ...noms,
    ...novoNoms
  ]

  return conjunto
}
let noms = ['milla', 'tereza']
let outs = adc(noms, 'maria', 'ana', 'clara')
console.log(outs)


//includes
let list1 = ['ovo', 'café', 'arroz', 'macrrão']

console.log(list1.includes('ovo'))

//repeat
console.log(' hello '.repeat(3))

//keys, values, entries
let lt = ['maçã', 'uva', 'pera', 'guava']

console.log(Object.entries(lt))

//keys - pegar valores das chaves (0, 1, 2)
//values - pegar valores
//entries - criar dois arrays em cada valor, a posição e o valor

//padEnd, padStart, String
let tel = '5'

console.log(tel.padStart(9, '*'))

//padEnd - (9, '*') - 1° parametro - qual deve ser o tamanho, 2° parametro o que eve ser colocado na continuação
//padStart - é o padEnd começando de trás

let card = '1234123412341234'
let lastDigits = card.slice(-4)

let cardMasc = lastDigits.padStart(16, '*')

console.log(`seu cartão é esse ${cardMasc}?`)

//slice - pegar os 4 ultimos numeros

