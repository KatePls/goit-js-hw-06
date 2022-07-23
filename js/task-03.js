const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const ul = document.querySelector(".gallery");

const list = images.map((img) =>{
  const li = document.createElement('li');
  const image = document.createElement('img');
  image.src = img.url;
  image.alt = img.alt;
  image.style.maxWidth = "700px"
  li.append(image);
  return li;
});
ul.append(...list); 

ul.style.display = "grid"; 
ul.style.justifyItems = "center";
ul.style.listStyle = "none";