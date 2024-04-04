let easy = document.getElementById("easy");
let hard = document.getElementById("hard");
let result = document.getElementById("result");
let boxes = document.querySelectorAll(".box")

let start = document.getElementById("start");
let rgb = document.getElementById("rgb");


let successClicked = false;

easy.addEventListener("click", function () {
    boxes.forEach(item => {
        item.style.visibility = "visible"
        item.style.backgroundColor = "blueviolet"
        item.innerHTML = ""
    })

    successClicked = false;

    boxes[0].style.display = "block"
    boxes[1].style.display = "block"
    boxes[2].style.display = "block"
    boxes[3].style.display = "none"
    boxes[4].style.display = "none"
    boxes[5].style.display = "none"
    boxes[3].style.visibility = "hidden"
    boxes[4].style.visibility = "hidden"
    boxes[5].style.visibility = "hidden"

    result.innerHTML = "Result";
    result.style.backgroundColor = "rgb(91, 27, 94)"
})
hard.addEventListener("click", function () {
    boxes.forEach(item => {
        item.style.display = "block"
        item.style.visibility = "visible"
        item.style.backgroundColor = "blueviolet"
        item.innerHTML = ""
    })
    successClicked = false;
    result.innerHTML = "Result";
    result.style.backgroundColor = "rgb(91, 27, 94)"
})



function rgbColor() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);

    let rgb1 = `RGB(${r}, ${g}, ${b})`;
    return rgb1
}

start.addEventListener("click", function () {


    boxes.forEach(item => {

        item.classList.remove("boxrgb")
        item.classList.add("box")
        item.style.visibility = "visible"
        item.innerHTML = ""
    })

    successClicked = false;

    let blockedItem = document.querySelectorAll('.box[style*="display: block;"]')
    boxes.forEach(item => {
        if (window.getComputedStyle(item).display === "block") {
            item.style.backgroundColor = rgbColor();
        }
    });

    let index = Math.round(Math.random() * (blockedItem.length - 1));
    
    boxes[index].classList.add("boxrgb")
    boxes[index].classList.remove("box")
    rgb.innerHTML = boxes[index].style.backgroundColor = rgbColor()
    result.innerHTML = "Result";
    result.style.backgroundColor = "rgb(91, 27, 94)"

    boxes.forEach(item => {
        item.addEventListener("click", function (e) {
            if (successClicked) {
                return;
            }
            if (item.classList.contains("boxrgb")) {
                successClicked = true;
                e.preventDefault();
                window.alert("You Have Won the Game!")
                item.innerHTML = "WINNER!"
                item.style.backgroundColor = "#008000"
                item.style.display = "flex"
                item.style.justifyContent = "center"
                item.style.alignItems = "center"
                item.style.color = "white"
                item.style.fontSize = "40px"
                item.style.fontFamily = "'Kaushan Script', cursive"
                item.style.display = "block"
                result.innerHTML = "Success"
                result.style.backgroundColor = "#008000"
                let points = document.getElementById("points")
                points.innerHTML++
            } else if (item.classList.contains("box")) {
                item.style.visibility = "hidden";
                result.innerHTML = "Failed"
                result.style.backgroundColor = "#FF0000"
            }
        });
    });
})



window.alert = function (message) {
    const alert = document.createElement("div");
    const alertButton = document.createElement("button");
    const alertAnimation = document.createElement("div");
    alertAnimation.innerHTML = `
    <img src = "./images/success_animation-ezgif.com-resize.gif">
    `
    alert.classList.add("alert");
    alertAnimation.classList.add("alert-animation");
    alertButton.classList.add("alert-button");
    
    alertButton.innerText = "OK";
    alert.innerText = message;

    alert.appendChild(alertAnimation);
    alert.appendChild(alertButton);

    alertButton.addEventListener("click", function () {
        alert.remove();
    });

    document.body.appendChild(alert);
};