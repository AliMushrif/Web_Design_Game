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

var time = 0;
var btnCh = document.querySelector(".textnext");

function changeText(txt) {
  var txt = time === 0 ? "No..." : "Second time";
  document.getElementById("name").innerHTML = txt;
  time++;
  //
  btnCh.addEventListener("click", () => {
    btnCh.innerText = "Hint";
  });
}
