let inputs = document.getElementsByTagName("input");
let here = document.querySelector(".here");
let result = document.querySelector(".result");
// console.log(result);
inputs[1].onclick = function () {
  if (inputs[0].value.trim() != "") {
    result.innerHTML = "";
    here.innerHTML = "";
    fetch(`https://api.github.com/users/${inputs[0].value.trim()}/repos`)
      .then((response) => response.json())
      .then((repo) => {
        repo.forEach((repo) => {
          let div = document.createElement("div");
          let name = document.createTextNode(repo.name);
          let span = document.createElement("span");
          let link = document.createElement("a");
          let star = document.createElement("span");
          link.href = `https://github.com/${inputs[0].value.trim()}/${
            repo.name
          }`;
          link.innerHTML = "Visit";
          star.innerHTML = repo.stargazers_count + " Star";
          star.className = "stars";
          div.className = "box";
          link.setAttribute("target", "_blank");
          span.append(link, star);
          div.append(name, span);
          here.append(div);
        });
        console.log(repo);
      });
  } else {
    Swal.fire({
      icon: "error",
      title: "خطأ",
      text: "يرجى ادخال قيمه ",
    });
  }
};
