async function loadUsers(){

  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();

  const usersList = document.getElementById("users");

  usersList.innerHTML = data
    .map(user => `<li>${user.name}</li>`)
    .join("");
}