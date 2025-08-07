let btn = document.querySelector("div");

let click = 0;
function rotation() {
  let icon = btn.querySelector("i");
  if (icon) {
    icon.classList.add("rotate");
    icon.addEventListener("animationend", function handler() {
      icon.classList.remove("rotate");
      icon.removeEventListener("animationend", handler);
    });
  }
}
function dark() {
  document.body.style.backgroundColor = "black";
  btn.innerHTML = `<i class="fa-regular fa-sun"></i>`;
  btn.classList.add("dark");
  btn.classList.remove("light");
  click = 1;
  rotation();
}
function light() {
  document.body.style.backgroundColor = "white";
  btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  btn.classList.add("light");
  btn.classList.remove("dark");
  click = 0;
  rotation();
}
btn.addEventListener("click", () => {
  if (click === 0) {
    dark();
  } else {
    light();
  }
});
