const inputText = document.querySelector("input");

inputText.addEventListener("blur", () => {
  if (inputText.value.trim().length === Number(inputText.dataset.length)) {
    inputText.classList.add("valid");
    inputText.classList.remove("invalid");
  } else {
    inputText.classList.add("invalid");
    inputText.classList.remove("valid");
  }
});
