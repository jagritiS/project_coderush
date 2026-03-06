// function validateEmail() {
//     let email = document.getElementById("email").value;

//     if (
//         email.includes("@") &&
//         (email.endsWith("@gmail.com") ||
//          email.endsWith("@yahoo.com") ||
//          email.endsWith("@hotmail.com"))
//        ) 
//     {
//         document.getElementById("msg").innerText = "Valid Email";
//         return true;
//     } 
//     else 
//     {
//         document.getElementById("msg").innerText = "Only gmail, yahoo or hotmail allowed";
//         return false;
//     }
// }
// setInterval(()=>{
//  document.body.style.background =
//  "#" + Math.floor(Math.random()*16777215).toString(16);
// },500);

// setInterval(()=>{
//  document.body.style.background =
//  "#" + Math.floor(Math.random()*16777215).toString(16);
// },500);

// console.log(navigator.userAgent)


// document.addEventListener("mousemove", function(event) {

//  let x = event.clientX;
//  let y = event.clientY;

//  document.getElementById("coords").innerText =
//  "Mouse X: " + x + " Mouse Y: " + y;

// });

let text = "Welcome to JavaScript Magic!";
let i = 0;

function type(){
if(i < text.length){
document.body.innerHTML += text.charAt(i);
i++;
setTimeout(type,100);
}
}
type();