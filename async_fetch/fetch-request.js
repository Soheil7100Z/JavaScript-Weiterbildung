'use strict';

  const DOM = {}
  DOM.container = document.querySelector('.container')
  DOM.userData = DOM.container.querySelectorAll('.usersData span')
  DOM.btn = DOM.container.querySelector('.button')

  const init = () => {
    fetchUsers().then((data) => listCreate(data))
  }

  DOM.btn.addEventListener('click' , init)

  const listCreate = (person) => {
    const user = [
      person.firstName,
      person.lastName,
      String(person.age),
      person.birthDate,
      person.email,
      person.phone,
      person.address.address,
      person.address.city
    ]
    console.log(user)
    DOM.userData.forEach((el , idx) =>{
      el.textContent = user[idx]
    })
  }

  const fetchUsers = async() => {
    try {
      const res = await fetch('https://dummyjson.com/users')
      if (!res.ok) {
        throw new Error('Loading error')
      }
      const data = await res.json()
      const users = data.users
      // console.log(users)
      const randomIdx = Math.floor(Math.random() * 30) + 1
      return users[randomIdx]
    } catch (error) {
      console.log(error)
    }
  }

  init()
