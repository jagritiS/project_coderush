// To Validate the email only if there is @gmail.com or hotmail or yahoo
function validate(){
    let email = document.getElementById("email").value;

    if(email.includes("@gmail.com") || 
       email.includes("@yahoo.com") || 
       email.includes("@hotmail.com")){

        alert("Valid Email");
        return true;
    }
    else{
        alert("Invalid Email. Use gmail, yahoo, or hotmail.");
        return false;
    }
}