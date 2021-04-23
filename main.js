const header = document.querySelector(".navbar");
window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 30) {
    header.classList.add("myActive");
  } else {
    header.classList.remove("myActive");
  }
};