// import valid from 'validator'
import valid from 'https://cdn.skypack.dev/validator';

const DOM = {};
DOM.container = document.querySelector('.container')
DOM.divListIsbn = Array.from(DOM.container.querySelectorAll('.list div'))
DOM.error = DOM.container.querySelector('.error')
// console.log(DOM.error)

const init = () => {
 getData()
}

const getData = async() => {
  try {
    const res = await fetch('./data/books.json')
    if(!res.ok) {
      throw new Error('There is no data to be displayed');
    }
    DOM.error.textContent = ''
    const data = await res.json()
    displayBooksISBN(data)
  } catch (error) {
    console.log(error)
    DOM.error.style.color = '#EA2027'
    DOM.error.textContent = error

  }
}

const displayBooksISBN = (booksJson) => {
  // console.log(booksJson)
  DOM.divListIsbn.forEach((el  , idx) =>{
    if(!valid.isISBN(booksJson[idx].ISBN)) {
      el.style.color = '#EA2027'
      el.textContent = booksJson[idx].ISBN
    }else{
      el.textContent = booksJson[idx].ISBN
    }

  })
}


init()
