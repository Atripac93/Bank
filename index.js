let halloUser = document.getElementById("hiUser");
let nameUser = window.prompt("add your name...");

const salutUser = () => {
  halloUser.innerHTML = "Hi " + nameUser.toUpperCase().trim();
};

salutUser();

const visibility = () => {
  const pass = document.getElementById("inputPassword");
  const eyeClosed = document.getElementById("eyeClosed");
  const eyeOpen = document.getElementById("eyeOpen");

  if (pass.type === "password") {
    pass.type = "text";
    eyeClosed.style.display = "none";
    eyeOpen.style.display = "block";
  } else {
    pass.type = "password";
    eyeClosed.style.display = "block";
    eyeOpen.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const eye = document.getElementById("eye");
  eye.addEventListener("click", visibility);
});

let buttonLo = document.getElementById("buttonLogin");
let showMe = document.getElementById("show");

const correctPass = () => {
  const pass = document.getElementById("inputPassword");

  if (pass.value === "ciao") {
    window.location.href = "./pageP.html";
  } else if (pass.value === "") {
    showMe.innerHTML = "introduce something";
  } else {
    showMe.innerHTML = "password no correct";
  }
};

buttonLo.addEventListener("click", correctPass);
