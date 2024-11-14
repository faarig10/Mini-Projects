const openBtn = document.getElementById("open");
const closebtn = document.getElementById("close");
const container = document.querySelector(".container");

openBtn.addEventListener("click", () => {
  container.classList.add("show-nav");
});

closebtn.addEventListener("click", () => {
  container.classList.remove("show-nav");
});
