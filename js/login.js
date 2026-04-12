import { usersData } from "./data.js";

console.log(usersData);

window.LogIn = function () {
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
  });
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let statusBar = document.getElementById("statusBar");
  Loading();

  let check = usersData.find((data) => {
    return data.email === email && data.password === password;
  });

  if (email && password) {
    if (check) {
      console.log("Log in successfull!");
      clearInput();
      statusBar.innerHTML = `<span class="text-success fw-semibold">Log in Successfull</span> `;
      
      setTimeout(() => {
        window.location.href = "../index.html";
      }, 2500);
    } else {
      console.log("Invalid email or password");
      clearInput();
      statusBar.innerHTML = `<span class="text-danger fw-semibold">Invalid Email or Password</span> `;
      setTimeout(() => {
        statusBar.textContent = "";
      }, 2500);
    }
  } else {
    console.log("Please enter Email and Password");
    clearInput();
    statusBar.innerHTML = `<span class="text-info fw-semibold">Please Enter Email and Password</span> `;

    setTimeout(() => {
      statusBar.textContent = "";
    }, 2500);
  }
};

function Loading() {
  let loginButton = document.getElementById("loginButton");

  loginButton.innerHTML = `<button  type="submit" class="btn btn-warning w-100 " disabled  onclick="LogIn()">Loading...</button>
            </div>`;
  setTimeout(() => {
    loginButton.innerHTML = `   <button type="submit" class="btn btn-success w-100" onclick="LogIn()">Log in</button>`;
  }, 2000);
}

function clearInput() {
  setTimeout(() => {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  }, 2000);
}
