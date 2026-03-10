function addTask(){
    const li=document.createElement("li");
    li.textContent=document.getElementById("task").value;
    li.onclick=()=>li.remove();
    taskList.appendChild(li);
    
}