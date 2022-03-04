// ====================================================== //
// ====================== EXERCICE ====================== //
// ====================================================== //

// document.write("<h2>EXERCICE JAVASCRIPT</h2>");

// const couleur1 = "jaune";
// const couleur2 = "bleu";
// const couleur3 = "rouge";

// let couleur1couleur2 = "vert",
//     couleur1couleur3 = "orange",
//     couleur2couleur3 = "violet";

// // document.write("Ma première couleur est le");
// // document.write("Ma deuxième couleur est le");

// parseFloat(window.prompt("Entrez une première couleur entre le jaune, le bleu ou le rouge"));
// parseFloat(window.prompt("Entrez une deuxieme couleur entrele jaune, le bleu ou le rouge"));



// if (couleur1couleur2){
// document.write(`Vous avez saisi ${couleur1} et ${couleur2}, voici la somme : ${couleur1couleur2}`);
// }
// else if (couleur1couleur3){
//     document.write(`Vous avez saisi ${couleur1} et ${couleur3}, voici la somme : ${couleur1couleur3}`);
// }
// else {
//     document.write(`Vous avez saisi ${couleur2} et ${couleur3}, voici la somme : ${couleur2couleur3}`);
// }


// ====================================================== //
// ================ DEUXIEME PROSSIBILITE =============== //
// ====================================================== //


// let choix1 = window.prompt('Choisissez une couleur entre rouge, bleu ou jaune');
// let choix2 = window.prompt('Choisissez une deuxième couleur entre rouge, bleu ou jaune');

// if ((choix1 == 'jaune' && choix2 == 'bleu') || (choix1 == 'bleu' && choix2 == 'jaune')) {
//     window.alert('vous obtenez du vert');
// }

// else if ((choix1 == 'bleu' && choix2 == 'rouge') || (choix1 == 'rouge' && choix2 == 'bleu')) {
//     window.alert('vous obtenez du violet');
// }

// else if ((choix1 == 'jaune' && choix2 == 'rouge') || (choix1 == 'rouge' && choix2 == 'jaune')) {
//     window.alert('vous obtenez du orange');
// }

// else if (choix1 == choix2){
//     window.alert('Recommencez en alternant de couleur ');
// }

// else {
//     window.alert ('ERREUR');
// }







// ====================================================== //
// ===================== CORRECTION ===================== //
// ====================================================== //

// 1 - couleur 1
let couleur1;
do{
couleur1 = window.prompt("Entrez une première couleur entre le jaune, le bleu ou le rouge");
}
while(couleur1!='bleu' && couleur1!='jaune' && couleur1!='rouge');

// 2 - couleur 2
let couleur2;
do{
couleur2 = window.prompt("Entrez une deuxième couleur entre le jaune, le bleu ou le rouge");
}
while(couleur2!='bleu' && couleur2!='jaune' && couleur2!='rouge') || couleur2 == couleur1);

//  3  - Mélange
if ((couleur1 == 'jaune' && couleur2 == 'bleu') || (couleur1 == 'bleu' && couleur2 == 'jaune')) {
    melange = 'vert';
}

else if ((couleur1 == 'jaune' && couleur2 == 'rouge') || (couleur1 == 'rouge' && couleur2 == 'jaune')) {
    melange = 'orange';
}

else {
    melange = 'violet';
}

// Affichage
document.write(`${couleur1} et ${couleur2} donnent du ${melange}`);