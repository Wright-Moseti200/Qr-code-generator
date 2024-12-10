let button = document.querySelector("button");

let input = document.querySelector("input");


function change()
{
    let img = document.querySelector("img");
    img.classList.add("effect");
    img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
    input.value="";
     
 }
button.addEventListener("click", change);
