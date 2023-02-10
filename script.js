let posTop = "400px"
let posLeft = "400px"

function setFlyCat() {

    let flyCat = document.getElementById("flyCat");
    flyCat.style.position = "absolute";
    flyCat.style.top = posTop;
    flyCat.style.left = posLeft;

}

function moveLeft() {
    flyCat.style.left = parseInt(flyCat.style.left) - 5 + "px";
}

function moveUp() {
    flyCat.style.top = parseInt(flyCat.style.top) - 5 + "px";
}

function moveRight() {
    flyCat.style.left = parseInt(flyCat.style.left) + 5 + "px";
}

function moveDown() {
    flyCat.style.top = parseInt(flyCat.style.top) + 5 + "px";
}

function getKeyAndMove(e) {
    var key_code = e.which || e.keyCode;
    switch (key_code) {
        case 37: //left arrow key
            flyCat.style.transform = 'scaleX(-1)';
            moveLeft();
            break;
        case 38: //Up arrow key
            flyCat.style.transform = 'rotate(270deg)';
            moveUp();
            break;
        case 39: //right arrow key
            flyCat.style.transform = 'rotate(0deg)';
            moveRight();
            break;
        case 40: //down arrow key
            flyCat.style.transform = 'rotate(90deg)';
            moveDown();
            break;
    }
}

document.addEventListener("keydown", getKeyAndMove)