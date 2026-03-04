const form = document.getElementById("myForm");

form.addEventListener("submit", function(e){

  e.preventDefault(); // stops form from refreshing

  let isValid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  // Clear previous errors
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  // Name validation
  if(name.value.trim() === ""){
    nameError.textContent = "Name is required";
    isValid = false;
  }

  // Email validation
  if(email.value.trim() === ""){
    emailError.textContent = "Email is required";
    isValid = false;
  } else if(!email.value.includes("@")){
    emailError.textContent = "Enter valid email";
    isValid = false;
  }

  // Password validation
  if(password.value.length < 6){
    passwordError.textContent = "Password must be 6+ characters";
    isValid = false;
  }

  if(isValid){
    alert("Form submitted successfully!");
    form.reset();
  }

});