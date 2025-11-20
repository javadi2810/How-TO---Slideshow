let imgSrc = [
    { id: 1, src: "./img/0.jpg", Caption: "Caption Text" },
    { id: 2, src: "./img/1.jpg", Caption: "Caption Two" },
    { id: 3, src: "./img/2.jpg", Caption: "Caption Three" },
    { id: 4, src: "./img/3.jpg", Caption: "Caption four" },
    { id: 5, src: "./img/4.jpg", Caption: "Caption five" },
    { id: 6, src: "./img/15.jpg", Caption: "Caption sixe" }
]



let arrowBox = document.querySelector(".arrowBox");
let Slideshow = document.querySelector(".Slideshow");
let counter = document.querySelector(".counter");
let counting = document.querySelector(".counting");
let length = document.querySelector(".length");
let buttonSliderBox = document.querySelector(".buttonSliderBox");
let CaptionText=document.querySelector(".CaptionText");
let x = 0;
let setval
let restartval


function startVal() {
    clearInterval(setval)
    setval = setInterval(() => {
        if (x < imgSrc.length - 1) {
            x++

        } else {
            x = 0
        }

        update()
    }, 5000);
}
startVal()


function pauseAndRestartTimeout() {
    clearInterval(setval)
    clearTimeout(restartval)
   restartval= setTimeout(() => {
        startVal()
    }, 2000);
}



function update() {
    counter.style.display = "block";
    counting.innerHTML = imgSrc[x].id;
    length.innerHTML = imgSrc.length;
    CaptionText.innerHTML=imgSrc[x].Caption;
    Slideshow.style.backgroundImage = `url(${imgSrc[x].src})`;
}


arrowBox.addEventListener("click", function (e) {
    const right=e.target.classList.contains("arrowRight");
    const left =e.target.classList.contains("leftArrow");

    if (!e.target.classList.contains("arrowRight") && !e.target.classList.contains("leftArrow")) { return }
    if (right) {
        if (x < imgSrc.length - 1) {
            x++

        } else {
            x = 0
        }
    }

    if (left) {
        if (x > 0) {
            x--

        } else {
            x = imgSrc.length - 1;
        }
    }

    update()
    pauseAndRestartTimeout()
})




imgSrc.forEach((i) => {
    buttonSliderBox.innerHTML += `<button atr="${i.id}"  class="" ></button>`
})

let buttonSlider = buttonSliderBox.querySelectorAll("button");
buttonSlider.forEach((i) => {
    i.addEventListener("click", () => {
        buttonSlider.forEach(btn => btn.classList.remove("checked"))

        let atr = i.getAttribute("atr");
        atr = Number(atr);
        let findId = imgSrc.find((f) => f.id === atr);
        x = atr-1;
        if (findId) {
            // console.log(imgSrc[x]);
            update()
            pauseAndRestartTimeout()
            i.classList.add("checked")
            
        }

    })
})















