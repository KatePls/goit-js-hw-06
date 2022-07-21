const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector('#ingredients');

const list = ingredients.map((ingredient) =>
  `<li class='item'>${ingredient}</li>`).join("");
ul.innerHTML = list; 