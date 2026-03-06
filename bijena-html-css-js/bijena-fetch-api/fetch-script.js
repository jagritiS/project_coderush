const users = document.getElementById('users');
async function loadUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    users.innerHTML = data.map(users => `<li>${users.name}</li>`).join('');
}