const box = document.querySelector(".bix__item");
const forwardButton = document.querySelector(".box__forward");
const backwardButton = document.querySelector(".box__backward");

let positionX = 0;
let positionY = 0;

const containerWidth = 500;
const containerHeight = 500;
const boxWidth = 100;
const boxHeight = 100;

const corners = [
    { x: 0, y: 0 }, 
    { x: containerWidth - boxWidth, y: 0 },
    { x: containerWidth - boxWidth, y: containerHeight - boxHeight },
    { x: 0, y: containerHeight - boxHeight }
];

let currentCornerIndex = 0;

forwardButton.addEventListener("click", function () {

    currentCornerIndex = (currentCornerIndex + 1) % corners.length; 
    positionX = corners[currentCornerIndex].x;
    positionY = corners[currentCornerIndex].y;

    box.style.left = positionX + "px";
    box.style.top = positionY + "px";
    
});

backwardButton.addEventListener("click", function () {

    currentCornerIndex = (currentCornerIndex - 1 + corners.length) % corners.length; 
    positionX = corners[currentCornerIndex].x;
    positionY = corners[currentCornerIndex].y;

    box.style.left = positionX + "px";
    box.style.top = positionY + "px";

});
