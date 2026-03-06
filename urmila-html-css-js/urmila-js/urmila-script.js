
// setInterval(()=>{
//  document.body.style.background =
//  "#" + Math.floor(Math.random()*16777215).toString(16);
// },500);


// console.log(navigator.userAgent)

// document.addEventListener("mousemove", function(event) {

//  let x = event.clientX;
//  let y = event.clientY;

//  document.getElementById("coords").innerText =
//  "Mouse X: " + x + " Mouse Y: " + y;

// });
//change the background of mouse cursor

// const box = document.createElement("div");

// box.style.width="20px";
// box.style.height="20px";
// box.style.background="red";
// box.style.position="absolute";

// document.body.appendChild(box);

// document.addEventListener("mousemove",(e)=>{
//  box.style.left = e.pageX+"px";
//  box.style.top = e.pageY+"px";
// });

// let text = "Welcome to JavaScript Magic!";
// let i = 0;

// function type(){

// if(i < text.length){
// document.body.innerHTML += text.charAt(i);
// i++;
// setTimeout(type,100);
// }
// }
// type();

alert("Welcome to JavaScript Magic!");

let studentName = "Ram";
let marks = 85;

let price = 100;
let quantity = 3;

console.log(price * quantity);

function greet(name){
return "Hello " + name;
}

console.log(greet("Student"));

document.body.style.background = "yellow";

document.addEventListener("click", () => {
alert("You clicked the page!");
});


