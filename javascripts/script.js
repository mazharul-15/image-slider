/*          Image Slider         */
const image = [
    "farewell-1.jpg",
    "farewell-4.jpg",
    "farewell-22.jpg"
];

let position = 0;

let rightBtn = document.querySelector(".right");
let leftBtn = document.querySelector(".left");

rightBtn.addEventListener('click', function(){
    if(position == 2) position = -1;
    document.querySelector("img").src = "image/"+image[++position];
});

leftBtn.addEventListener('click', function(){
    if(position == 0) position = 3;
    document.querySelector("img").src = "image/"+image[--position];   
});

// function rightChange() {
//     if(position == 2) position = -1;
//     document.querySelector("img").src = "image/"+image[++position];
//     // console.log(position);
    
// }

// function leftChange() {
//     if(position == 0) position = 3;
//     document.querySelector("img").src = "image/"+image[--position];
//     // console.log(position);
// }