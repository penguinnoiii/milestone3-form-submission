const fs = require('fs')
const filePath = '.\db.json'

const form = document.getElementById("userForm")
const firstName = document.getElementById("fname")
const lastName = document.getElementById("lname")
const email = document.getElementById("email")
const queryType = document.querySelectorAll('input[name = "query"]')
const message = document.getElementById("message")

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

form.addEventListener("submit", (event) => {
    event.preventDefault()

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log("Error reading file:", err)
            return
        }
    
        let jsonData = JSON.parse(data)
    
        jsonData.users.push(userData)

        fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (error) => {
            if (error) {
                console.log("Error writing file:", error)
                return
            }
            console.log("Data successfully added to the JSON file!")
        })
    })
})

