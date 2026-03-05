function addTask() {
    const taskInput = document.getElementById("task");
    const list = document.getElementById("list");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskInput.value;

    // Click once to mark completed, click again to remove
    li.onclick = () => {
        if (li.classList.contains("completed")) {
            li.remove();
        } else {
            li.classList.add("completed");
        }
    };

    list.appendChild(li);
    taskInput.value = "";
}