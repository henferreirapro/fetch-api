const url = "http://localhost:5500/api"

function getUsers() {
  fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(e => console.error(e))
}

function getUser() {
  fetch(`${url}/1`)
    .then(response => response.json())
    .then(data => {
      userAvatar.src = data.avatar
      userName.textContent = data.name
      userCity.textContent = data.city
    })
    .catch(e => console.error(e))
}

getUsers()
getUser()