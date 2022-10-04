const url = "http://localhost:5500/api"

function getUsers() {
  fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(e => console.error(e))
}

// GET
function getUser(id) {
  fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
      userAvatar.src = data.avatar
      userName.textContent = data.name
      userCity.textContent = data.city
    })
    .catch(e => console.error(e))
}

// POST (Adicionar)
function addUser(newUser) {
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


// PUT (Alterar)
function updateUser(updatedUser, id) {
  fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(data => alertApi.textContent = data)
  .catch(e => console.error(e))
}

function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: "DELETE",
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
// addUser(newUser)

const updatedUser = {
  name: "Marcelo Clovis",
  avatar: "https://picsum.photos/300/300",
  city: "recife"
}
// updateUser(updatedUser, 1)

deleteUser(4)

getUsers() 
getUser(1)