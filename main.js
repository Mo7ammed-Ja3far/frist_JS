create = (e) => document.createElement(e);

let header = create("header");
let content = create("div");
let menu = create("ul");
let logo = create("h1");
let footer = create("footer");

// add class
header.className = "header";
menu.className = "menu";
logo.className = "logo";
content.className = "boxs";
footer.className = "footer";
// add to header
document.body.append(header);
logo.append("Jafar");
header.append(logo);
header.append(logo);
header.append(menu);
// add to body
document.body.append(content);
// for adding list and boxes
for (i = 0; i < 15; i++) {
  if (i < 4) {
    let list = create("li");
    menu.append(list);
    list.id = "list-" + i + 1;
  }
  let box = create("div");
  let span = create("span");
  span.className = "num";
  span.append(i + 1);
  span.style.cssText =
    " font-weight: bold;display: block;text-align: center;padding: 20px;font-size: 25px;";

  box.className = "box";
  box.style.cssText =
    "background:white ;text-align:center ;padding:20px; flex-basis: calc((100% - 160px) / 3)";
  box.append(span);
  box.append("prodact");

  content.append(box);
}
let lis = document.querySelectorAll("li");
lis[0].append("Menu");
lis[1].append("About");
lis[2].append("Service");
lis[3].append("Contact");
// all css styling
document.body.style.cssText =
  "font-family: Tahoma , Arial;margin:0; background-color: rgb(236,236,236)";
header.style.cssText =
  " background-color:white; display: flex; justify-content: space-between;align-items: center;padding:20px;";
logo.style.cssText = "margin:0; color:green ;font-size:20px";

menu.style.cssText =
  "margin:0; list-style: none; display: flex ; gap :10px ;font-size:15px";
content.style.cssText = "gap:20px;padding:20px; display:flex; flex-wrap:wrap";
footer.style.cssText =
  "background-color:green ;text-align:center; padding:20px ;color:white";
// add to footer
document.body.append(footer);
footer.append("all rights reserved © 2023");
