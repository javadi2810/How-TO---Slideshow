let imgSrc = {
    src: ["./img/1.jpg","./img/2.jpg","./img/3.jpg","./img/4.jpg","./img/5.jpg"],
    Caption:["Caption Text","Caption Two","Caption Three","Caption four","Caption five"] 
}


let aroBox = document.querySelector(".aroBox")
let Slideshow=document.querySelector(".Slideshow")
let counting=document.querySelector(".counting")

let x=0;
aroBox.addEventListener("click", function (e) {

        if(e.target.classList.contains("arrowRight")){
            x++
            if(x <= imgSrc.src.length){
                Slideshow.style=`
                    background-image: url(${imgSrc.src[x]});
                `
                counting.innerHTML=x

            }else{
                x=0
            }

            console.log(x);
            
        }if (e.target.classList.contains("leftArrow")) {
            x--

            if(x >= 0){
             Slideshow.style=`
                background-image: url(${imgSrc.src[x]});
            `
            counting.innerHTML=x+1

            }else{
                x=imgSrc.src.length;
            }
            console.log(x);
        } else {
            return
        }


})

// imgSrc.forEach((i) => {
//     let id = i[0].id;
//     let src = i[0].src;
//     let Caption = i[0].Caption;







// })



