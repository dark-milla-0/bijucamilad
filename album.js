function abrirMenu(){
    let area = document.querySelector('.menu--area')
    if(area.classList.contains('menu--opened') == true) {
      area.classList.remove('menu--opened')
    } else {
      area.classList.add('menu--opened')
    }
  }

const c = (el) => document.querySelector(el)

exibirArea = () => {
  let m = c('#imagem')
  let a = c('.area')

  if(a.style.display == 'none') {
    a.style.display = 'flex'
    m.style.position = 'absolute'
  } else {
    a.style.display = 'none'
    m.style.position = 'relative'
  }
}

mostrar = (element) => {
  let cards = c('.cards1')
  let card = c('.cards')
  let bot1 = c('.desc .botao:nth-child(3)')

  if(card.style.display != 'none') {
    card.style.display = 'none'
  } 
  if(cards.style.display != 'flex') {
    cards.style.display = 'flex'
  }

  element.style.display = 'none'
  bot1.style.display = 'inline-block'

  reMostrar = (elemento) => {
    let bot2 = c('.desc .botao:nth-child(2)')

   if(card.style.display != 'flex') {
      card.style.display = 'flex'
    }
   if(cards.style.display != 'none') {
      cards.style.display = 'none'
    }

  elemento.style.display = 'none'
  bot2.style.display = 'inline-block'
    
  }

}

function voltar() {
  history.back()
}

joiaJson.map((item, index)=>{
  let joiaItem = c('.models .joia--item').cloneNode(true)

  joiaItem.querySelector('.joia--item--img img').src = item.img
  joiaItem.querySelector('span').innerHTML = item.numberP


  c('.joia--area').append(joiaItem)
})