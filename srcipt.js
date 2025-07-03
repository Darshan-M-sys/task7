    const API_URL = "https://jsonplaceholder.typicode.com/users";
    const container = document.getElementById("user-container");
    const errorMsg = document.getElementById("error-message");
    const reloadBtn = document.getElementById("reload-btn");

    function fetchUserData() {
      container.innerHTML = "";
      errorMsg.textContent = "";

      fetch(API_URL)
        .then(response => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(users => {
          users.forEach(user => {
            const userCard = document.createElement("div");
            userCard.className = "user-card";
            userCard.innerHTML = `
              <h3>${user.name}</h3>
              <p><strong>Email:</strong> ${user.email}</p>
              <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
            `;
            container.appendChild(userCard);
          });
        })
        .catch(error => {
          errorMsg.textContent = "Error fetching data. Please check your internet.";
          console.error("Fetch error:", error);
        });
    }


    window.addEventListener("DOMContentLoaded", fetchUserData);
    
    reloadBtn.addEventListener("click", fetchUserData);
