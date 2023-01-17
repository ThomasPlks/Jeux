//on vas chercher tout lrees élément sur les quelles on intevient 
let mario = document.querySelector("#mario")
let solHaut = document.querySelector("#sol-haut")
let solBas = document.querySelector("#sol-bas")
let paysage = document.querySelector("#paysage")
let ciel = document.querySelector("#ciel")

//on conserve en permanence le décallage des éléments

let decalage = 0

// au chargement de la fenêtre
window.onload = () => {
    document.addEventListener("keydown", marcher ) //écouteur d'événement qui permette d'écouter la presion sur les touches du clavier 
    document.addEventListener("keyup", stopper)
}
//création d'une fonction marcher en récuperant l'événement qui fait marcher mario
function marcher(event){
    switch(event.key){
        case "ArrowLeft": //quand on appuis sur la fleche gauche la classe mario gauche s'ajoute a l'id mario et le fait courir vers la gauche 
            mario.classList.add("mario-gauche")//ajoute a l'id mario la classe mario gauche 
            mario.classList.remove("mario-droite")//enleve a l'id mario la classe mario droite
            parallaxe()
            decalage++
            break 

         case "ArrowRight":
            mario.classList.add("mario-droite")
            mario.classList.remove("mario-gauche")
            parallaxe()
            decalage--
            break
    }
}
//cette fonction stopppe le mario
function stopper(envent){
    mario.classList.remove("mario-gauche")//les deux commande enleve a l'id mario les classe mario-gauche et mario-droite
    mario.classList.remove("mario-droite")
}


//paralax permet de regrouper plusieur éléments qui sont annimées a des vitesse différentes
function parallaxe(){
    //on décale les différents élément
    solBas.style.backgroundPositionX = (decalage * 4) + "px" //décalle le sol du bas par rapport au reste
    solHaut.style.backgroundPositionX = (decalage * 4) + "px" //décalle le sol du bas par rapport au reste
    paysage.style.backgroundPositionX = (decalage *2) + "px" //décalle le sol du bas par rapport au reste
    ciel.style.backgroundPositionX = decalage + "px"

}