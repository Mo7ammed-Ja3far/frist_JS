let btn = document.getElementsByTagName("button")[0];
let category = document.querySelector(".category");
let nums = document.querySelectorAll(".num");
let ul = document.querySelector(".ul-li");
let min = document.querySelector(".min");
let s = document.querySelector(".s");
let q = document.querySelector(".curr");
let h2 = document.querySelector("h2");
let curr = 0;
q.innerHTML = curr;
let result = 0;
let question;
let li = document.querySelectorAll("li");
let label = document.querySelector(".label");
function GetQuestion() {
  let req = new XMLHttpRequest();
  req.onreadystatechange = function () {
    if (req.readyState == 4 && req.status == 200) {
      let question = JSON.parse(req.responseText);
      setLi(question.length);
      window.onload = () => {
        changeq(question[curr], question.length);
        chick();
        Stimer(150, question.length);
      };
      btn.onclick = () => {
        curr < question.length ? (q.innerHTML = curr + 1) : curr;
        try {
          clearInterval(timer);
        } catch (e) {
          console.log(e);
        }
        Stimer(150, question.length);

        if (curr == 0) {
          chick(question[0].answer);
          curr++;
          changeq(question[curr], question.length);
        } else if (curr < question.length) {
          mark();
          chick(question[curr].answer);
          curr++;
          changeq(question[curr], question.length);
        }
        if (curr >= question.length) {
          btn.className = "disable";
          return;
        } else {
          btn.className = "";
        }
      };
    }
  };
  req.open("GET", "questions.json");
  req.send();
}
GetQuestion();
function setLi(num) {
  for (let i = 0; i < num; i++) {
    let li = document.createElement("li");
    if (i == 0) {
      li.className = "done";
    }
    ul.append(li);
  }
}

function mark() {
  li = document.querySelectorAll("li");
  li[curr].className = "done";
  // console.log(li);
}
function changeq(ob, num) {
  nums.forEach((e) => (e.innerHTML = num));

  if (curr < num) {
    label.innerHTML = "";
    h2.innerHTML = ob.question;
    category.innerHTML = ob.category;
    for (let i = 1; i <= ob.choices.length; i++) {
      let option = document.createElement("label");
      option.htmlFor = "answer_" + i;
      let input = document.createElement("input");
      input.setAttribute("type", "radio");
      input.name = "option";
      input.id = "answer_" + i;
      input.dataset.answer = ob.choices[i - 1];
      if (i == 1) input.checked = true;
      // console.log(input.dataset.answer);
      let div = document.createElement("div");
      div.className = "label";
      div.textContent = ob.choices[i - 1];
      option.append(input, div);
      label.append(option);
    }
  } else {
  }
}
function Stimer(time, num) {
  // (أخضر)
  let updateTimer = () => {
    // (أخضر) تحديث المؤقت
    if (curr < num) {
      let elapsedTime = Math.floor((Date.now() - startTime) / 1000); // (أخضر) الوقت المنقضي بالثواني
      let remaining = time - elapsedTime; // (أخضر) الوقت المتبقي

      let mi = parseInt(remaining / 60);
      let sc = parseInt(remaining % 60);

      if (remaining >= 0) {
        min.innerHTML = mi < 10 ? "0" + mi : mi;
        s.innerHTML = sc < 10 ? "0" + sc : sc;
        remainingTime = remaining; // (أخضر) تحديث الوقت المتبقي
      } else {
        clearInterval(timer);
        btn.click();
      }
    }
  };

  startTime = Date.now(); // (أخضر) بدء وقت المؤقت
  updateTimer(); // (أخضر) تحديث المؤقت فورًا
  timer = setInterval(updateTimer, 1000); // (أخضر) استدعاء المؤقت كل ثانية
}
function chick(RAnswer) {
  options = document.querySelectorAll("input");
  // console.log();

  for (let i = 0; i < options.length; i++)
    if (options[i].checked) if (options[i].dataset.answer == RAnswer) result++;
  document.querySelector(".right").innerHTML = result;
  let range;

  if (result < nums[0].innerHTML / 3) {
    range = "LOW";
  } else if (
    result >= nums[0].innerHTML / 3 &&
    result <= (nums[0].innerHTML * 2) / 3
  ) {
    range = "MID";
  } else {
    range = "HIGH";
  }
  let comment = document.getElementById("comment");
  switch (range) {
    case "LOW": {
      comment.classList.remove(...[...comment.classList]);
      comment.classList.add("bad");
      comment.innerHTML = "Bad";
      console.log("low");
      comment.style.color = "red";
      break;
    }
    case "MID": {
      comment.classList.remove(...[...comment.classList]);
      comment.classList.add("good");
      comment.innerHTML = "Good";
      console.log("mid");
      comment.style.color = "orange";
      break;
    }
    case "HIGH": {
      comment.classList.remove(...[...comment.classList]);
      comment.classList.add("perfect");
      comment.innerHTML = "Perfect";
      comment.style.color = "green";
      console.log("hight");
      break;
    }
    default: {
      comment.classList.remove(...[...comment.classList]);
      comment.classList.add("bad");
      comment.innerHTML = "Bad";
      console.log("default");
      break;
    }
  }
}
