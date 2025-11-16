let imgSrc = [
    { id: 1, src: "./img/0.jpg", Caption: "Caption Text" },
    { id: 2, src: "./img/1.jpg", Caption: "Caption Two" },
    { id: 3, src: "./img/2.jpg", Caption: "Caption Three" },
    { id: 4, src: "./img/3.jpg", Caption: "Caption four" },
    { id: 5, src: "./img/4.jpg", Caption: "Caption five" },
    { id: 6, src: "./Screenshot 2025-11-16 061905.png", Caption: "Caption sixe" }
]



let arrowBox = document.querySelector(".arrowBox");
let Slideshow = document.querySelector(".Slideshow");
let counter = document.querySelector(".counter");
let counting = document.querySelector(".counting");
let length = document.querySelector(".length");
let buttonSliderBox = document.querySelector(".buttonSliderBox")
let x = 0;

function update() {
    counter.style.display = "block";
    counting.innerHTML = imgSrc[x].id;
    length.innerHTML = imgSrc.length;


}


arrowBox.addEventListener("click", function (e) {
    if (!e.target.classList.contains("arrowRight") & !e.target.classList.contains("leftArrow")) { return }
    if (e.target.classList.contains("arrowRight")) {
        if (x < imgSrc.length - 1) {
            x++

        } else {
            x = 0
        }
    }


    if (e.target.classList.contains("leftArrow")) {
        if (x > 0) {
            x--

        } else {
            x = imgSrc.length - 1;
        }
    }

    update()
    Slideshow.style.backgroundImage = `url(${imgSrc[x].src})`;

})






imgSrc.forEach((i) => {
    buttonSliderBox.innerHTML += `<button atr="${i.id}"  class="" ></button>`
})

let buttonSlider = buttonSliderBox.querySelectorAll("button");
buttonSlider.forEach((i) => {
    i.addEventListener("click", () => {
        let atr=i.getAttribute("atr");
        atr=Number(atr);
        let findId=imgSrc.find( (f) => f.id===atr);

        if(findId){
            console.log(atr);
        }
        
    })
})








function wait() {
    setInterval(() => {
        if (x < imgSrc.length - 1) {
            x++

        } else {
            x = 0
        }
        update()
        Slideshow.style.backgroundImage = `url(${imgSrc[x].src})`;
    }, 5000);
}wait()






