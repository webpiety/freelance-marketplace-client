const container = document.querySelector(".cards-container");
const leftBtn = document.querySelector("#left-btn");
const rightBtn = document.querySelector("#right-btn");

leftBtn.addEventListener("click", () => {
  container.scrollBy({ left: -300, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
  container.scrollBy({ left: 300, behavior: "smooth" });
});
