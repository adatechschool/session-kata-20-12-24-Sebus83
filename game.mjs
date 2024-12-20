import {arrayOfColor,arrayToFind,arrayRandom} from "./session-kata-20-12-24-Sebus83/modules/modules/codemaker.mjs"
import {playerGuess,arrayPlayerColor,didIWin,checkColor,checkWellPlaced} from "./session-kata-20-12-24-Sebus83/modules/codebreaker.mjs"

arrayRandom(arrayOfColor)
playerGuess()
didIWin(playerGuess(arrayPlayerColor),arrayToFind)
checkColor(playerGuess(arrayPlayerColor))
checkWellPlaced(playerGuess(arrayPlayerColor),arrayToFind)
// faire cela dans une limite de 12 fois, si pas trouv la bone réponse c'est perdu 