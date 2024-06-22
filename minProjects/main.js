let font = document.querySelector("#fonts");
let color = document.querySelector("#colors");
let fSize = document.querySelector("#font-size");
let body = document.body;
body.style.fontFamily = window.localStorage.getItem("font");
body.style.color = window.localStorage.getItem("color");
body.style.fontSize = window.localStorage.getItem("fSize");
color.value = window.localStorage.getItem("color");
font.value = window.localStorage.getItem("font");
fSize.value = window.localStorage.getItem("fSize");
font.onchange = () => {
  window.localStorage.setItem("font", font.value);
  body.style.fontFamily = window.localStorage.getItem("font");
};
color.onchange = () => {
  window.localStorage.setItem("color", color.value);
  body.style.color = window.localStorage.getItem("color");
};
fSize.onchange = () => {
  window.localStorage.setItem("fSize", fSize.value);
  body.style.fontSize = window.localStorage.getItem("fSize");
};
