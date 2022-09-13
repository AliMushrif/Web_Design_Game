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
const paragraphs = [
  "Hello, now we will talk about the css flexbox how to run it",
  "When you write the (display: flex;) you will start the flexbox",
  "Flexbox makes the elements inside the parents responsive, and you can modify eazly",
  "we make the selection for the element with (.) at start of the name because it's class",
];

function changeText() {
  let text = `${paragraphs[time]} Paragraph`;
  if (text === "Fourth Paragraph") {
    document.getElementById("name").innerHTML = "Another Text";
    document.getElementById("ch").value = "Hint";
  } else {
    document.getElementById("name").innerHTML = text;
  }
  if (paragraphs[time + 1]) {
    time++;
  }
}
//
let colCon = document.querySelector(".columnContanter");
let cssCode = document.getElementById("csscode");
let cssCodeRg = ".alignCulomn{display: flex;}";
let submitbtn = document.querySelector(".reg");

submitbtn.addEventListener("click", () => {
  cssCode = cssCode.value;
  if (cssCodeRg == cssCode) {
    colCon.style.display = "flex";
  } else {
    document.getElementById("csscode").value = "wrong";
  }
});
//
// document.getElementById("codeAnwsoer").onsubmit = function (e) {
//   let colCon = document.querySelector(".columnContanter");
//   let cssCode = document.getElementById("csscode").value;
//   let cssCodeRg = /.alignCulomn{display: flex;}/gi;
//   let applyCode = cssCode.match(cssCodeRg);
//   if (applyCode) {
//     colCon.style.display = "flex";
//   } else {
//     document.getElementById("csscode").value = "wrong";
//   }
//   e.preventDefault();
// };
