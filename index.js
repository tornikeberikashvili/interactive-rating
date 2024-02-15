const contein = document.querySelector(".contein");
const thenkYouDiv = document.querySelector(".thenk-you-div.hidden");
const submit = document.getElementById("submit");
const again = document.getElementById("again");
const reting = document.getElementById("reting");
const rates = document.querySelectorAll(".btn");

submit.addEventListener("click", () => {
  thenkYouDiv.classList.remove("hidden");
  contein.style.display = "none";
});

again.addEventListener("click", () => {
  thenkYouDiv.classList.add("hidden");
  contein.style.display = "block";
});
rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    reting.innerHTML = rate.innerHTML;
  });
});
