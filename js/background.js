const images = ["1.jpg", "2.jpg", "3.jpg","4.jpg","5.jpg","6.png","7.jpg","8.jpg","9.png","10.png","11.jpg","12.png",,"13.jpg","14.png","15.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

bgimage.src = `img/${chosenImage}`;
console.log(bgimage);

document.body.appendChild(bgimage);