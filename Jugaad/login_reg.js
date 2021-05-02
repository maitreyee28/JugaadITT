const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
//const sign_up_otp = document.querySelector("#signup");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

/*document.getElementById("signup").addEventListener("click", myFunction);
  function myFunction() {
  window.location.href="otp.html";
  }*/

/*document.getElementById("signup").onclick = function () {
  location.href = "otp.html";
  console.log(location.href);
  };*/

