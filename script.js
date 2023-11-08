/** Select all necessary elements from DOM */
const canvas = document.querySelector('#canvas');
const decreaseBtn = document.querySelector('#decrease');
const sizeEl = document.querySelector('#size');
const increaseBtn = document.querySelector('#increase');
const clearBtn = document.querySelector('#clear');
const colorEl = document.querySelector('#color');

const ctx = canvas.getContext('2d');
colorEl.value="black"

let size = 5;
let color = colorEl.value;

let isPressed = false;
let x , y;

//Add event listener on mousedown
canvas.addEventListener("mousedown",(e)=>{
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
})

//Add event listener on mouseup
canvas.addEventListener('mouseup',(e)=>{
    isPressed = false;

    x = undefined;
    y = undefined;
})

//Add event listener on mousemove
canvas.addEventListener('mousemove',(e)=>{
    if(isPressed){
       const x2 = e.offsetX;
       const y2 = e.offsetY;

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x=x2
        y=y2
    }
})

function drawCircle(x, y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI*2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

//Define function to change size of element
function updateSizeOnScreen(){
    sizeEl.innerText=size;
}

//Add event listener on click to increase size
increaseBtn.addEventListener('click',()=>{
    size += 2
    if(size > 50){
        size = 50
    }
    updateSizeOnScreen()
})

//Add event listener on click to decrease size
decreaseBtn.addEventListener('click',()=>{
    size -= 2
    if(size < 1){
        size = 1
    }
    updateSizeOnScreen()
})

//Add event listener to change color
colorEl.addEventListener('change',(e)=> {
    color = e.target.value
});

//Add event listener to clear the canvas
clearBtn.addEventListener('click',(e)=> {
    ctx.clearRect(0, 0, canvas.width , canvas.hight);
});
