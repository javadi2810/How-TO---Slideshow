let imgSrc = {
    src: ["./img/0.jpg", "./img/1.jpg", "./img/2.jpg", "./img/3.jpg", "./img/4.jpg"],
    Caption: ["Caption Text", "Caption Two", "Caption Three", "Caption four", "Caption five"]
}


let aroBox = document.querySelector(".aroBox")
let Slideshow = document.querySelector(".Slideshow")
let counting = document.querySelector(".counting")

let x = 0;
aroBox.addEventListener("click", function (e) {

    if (e.target.classList.contains("arrowRight")) {
        if (x < imgSrc.src.length - 1) {
            x++
            counting.innerHTML = x + 1

        } else {
            x = 0
            counting.innerHTML = x + 1
        }

    }


    if (e.target.classList.contains("leftArrow")) {
        if (x > 0) {
            x--
            counting.innerHTML = x + 1

        } else {
            x = imgSrc.src.length - 1;
            counting.innerHTML = x + 1
        }

    }


   Slideshow.style.backgroundImage = `url(${imgSrc.src[x]})`
   

})




