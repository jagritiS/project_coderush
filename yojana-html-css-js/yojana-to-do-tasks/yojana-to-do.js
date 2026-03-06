function addTask(){

  const input = document.getElementById("task");
  const list = document.getElementById("list");

  if(input.value.trim() === ""){
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.textContent = input.value;

  li.onclick = function(){
    li.remove();
  };

  list.appendChild(li);

  input.value = "";
}