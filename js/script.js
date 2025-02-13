const audio = document.getElementById("bgmaudio");
const openbtn = document.getElementById("openletter");
const wrapper = document.getElementById("imlazy");
const delbtn = document.getElementById("dbtn");
const mtoggle = document.getElementById("musictoggle");
let dd,
  mm,
  y,
  currentDate,
  dClickCount = 0;

// music controls
audio.volume = 0.03;
function toggleMute() {
  audio.muted = !audio.muted;
  if (audio.muted == true) {
    mtoggle.innerText = "Unmute";
  } else {
    mtoggle.innerText = "Mute";
  }
}

// checking if it's valentines
function openLetter() {
  wrapper.classList.add("wf-active");

  setTimeout(function () {
    $(document).ready(function () {
      $("#imlazy").load("scenes/letter.html");
    });
  }, 1000);
  // currentDate = new Date();
  // mm = currentDate.getMonth();
  // dd = currentDate.getDate();
  // y = currentDate.getFullYear();

  // const formattedDate = mm + "/" + dd;
  // const VDate = "1/7"; // CHANGE THE DATE LATER

  // console.log(formattedDate + " " + VDate); //Debug for dates

  // if (formattedDate == VDate) {
  //   wrapper.classList.add("wf-active");

  //   setTimeout(function () {
  //     $(document).ready(function () {
  //       $("#imlazy").load("scenes/letter.html");
  //     });
  //   }, 1000);

  //   console.log("WORKIN");
  // } else {
  //   // shake animations
  //   openbtn.classList.add("btnShake");
  //   setTimeout(function () {
  //     openbtn.classList.remove("btnShake");
  //   }, 2000);
  // }
}

function yousure() {
  switch (dClickCount) {
    case 0:
      delbtn.innerText = "Are you sure?";
      break;
    case 1:
      delbtn.innerText = "Misclick right?";
      break;
    case 2:
      delbtn.innerText = "I knew your mouse was broken.";
      break;
    case 3:
      delbtn.innerText = "🙄";
      break;
    case 4:
      delbtn.innerText = "I have time...";
      break;
    case 5:
      delbtn.innerText = "Still broken huh?";
      break;
    case 6:
      delbtn.innerText = "I can wait 🙄";
      break;
    case 7:
      delbtn.innerText = "*Hey, look to the right*";
      break;
    case 8:
      delbtn.innerText = "Now click it";
      break;
    case 9:
      delbtn.innerText = "Not this one dummy 🙄";
      break;
    case 10:
      delbtn.innerText = "Is your mouse really broken?";
      break;
    default:
      delbtn.innerText = "Too bad, it's rigged 🙄";
      setTimeout(function () {
        delbtn.classList.add("wf-active");
      }, 1000);
      setTimeout(function () {
        delbtn.remove();
      }, 2000);
      setTimeout(function () {
        openbtn.classList.add("btnScale");
      }, 2500);
  }
  dClickCount++;
  console.log(dClickCount);
}

openbtn.addEventListener("click", openLetter);
delbtn.addEventListener("click", yousure);
