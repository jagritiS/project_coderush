document.getElementById("form").onsubmit = function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (!email.includes("@")) {
        error.textContent = "Invalid email";
    } 
    else if (pass.length < 6) {
        error.textContent = "Password too short";
    } 
    else {
        error.textContent = "Success";
    }
};