document.getElementById('form').onsubmit=(e)=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(!email.includes('@'))
        error.textContent = 'Please enter a valid email address.';
    else if(password.length < 6)
        error.textContent = 'Password must be at least 6 characters long.'; 
    else
        error.textContent = 'Form submitted successfully!';
        
}