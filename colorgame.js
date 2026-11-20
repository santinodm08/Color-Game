var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("#h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var impossibleButton = document.querySelector("#impossible");
var container = document.querySelector(".container");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    if (i < colors.length) {
        squares[i].style.backgroundColor = colors[i];
    } else {
        squares[i].classList.add("hidden");
    }

    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "¡Correcto!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "rgb(35, 35, 35)";
            messageDisplay.textContent = "Intentalo Nuevamente";
        }
    });
}

resetButton.addEventListener("click", function () {
    reset();
});

easyButton.addEventListener("click", function () {
    numberOfSquares = 3;
    selectDifficulty(easyButton);
    reset();
});

hardButton.addEventListener("click", function () {
    numberOfSquares = 6;
    selectDifficulty(hardButton);
    reset();
});

impossibleButton.addEventListener("click", function () {
    numberOfSquares = 25;
    selectDifficulty(impossibleButton);
    reset();
});

function selectDifficulty(selectedButton) {
    easyButton.classList.remove("selected");
    hardButton.classList.remove("selected");
    impossibleButton.classList.remove("selected");
    selectedButton.classList.add("selected");
}

function reset() {
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "Nuevos Colores";
    h1.style.backgroundColor = "";
    container.classList.toggle("impossible", numberOfSquares === 25);

    for (var i = 0; i < squares.length; i++) {
        if (i < colors.length) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].classList.remove("hidden");
        } else {
            squares[i].classList.add("hidden");
        }
    }
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomColors(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }

    return arr;
}
