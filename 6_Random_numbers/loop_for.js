'use strict';
      const outputEl = document.querySelector('.output');
      const spanList = outputEl.querySelectorAll('span')
      outputEl.classList
      let ArrayLottos = []
      for (let i = 1 ; i <= 6; i++) {
        const lotto = Math.floor(Math.random() * 49) + 1
        if (ArrayLottos.includes(lotto)){
          window.location.reload()
          break
        }
        ArrayLottos.push(lotto)
      }
      let x = 0
      for (const span of spanList){
           span.innerText = ArrayLottos[x]
           x++
        }
      console.log(ArrayLottos)
      console.log(spanList)
