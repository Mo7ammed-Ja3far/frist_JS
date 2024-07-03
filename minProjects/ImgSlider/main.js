let inputs = document.getElementsByTagName("input");
let arrimgs = Array.from(document.querySelectorAll(".content .imgs img"));
let ul = document.querySelector(".ul-li");
let val = document.querySelector(".counter span");
let currant = localStorage.getItem("lastVisit") || 1;
for (let i = 0; i < arrimgs.length; i++) {
  let li = document.createElement("li");
  if (i == currant - 1) {
    li.classList.add("active");
    arrimgs[i].classList.add("active");
    val.innerHTML = i + 1;
    disable();
  }
  li.innerHTML = i + 1;
  ul.append(li);
}
let lis = document.querySelectorAll("li");
// imgLi(currant);
// li.forEach(()=>)
// console.log(li);
inputs[0].onclick = prev;
lis.forEach(
  (li) =>
    (li.onclick = () => {
      currant = li.innerHTML;
      val.innerHTML = currant;
      imgLi(li.innerHTML);
    })
);
inputs[1].onclick = next;
function disable() {
  if (currant > 1 && currant < arrimgs.length) {
    inputs[0].classList.remove("disable");
    inputs[1].classList.remove("disable");
  } else if (currant == arrimgs.length) {
    inputs[0].classList.remove("disable");
    inputs[1].classList.add("disable");
  } else if (currant == 1) {
    inputs[1].classList.remove("disable");
    inputs[0].classList.add("disable");
  }
}
function imgLi(corr) {
  li = Array.from(document.querySelectorAll("li"));
  li.map((ele) => ele.classList.remove("active"));
  // console.log(li);
  li[corr - 1].classList.add("active");
  arrimgs.map((ele) => ele.classList.remove("active"));
  // console.log(li);
  arrimgs[corr - 1].classList.add("active");
  disable();
  localStorage.setItem("lastVisit", corr);
}
function next() {
  if (currant == arrimgs.length) {
  } else {
    console.log(currant);
    imgLi(++currant);
    val.innerHTML = currant;
  }
}
function prev() {
  if (currant == 1) {
  } else {
    console.log(currant);
    imgLi(--currant);
    val.innerHTML = currant;
  }
}
