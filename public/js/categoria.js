let imagen1 = document.getElementById("imagen_1")
let overlay = document.getElementById("overlay")
let x = document.getElementById("x")
let i = 0






imagen1.addEventListener("click", (e) => {

    overlay.classList.add("aparece")
    document.getElementsByClassName("overlay__img")[0].style.opacity = "1"
i =0
console.log(i)




})




document.getElementById("isquierda").addEventListener("click", function (e) {
    e.preventDefault()

    if (i == 0) {

        document.getElementsByClassName("overlay__img")[i].style.opacity = "0"
        
        document.getElementsByClassName("overlay__img")[2].style.opacity = "1"
        i=2

    } else {

        document.getElementsByClassName("overlay__img")[i].style.opacity = "0"
        i--
        document.getElementsByClassName("overlay__img")[i].style.opacity = "1"
    }

})








document.getElementById("derecha").addEventListener("click", function (e) {
    e.preventDefault()
    // document.getElementsByClassName("overlay__img")[1].style.transition="opacity 2s linear";
    if(i<2){
    document.getElementsByClassName("overlay__img")[i].style.opacity = "0"
    i++
    console.log(i)
    document.getElementsByClassName("overlay__img")[i].style.opacity = "1"}

    
   else if (i == 2) {
        
        document.getElementsByClassName("overlay__img")[i].style.opacity = "0"
        i = 0
        console.log(i)
       
        document.getElementsByClassName("overlay__img")[i].style.opacity = "1"

      

    } 
 
})

















x.addEventListener("click", (e) => {
    e.preventDefault()
    overlay.classList.remove("aparece")
    document.getElementsByClassName("overlay__img")[i].style.opacity = "0"
    i = 0
    console.log(i)
})