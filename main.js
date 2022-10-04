const url = "http://localhost:5500/api"

function getUsers() {
  fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(e => console.error(e))
}

function getUser() {
  fetch(`${url}/2`)
    .then(response => response.json())
    .then(data => {
      userAvatar.src = data.avatar
      userName.textContent = data.name
      userCity.textContent = data.city
    })
    .catch(e => console.error(e))
}

// POST
function addUser() {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(e => console.error(e))
}

const newUser = {
  name: "Henrique Ferreira",
  avatar: "https://avatars.githubusercontent.com/u/62857389?v=4",
  city: "SP"
}

addUser(newUser)
getUsers() 
getUser()