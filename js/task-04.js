let counterValue = 0;

const decBtn = document.querySelector('#counter button[data-action="decrement"]');
const incBtn = document.querySelector('#counter button[data-action="increment"]');
const value = document.querySelector("#value");

decBtn.addEventListener("click", () => {
    //console.log("Decrement button was clicked");
    counterValue -= 1;
    value.textContent = counterValue;
  });

incBtn.addEventListener("click", () => {
    //console.log("Increment button was clicked");
    counterValue += 1;
    value.textContent = counterValue;
  });