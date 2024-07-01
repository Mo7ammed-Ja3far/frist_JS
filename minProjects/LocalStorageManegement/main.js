let theKey = document.getElementById("the-key");
let theValue = document.getElementById("the-value");
let spans = document.querySelectorAll(".spans span");
let here = document.querySelector("here");
let results = document.querySelector(".results");

console.log(spans);
spans.forEach((e) => {
  e.addEventListener("click", (f) => {
    if (f.target.classList.contains("check")) {
      check();
    }
    if (f.target.classList.contains("add")) {
      add();
    }
    if (f.target.classList.contains("delete")) {
      dele();
    }
    if (f.target.classList.contains("show")) {
      show();
    }
    theKey.value = "";
    theValue.value = "";
  });
});
// console.log(theValue);
function check() {
  results.innerHTML = "";
  if (theKey.value.trim() != "") {
    if (localStorage.getItem(theKey.value)) {
      console.log("check");
      results.innerHTML = `<span>value is =><span class="key"> ${localStorage.getItem(
        theKey.value
      )} </span> </span>`;
    } else {
      results.innerHTML = "There Is no Value";
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "خطأ",
      text: "يرجى ادخال قيمه في قسم المفاتيح",
    });
    results.innerHTML = "Results Here";
  }
}
function add() {
  results.innerHTML = "";
  if (theKey.value.trim() != "") {
    console.log("add");
    localStorage.setItem(theKey.value, theValue.value.trim() || "Test");
    results.innerHTML = "added";
  } else {
    Swal.fire({
      icon: "error",
      title: "خطأ",
      text: "يرجى ادخال قيمه في قسم المفاتيح",
    });
    results.innerHTML = "Results Here";
  }
}
function dele() {
  results.innerHTML = "";
  if (theKey.value.trim() != "") {
    if (localStorage.getItem(theKey.value)) {
      console.log("delete");
      results.innerHTML = `<span>the value =><span class="key"> ${localStorage.getItem(
        theKey.value
      )} </span> deleted</span>`;
      localStorage.removeItem(theKey.value);
    } else {
      results.innerHTML = "There Is no Value";
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "خطأ",
      text: "يرجى ادخال قيمه في قسم المفاتيح",
    });
    results.innerHTML = "Results Here";
  }
}
function show() {
  results.innerHTML = "";
  if (localStorage.length > 0) {
    console.log("show");
    for (let i = 0; i < localStorage.length; i++) {
      results.innerHTML += `<span><span class="key"> ${localStorage.key(
        i
      )} </span> => <span class="val">${localStorage.getItem(
        localStorage.key(i)
      )}</span> </span>`;
    }
    // localStorage.removeItem(theKey.value);
  } else {
    results.innerHTML = "There Is no thing here";
    Swal.fire({
      icon: "error",
      title: "خطأ",
      text: "يرجى ادخال قيمه في قسم المفاتيح",
    });
  }
}
