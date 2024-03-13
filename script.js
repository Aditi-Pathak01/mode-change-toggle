let btn = document.querySelector("#btn")
let body = document.querySelector("body")

let mode = "light";
btn.addEventListener("click",()=>{
  body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")){
     btn.childNodes[1].src = "assets/moon.png";//one can target the img directly let img = d.q("#icon")
  } else {
    btn.childNodes[1].src = "assets/sun.png";
  }
})
