const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const liElArr = ingredients.map((ingredient) => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add("item");
  return liEl;
});

list.append(...liElArr);

//ще один варіант виконання

//const liElArr = [];

//ingredients.forEach((ingredient) => {
//  const liEl = document.createElement("li");
//  liEl.textContent = ingredient;
//  liEl.classList.add("item");
//  liElArr.push(liEl);
//  return liElArr;
//})

//list.append(...liElArr);