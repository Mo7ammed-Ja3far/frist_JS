import Swal from "sweetalert2";

// الحصول على العناصر من الـ DOM
const btn = document.querySelector(".input") as HTMLButtonElement | null;
const input = document.querySelector(".add") as HTMLInputElement | null;
const output = document.querySelector(".output") as HTMLElement | null;
const toDone = document.querySelector(".to-done") as HTMLElement | null;
const toDo = document.querySelector(".to-do") as HTMLElement | null;

if (input) input.focus();

window.onload = () => {
  if (input) input.focus();
};

document.addEventListener("click", function (e) {
  const target = e.target as HTMLElement;
  if (target && target.className === "input") {
    const tasks = document.querySelectorAll(".task");
    tasks.forEach((task) => {
      task.remove();
    });
    AddToStorage();
  }

  if (target && target.className === "delete") {
    const parentElement = target.parentElement;
    if (parentElement) {
      localStorage.removeItem(parentElement.id);
      parentElement.remove();
    }
    doStats();
  }

  if (target && target.classList.contains("task")) {
    target.classList.toggle("done");

    const id = target.id;
    const item = localStorage.getItem(id);
    if (item) {
      if (item[0] === "T") {
        localStorage.setItem(id, "F" + item.slice(1));
      } else {
        localStorage.setItem(id, "T" + item.slice(1));
      }
    }
    doStats();
  }
});

function AddToStorage() {
  if (!input || !output) return;

  const keys: (string | null)[] = [];
  let cond = false;

  for (let i = 0; i < localStorage.length; i++) {
    keys.push(localStorage.key(i));
  }

  keys.forEach((ele) => {
    if (ele && localStorage.getItem(ele)?.slice(1) === input.value) cond = true;
  });

  if (input.value && cond) {
    Swal.fire({
      icon: "error",
      title: "خطأ",
      text: "هذه المهمة مضافة من قبل!",
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
  } else {
    Swal.fire({
      icon: "error",
      title: "خطأ",
      text: "يرجى إدخال مهمة قبل الإضافة!",
    });
  }
}

function noTask(num: number) {
  if (!output) return;

  const noTaskElements = document.querySelectorAll(".no-task");
  if (num === 0) {
    const div = document.createElement("div");
    div.classList.add("no-task");
    div.append("No tasks yet!");
    output.append(div);
  } else if (noTaskElements.length > 0) {
    noTaskElements[0].remove();
  }
}

function doStats() {
  if (!toDo || !toDone) return;

  const toDoneCount = document.querySelectorAll(".done").length;
  const toDoCount = document.querySelectorAll(".task").length - toDoneCount;
  toDo.innerHTML = `To Do: ${toDoCount}`;
  toDone.innerHTML = `Done: ${toDoneCount}`;
  noTask(toDoCount);
}

function createFromStorage() {
  if (!output) return;

  for (let i = 0; i < localStorage.length; i++) {
    const div = document.createElement("div");
    const dele = document.createElement("div");
    div.className = "task";
    dele.className = "delete";
    dele.append("delete");
    div.append(dele);

    const key = localStorage.key(i);
    if (!key) continue;

    const item = localStorage.getItem(key);
    if (!item) continue;

    const taskText = item.slice(1);
    div.append(taskText);
    div.id = key;

    if (itemm[0] === "T") {
      output.prepend(div);
    } else if (item[0] === "F") {
      div.classList.add("done");
      output.prepend(div);
    }
    يبسيب;
  }
}

// استدعاء الوظائف الضرورية لتهيئة الصفحة
createFromStorage();
doStats();
