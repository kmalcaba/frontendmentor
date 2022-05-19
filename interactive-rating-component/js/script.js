window.addEventListener("DOMContentLoaded", () => {
  const ratingBtns = document.querySelectorAll(".number");
  ratingBtns.forEach((element) =>
    element.addEventListener("click", selectRating)
  );

  const submitBtn = document.querySelector("button.submit");
  submitBtn.addEventListener("click", onSubmit);
});

const onSubmit = () => {
  const selected = updateSelected();
  if (selected) showThankYouBox(selected);
};

const showThankYouBox = (number) => {
  const thankYouBox = document.querySelector(".thank-you");
  const rateBox = document.querySelector(".rate-box");
  rateBox.style.display = "none";
  thankYouBox.style.display = "flex";
  const selected = document.querySelector(".selected");
  selected.textContent = number;
};

const selectRating = (e) => {
  const number = e.target;
  const ratingBtns = document.querySelectorAll(".number");
  ratingBtns.forEach((element) => {
    if (element.classList.contains("active"))
      element.classList.toggle("active");
  });
  number.classList.toggle("active");
};

const updateSelected = () => {
  const selected = document.querySelector(".active");
  if (selected) return selected.textContent;
};
