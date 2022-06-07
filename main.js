let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".fa-magnifying-glass");

btn.onclick = function () {
  sidebar.classList.toggle("active");
};
searchBtn.onclick = function () {
  sidebar.classList.toggle("active");
};

//

let time = 0;
const paragraphs = ["First", "Second", "Third", "Fourth"];

function changeText() {
  let text = `${paragraphs[time]} Paragraph`;
  if (text === "Fourth Paragraph") {
    document.getElementById("ch").value = "Hint";
  } else {
    document.getElementById("name").innerHTML = text;
  }
  if (paragraphs[time + 1]) {
    time++;
  }
}
