'use strict';
  const DOM = {}
  DOM.container = document.querySelector('.container')
  DOM.img = DOM.container.querySelectorAll('.imageTag')
  DOM.btn = DOM.container.querySelector('.button')

  const init = () => {
    getData().then((data) => imgListing(data))
  }

  DOM.btn.addEventListener('click' , init)

  // console.log(DOM.img[0].src)
   const imgListing = (cats) => {
    DOM.img.forEach((el , idx) => {
        el.src = cats[idx].url
        el.alt = cats[idx].id
      })
  }

  const getData = async() => {
    try {
      const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      if(!res.ok) {
        throw new Error('Data loading error');
      }
      const data = await res.json()
      // console.log(data)
      return data
    } catch (error) {
      console.log(error)
    }

  }

  init()
