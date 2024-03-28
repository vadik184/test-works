const colorOptionList = document.querySelector(".color-option-list");
const colorChangeButton = document.querySelector(".color-change");

colorChangeButton.addEventListener("click", () => {
  //   colorOptionList.style.display = "grid";
  colorOptionList.classList.toggle("show-grid");
});
