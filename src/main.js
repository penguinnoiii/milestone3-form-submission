const form = document.getElementById("userForm")
const firstName = document.getElementById("fname")
const lastName = document.getElementById("lname")
const email = document.getElementById("email")
const queryType = document.querySelectorAll('input[name = "query"]')
const message = document.getElementById("message")
const submitButton = document.getElementById("submit")

let userData = {}

firstName.addEventListener("change", (event) => {
    const input = event.target.value
    userData.firstName = input
    console.log(userData)
})

lastName.addEventListener("change", (event) => {
    const input = event.target.value
    userData.lastName = input
    console.log(userData)
})

email.addEventListener("change", (event) => {
    const input = event.target.value
    userData.email = input
    console.log(userData)
})

queryType.forEach((radio) => {
    radio.addEventListener("change", () => {
        userData.queryType = radio.value
        console.log(userData)
    })
})

message.addEventListener("change", (event) => {
    const input = event.target.value
    userData.message = input
    console.log(userData)
})

submitButton.addEventListener("click", (event) => {
    event.preventDefault()

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data saved:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    console.log("Successfully!!!")

    form.reset()
})

const usersListButton = document.getElementById("usersList")

usersListButton.addEventListener("click", () => {
  window.location.href = './public/user.html'
})