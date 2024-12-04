import React from "react";

const user = fetch("http://localhost:3000/users")
  .then((response) => response.json())
  .then((data) => {
    const listTable = document.getElementById("user-table");

    data.forEach((user) => {
      const row = document.createElement("tr")
      const nameCell = document.createElement("td")
      const emailCell = document.createElement("td")
      const button = document.createElement("button")

      button.style.backgroundColor = "#e1e6e3"

      nameCell.textContent = user.firstName + " " + user.lastName
      emailCell.textContent = user.email
      button.textContent = "Details"

      button.addEventListener("click", () => {
        alert("Query Type: " + user.queryType + "\nMessage: " + user.message)
      })

      row.appendChild(nameCell)
      row.appendChild(emailCell)
      row.appendChild(button)

      listTable.appendChild(row)
  
    });
  })
  .catch((err) => console.error("Error fetching data:", err));

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("click", () => {
  window.location.href = "https://milestone3-form-submission-btni7jwdt-penguinnoiiis-projects.vercel.app/";
});
