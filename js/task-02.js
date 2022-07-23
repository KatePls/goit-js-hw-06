const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector('#ingredients');

const list = ingredients.map((ingredient) => {
  const liElem = document.createElement("li");
  liElem.textContent = ingredient;
  return liElem;
});

ul.append(...list); 
