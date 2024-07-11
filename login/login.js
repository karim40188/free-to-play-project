let loginBtn = document.getElementById("loginBtn");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

let users = JSON.parse(localStorage.getItem("user"));

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let obj = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
    if (users[i].email == obj.email && users[i].password == obj.password) {
      location.href = "../home/home.html";
    }
  }
});
