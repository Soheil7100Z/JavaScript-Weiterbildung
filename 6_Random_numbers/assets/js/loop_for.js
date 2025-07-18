'use strict';
  const outputEl = document.querySelector('.output');
  const spanList = Array.from(outputEl.querySelectorAll('span'))
  const btn = outputEl.querySelector('button')
  console.log(btn)

const init = () => {

  btn.addEventListener('click' , getLottoNumber)

}

const getLottoNumber = () => {

  const lottoNumber = generator()
  printLottos(lottoNumber)
  console.log(lottoNumber)

}

const generator = (arrayLottos = []) => {
    for (let i = 1 ; i <= 6; i++) {
    const lotto = Math.floor(Math.random() * 49) + 1
    if (arrayLottos.includes(lotto)){
      --i
      continue
    }
    arrayLottos.push(lotto)
  }
  return arrayLottos
}

const printLottos = (arrayLottos) => {

  arrayLottos.sort((a,b) => a - b)
  spanList.forEach((span , idx) => {
  span.textContent = String(arrayLottos[idx]).padStart(2 , '0')
  })

}

init()
