const countCategories = document.querySelectorAll('.item').length;
console.log('Number of categories:', countCategories);
const categories = document.querySelectorAll('.item');

for (const variable of categories) {
    console.log(`Category: ${variable.querySelector('h2').textContent}`);
    const numberCategorie = variable.querySelectorAll('li').length;
    console.log('Elements:', numberCategorie);
}
