const yesbtn = document.getElementById("yesbtn");
const nobtn = document.getElementById("nobtn");
const mainsection = document.getElementById("main");
const bg = document.getElementById("bg");
let yes = false;

function openphoto() {
  mainsection.classList.add("wf-active");
  setTimeout(function () {
    $(document).ready(function () {
      $("#main").load("../scenes/gallery.html");
    });
    bg.innerHTML =
      "<p>All thoses memories, the moments we find joy in. There's a lot more coming our way. Let's spend them together!</p>";
  }, 1000);
}

function extrastep() {
  nobtn.innerText = "Yes!";
  if (yes == true) {
    openphoto();
  }
  yes = true;
}

nobtn.addEventListener("click", extrastep);
yesbtn.addEventListener("click", openphoto);
