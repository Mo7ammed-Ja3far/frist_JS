// import Swal from "sweetalert2";
let btn = document.querySelector(".input");
let input = document.querySelector(".add");
let output = document.querySelector(".output");
let tasks = document.querySelector(".task");
let toDone = document.querySelector(".to-done");
let toDo = document.querySelector(".to-do");
createFromStorage();
doStats();
console.log(toDo);
console.log(toDone);

// add.style.color = "red";
window.onload = () => {
  input.focus();
};
addEventListener("click", function (e) {
  if (e.target.className === "input") {
    let tas = document.querySelectorAll(".task");
    tas.forEach((e) => {
      e.remove();
    });
    AddToStorage();
  }
  if (e.target.className === "delete") {
    // console.log(e.target.parentElement.id);
    this.localStorage.removeItem(e.target.parentElement.id);
    e.target.parentElement.remove();
    doStats();
  }
  if (e.target.classList.contains("task")) {
    // console.log();
    e.target.classList.toggle("done");
    if (localStorage.getItem(e.target.id)[0] == "T") {
      // console.log(e.target.id);
      localStorage.setItem(
        e.target.id,
        "F" + localStorage.getItem(e.target.id).slice(1)
      );
    } else {
      localStorage.setItem(
        e.target.id,
        "T" + localStorage.getItem(e.target.id).slice(1)
      );
    }
    doStats();
  }
});
function AddToStorage() {
  let keys = [];
  let cond = false;
  for (let i = 0; i < localStorage.length; i++) {
    keys.push(localStorage.key(i));
  }
  keys.forEach((ele) => {
    if (localStorage.getItem(ele).slice(1) == input.value) cond = true;
  });
  if (input.value && cond) {
    Swal.fire({
      icon: "error",
      title: "خطأ",
      text: "هذه المهمه مضافه من قبل!",
    });
    createFromStorage();
  } else if (input.value) {
    localStorage.setItem(
      `id-${Math.floor(Math.random() * 100000) + 1}`,
      "T" + input.value
    );

    input.value = "";
    createFromStorage();
    doStats();
  } else
    Swal.fire({
      icon: "error",
      title: "خطأ",
      text: "يرجى إدخال مهمة قبل الإضافة!",
    });
}
function noTask(num) {
  let noTask = document.querySelectorAll(".no-task");
  if (num == 0) {
    let div = document.createElement("div");
    div.classList.add("no-task");
    div.append("No tasks yet!");
    output.append(div);
  } else if (noTask.length > 0) {
    noTask[0].remove();
  }
}
function doStats() {
  let toDoneL = document.querySelectorAll(".done").length;
  let toDoL = document.querySelectorAll(".task").length;
  toDo.innerHTML = `To Do: ${toDoL}`;
  toDone.innerHTML = `Done: ${toDoneL}`;
  noTask(toDoL);
}
function createFromStorage() {
  for (let i = 0; i < localStorage.length; i++) {
    let div = document.createElement("div");
    let dele = document.createElement("div");
    div.className = "task";
    dele.className = "delete";
    dele.append("delete");
    div.append(dele);
    if (localStorage.getItem(localStorage.key(i))[0] == "T") {
      div.append(localStorage.getItem(localStorage.key(i)).slice(1));
      div.id = localStorage.key(i);
      output.prepend(div);
    } else if (localStorage.getItem(localStorage.key(i))[0] == "F") {
      div.classList.add("done");
      div.id = localStorage.key(i);
      div.append(localStorage.getItem(localStorage.key(i)).slice(1));
      output.prepend(div);
    }
  }
}

// function *genratnum(){
// while(true)

// }
