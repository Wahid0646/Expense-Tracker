const signUp = document.getElementById("signUp");
const signIn = document.getElementById("signIn");
const container = document.getElementById("container");
const signUpBtn = document.getElementById("signUpBtn");
const loginBtn = document.getElementById("loginBtn");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");

signUp.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signIn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const spans = document.querySelectorAll('.ap');

spans.forEach(span => {
  console.log(span.dataset);
  console.log(span.dataset.mentionValue);
});

function login() {
  const loginDetails = {
    loginEmail: loginEmail.value,
    loginPassword: loginPassword.value,
  };

  axios
    .post("http://localhost:3000/user/login", loginDetails)
    .then((result) => {
      alert(result.data.message);
      localStorage.setItem("token", result.data.token);
      window.location.href = "/homePage";
    })
    .catch((error) => {
      if (error.response) {
        const errorMessage = error.response.data.message;
        alert(errorMessage);
      } else {
        alert("An error occurred. Please try again later.");
      }
    });
}

/*function signup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const signupDetails = {
    name: name,
    email: email,
    password: password
  };

  axios
    .post("http://localhost:3500/user/signup", signupDetails)
    .then((result) => {
      alert(result.data.message);
      window.location.href = "/login";
    })
    .catch((error) => {
      if (error.response) {
        const errorMessage = error.response.data.message;
        alert(errorMessage);
      } else {
        alert("An error occurred. Please try again later.");
      }
    });
}
*/
loginBtn.addEventListener("click", login);
//signUpBtn.addEventListener("click", signup);
