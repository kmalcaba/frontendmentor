window.addEventListener("DOMContentLoaded", () => {
  const ratingBtns = document.querySelectorAll(".number");
  ratingBtns.forEach((element) =>
    element.addEventListener("click", selectRating)
  );

  const submitBtn = document.querySelector("button.submit");
  submitBtn.addEventListener("click", showThankYouBox);
});

const showThankYouBox = () => {
  const thankYouBox = document.querySelector(".thank-you");
  const rateBox = document.querySelector(".rate-box");
  rateBox.style.display = "none";
  thankYouBox.style.display = "flex";
};

const selectRating = (e) => {
  const number = e.target.textContent;
  e.target.classList.toggle("active");
};

const updateSelected = (number) => {};
