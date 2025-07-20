import fs from 'fs'
import color from 'chalk'

const getData = (path , encoding = 'utf-8') => {
return new Promise((resolve , reject) => {
  fs.readFile(path , encoding, (error , data) => {
    if(error){
      reject(error)
    }else{
      resolve(data)
    }
  })})

}

Promise.race([
  getData('files/content1.txt'),
  getData('files/content2.txt'),
  getData('files/content3.txt'),
  getData('files/content4.txt')
])
    .then((data) => console.log('Promise race Method: \n',(color.yellow(data)), typeof(data)))
    .catch((error) => console.log(error))

Promise.all([
  getData('files/content1.txt'),
  getData('files/content2.txt'),
  getData('files/content3.txt'),
  getData('files/content4.txt')
])
    .then((data) => console.log('Promise all Method: \n',(color.yellow(data)), typeof(data)))
    .catch((error) => console.log(error))
