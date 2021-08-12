const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const button = document.querySelector('#btn');
const color = document.querySelector('.color');
button.addEventListener('click', changeColor);
function changeColor() {
    var randomColor = Math.floor(Math.random()*colors.length);
    color.innerText = colors[randomColor];
    document.body.style.backgroundColor = colors[randomColor];
}

