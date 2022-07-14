const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector('#ingredients');
console.log(ul);
for (const elem of ingredients) {
  let li = document.createElement("li");
  li.classList.add('item');
  li.textContent = elem;
  ul.append(li);
}