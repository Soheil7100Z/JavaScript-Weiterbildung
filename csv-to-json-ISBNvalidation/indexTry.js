import csv from 'csvtojson'
import fs from 'fs'

const init = () => {
 csvToJson()
}

const csvToJson = async() => {
  try {
    const dataJson = await csv().fromFile('./data/books.csv')
    if(dataJson) {
       saveBooksJosn(dataJson)
    }
  } catch (error) {
    console.log(error)
  }
}

const saveBooksJosn = (booksJson) => {
    fs.writeFile('./data/books.json' , JSON.stringify(booksJson, null, 2) , (error) =>{
      if(error) {
        console.log(error)
      }
    })
}

init()
