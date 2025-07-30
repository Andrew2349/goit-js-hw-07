const btn = document.querySelector(".change-color")
const spanColor = document.querySelector(".color")
const background = document.body
btn.addEventListener("click", () => {
  const color = getRandomHexColor()
  spanColor.textContent = color
  background.style.backgroundColor = color
})


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
