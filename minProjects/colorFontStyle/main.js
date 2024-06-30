let font = document.querySelector("#fonts");
let color = document.querySelector("#colors");
let fSize = document.querySelector("#font-size");
let body = document.body;
body.style.fontFamily = localStorage.getItem("font");
body.style.color = localStorage.getItem("color");
body.style.fontSize = localStorage.getItem("fSize");
color.value = localStorage.getItem("color");
font.value = localStorage.getItem("font");
fSize.value = window.localStorage.getItem("fSize");
font.onchange = () => {
  localStorage.setItem("font", font.value);
  body.style.fontFamily = localStorage.getItem("font");
};
color.onchange = () => {
  localStorage.setItem("color", color.value);
  body.style.color = localStorage.getItem("color");
};
fSize.onchange = () => {
  localStorage.setItem("fSize", fSize.value);
  body.style.fontSize = localStorage.getItem("fSize");
};
