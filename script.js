const acc = document.getElementsByClassName("accordion");
const arrow = document.getElementsByClassName("arrow");
const media = window.matchMedia("(max-width: 1000px)");
const images = document.getElementsByClassName("images")[0];
let count = 0;

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      acc[i].style.fontWeight = "normal";
      arrow[i].style.transform = "unset";
    } else {
      panel.style.display = "block";
      acc[i].style.fontWeight = "bold";
      acc[i].style.color = "black";
      arrow[i].style.transform = "rotate(180deg)";
    }
    count = document.getElementsByClassName("active").length;
    if (media.matches && count > 2) {
      images.style.display = "none";
    }
    if (media.matches && count < 2) {
      images.style.display = "block";
    }
  });
}
