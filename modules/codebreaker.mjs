import {arrayOfColor,arrayToFind,arrayRandom} from "./modules/codemaker.mjs"

let arrayPlayerColor = []

//le joueur propose 4 couleurs parmi les 8 disponibles
function playerGuess(array){
   array = ["rose","bleu", "rouge","noir"]
   return array
}

// on verifie si c'est gagné => return true ou false
function didIWin(array1,array2){ 
    if (array1 === array2){
        console.log("Vous avez gagné !!")
        return true
    }
    
}
didIWin(playerGuess(arrayPlayerColor),arrayToFind)

// on verifie si une couleur fait partie des couleurs à trouver => return true ou false
function checkColor(colors){
    for (let i = 0; i < colors.length; i++) {
        for (let j = 0; j < arrayToFind.length; j++) {     
            if (colors[i] == arrayToFind[j]) {
                console.log(colors)
              console.log("la couleur "+ colors[i] +" est bonne mais mal placée");
            }
        }
    }
    }
    checkColor(playerGuess(arrayPlayerColor))

// on verifie pour chaque couleur retournée True si elle est bien placée
function checkWellPlaced(array1,array2){
    for (let i=0;i<array1.length;i++){
        if (array1[i] == array2[i]){
            console.log("la couleur " + array1[i] + " est bien placée !")
        }
    }
}

checkWellPlaced(playerGuess(arrayPlayerColor),arrayToFind)



export {didIWin,checkColor,checkWellPlaced}