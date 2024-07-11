let signupBtn = document.querySelector("button");
let userNameInput = document.getElementById("name");
let passwordInput = document.getElementById("password");
let emailInput = document.getElementById("email");
let alertMessage = document.querySelector(".alert");
let arr;


if (localStorage.getItem("user")) {
  arr = JSON.parse(localStorage.getItem("user"));
  
} else {
  arr = [];
}



signupBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let obj = {
    name: userNameInput.value,
    password: passwordInput.value,
    email: emailInput.value,
  };

  if (isEmpty() == true) {
    alertMessage.classList.replace("d-none", "d-block");
    alertMessage.innerHTML = "all inputs are required";
  } else if (checkUser() == true) {
    alertMessage.classList.replace("d-none", "d-block");
    alertMessage.innerHTML = "email already exist";
  } else if (checkUser() == false) {
    alertMessage.classList.replace("d-none", "d-block");
    alertMessage.innerHTML = "success";
    alertMessage.classList.replace("alert-danger", "alert-success");
    arr.push(obj);
    localStorage.setItem("user", JSON.stringify(arr));
    window.location.href = "./login/login.html";
  }
});

function checkUser() {
  let users = JSON.parse(localStorage.getItem("user")) || [];
  console.log(users);

  for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
    if (users[i].email == emailInput.value) {
      return true;
    }
  }
  return false;
}

function isEmpty() {
  if (
    userNameInput.value == "" ||
    passwordInput.value == "" ||
    emailInput.value == ""
  ) {
    return true;
  } else {
    return false;
  }
}
