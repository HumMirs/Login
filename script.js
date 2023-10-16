const sign_up = document.getElementById("sign_up");
const log_in = document.getElementById("log_in");
const username_input = document.getElementById("username_input");
const email_input = document.getElementById("email_input");
const password_input = document.getElementById("password_input");
const confirm_input = document.getElementById("confirm_input");
const username_login = document.getElementById("username_login");
const password_login = document.getElementById("password_login");
const signup_container = document.querySelector(".signup_container");
const main_container = document.querySelector(".main-container");
const login_container = document.querySelector(".login_container");
const register_btn = document.getElementById("register_btn");
const login_btn = document.getElementById("login_btn");
const username_p = document.getElementById("username_p");
const email_p = document.getElementById("email_p");
const last_container = document.querySelector(".last_container");
const log_out = document.getElementById("log_out");

let username = "Humay";
let email = "humaymirs@gmail.com";
let password = "1234";
let confirm_p = "1234";
let username1 = "Humay";
let password1 = "1234";
let username2 = "Humay";
let email2 = "humaymirs@gmail.com";

sign_up.onclick = () => {
  signup_container.style.display = "block";
  login_container.style.display = "none";
  main_container.style.display = "none";
  last_container.style.display = "none";
};

register_btn.onclick = () => {
  username = username_input.value;
  email = email_input.value;
  password = password_input.value;
  confirm_p = confirm_input.value;
  if (
    username == "Humay" &&
    email == "humaymirs@gmail.com" &&
    password == "1234" &&
    confirm_p == "1234"
  ) {
    signup_container.style.display = "none";
    login_container.style.display = "none";
    main_container.style.display = "block";
    last_container.style.display = "none";
  } else {
    alert("Wrong input!");
  }
};

log_in.onclick = () => {
  login_container.style.display = "block";
  signup_container.style.display = "none";
  main_container.style.display = "none";
  last_container.style.display = "none";
};

login_btn.onclick = () => {
  username1 = username_login.value;
  password1 = password_login.value;
  email = email_input.value;
  if (username1 == "Humay" && password1 == "1234") {
    username_p.innerText = "Username: " + username;
    email_p.innerText = "Email: " + email;

    last_container.style.display = "block";
    login_container.style.display = "none";
    signup_container.style.display = "none";
    main_container.style.display = "none";
  } else {
    alert("Wrong input!");
  }
};

log_out.onclick = () => {
  document.location = "index.html";
};
