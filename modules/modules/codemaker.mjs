

// besoin : tableau de 4 éléments pour stocker les 4 couleurs à deviner
let arrayToFind = [];
// tableau de 8 éléments pour les 8 couleurs disponibles
const arrayOfColor = [
  " bleu",
  " rouge",
  " vert",
  " noir",
  " jaune",
  " blanc",
  " orange",
  " rose",
];
// choix aléatoire des  4 couleurs a deviner

function arrayRandom(color) {
  for (let i = 0; i < 4; i++) {
    arrayToFind += color[Math.floor(Math.random() * 8)];
  }
  arrayToFind = arrayToFind.split(" ");
  arrayToFind = [
    arrayToFind[1],
    arrayToFind[2],
    arrayToFind[3],
    arrayToFind[4],
  ];
  console.log(arrayToFind);
  return arrayToFind;
}
arrayRandom(arrayOfColor);

export {arrayOfColor,arrayToFind,arrayRandom}