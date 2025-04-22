const shareButton = document.querySelector(".share-div");
const shareContainer = document.querySelector(".socials");
const hideIcon = document.querySelector(".hide");

shareButton.addEventListener("click", function () {
  shareContainer.classList.toggle("hidden");
});

hideIcon.addEventListener("click", function () {
  shareContainer.classList.toggle("hidden");
});
