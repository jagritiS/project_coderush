function validate(){
 let email = document.getElementById("email").value;

 if(!email.includes("@")){
  alert("Invalid email");
 } else {
  alert("Valid email");
 }
}


setInterval(()=>{
 document.body.style.background =
 "#" + Math.floor(Math.random()*16777215).toString(16);
},500);


console.log(navigator.userAgent);


document.addEventListener("mousemove", function(event) {

 let x = event.clientX;
 let y = event.clientY;

 document.getElementById("coords").innerText =
 "Mouse X: " + x + " Mouse Y: " + y;

});


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