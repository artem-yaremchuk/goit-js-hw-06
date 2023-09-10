const categories = document.querySelector("#categories");
const totalCategories = categories.children.length;
console.log(`Number of categories: ${totalCategories}`);

const items = document.querySelectorAll(".item");

items.forEach(function(number){
    const title = number.firstElementChild.textContent;
    const totalElements = number.lastElementChild.children.length;
    console.log(`Category: ${title}
Elements: ${totalElements}`);
})