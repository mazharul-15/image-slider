/*          Image Slider         */
const image = [
    "farewell-1.jpg",
    "farewell-4.jpg",
    "farewell-22.jpg"
];

let position = 0;

// document.querySelector(".right").addEventListener("onclick", function(){
//     document.querySelector("img").src = "image/"+image[++position];
//     if(position == 2) position = 0;
// });

function rightChange() {
    if(position == 2) position = -1;
    document.querySelector("img").src = "image/"+image[++position];
    console.log(position);
    
}

function leftChange() {
    if(position == 0) position = 3;
    document.querySelector("img").src = "image/"+image[--position];
    console.log(position);
}