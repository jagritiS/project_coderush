async function loadUsers() {
    try {
        const usersList = document.getElementById("users");

        // Show loading text
        usersList.innerHTML = "<li>Loading...</li>";

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        usersList.innerHTML = data.map(user =>
            `<li>${user.name} - ${user.email}</li>`
        ).join("");

    } catch (error) {
        console.error(error);
        document.getElementById("users").innerHTML =
            "<li>Failed to load users ❌</li>";
    }
}