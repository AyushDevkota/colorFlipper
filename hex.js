const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.querySelector('#btn');
const color = document.querySelector('.color');
button.addEventListener('click', () => {
    let randomColor = '#';
    while (randomColor.length !== 7) {
        var randomNumber = randomNumberGenerator(hex);
        randomColor+= hex[randomNumber];
    }
    console.log(randomColor);
    color.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;
})
let randomNumberGenerator = arr => Math.floor(Math.random()*arr.length);