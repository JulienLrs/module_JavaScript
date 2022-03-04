// document est un objet qui symbolise la partie affichée (body)
/*
document à une méthode write() permettant d'écrire sur le document
*/

document.write("<h2>Entrainement Javascript</h2>"); // le HTML est interprété
document.write("Hello");

// la console est un objet destiné à débuguer et permet de suivre son script
console.log("Coucou");
console.log("message"); // comme log, sur firefox affiche un (i) d'information

// window.alert('bouh');  >>> ceci est une alerte
// window.prompt('Entrez une valeur'); >>> question avec réponse
// window.confirm('Etes vous sûr ?'); >>> attente de confirmation (OK/Annuler)

document.write("<h2>Variables / déclaration / affectation</h2>");

var maBoite; // Déclaration
maBoite = 10; // Affectation
document.write(maBoite); // Affichage

let maBoite2 = "texte"; // Déclaration + Affichage
document.write("<br>");
document.write("maBoite2");

let prenom = "Frédéric",
  nom = "Leclercq"; // Déclarations multiples

// Concaténation
document.write("<br>Je m'appelle " + prenom + " " + nom + "<br>");
// le + est le symbole de la concaténation
// mais il se comporte tel quel si un des éléments est une chaine de caractere

// Alternative à la concaténation, utilisation des backquotes (ou backticks)
//``
document.write(`<br>Je m'appelle ${prenom} ${nom}`);
// Les variables sont identifiées avec l'écriture ${}

// Concaténation à l'affectation
let fruit = "pomme";
// fruit = 'fraise' >> ici on remplace "pomme" par "fraise"
fruit += "fraise"; // Concaténation à l'affectation

console.log(fruit);

//créer une variable ville, et afficher 'je réside dans la ville...'

let ville = "Paris";

document.write("<br>Je réside dans la ville de " + ville);
document.write(`<br>Je réside dans la ville de ${ville}`);

document.write("<h2>Types de données </h2>");

let chiffre = 5;
console.log(typeof chiffre); // number
let duTexte = "du texte";
console.log(typeof duTexte); // string
let unBoolean = true;
console.log(typeof unBoolean); // Booléen

let numero = 0;
document.write(Boolean(numero)); // La valeur booleenne de 0 est false
numero = 6;
document.write("<br>" + Boolean(numero)); // la valeur booléenne des autres chiffres est true

console.log(5 > 2); // booléen qui indique le resultat de la comparaison
console.log(10 < 3);

// ====================================================== //
// ===================== CONSTANTES ===================== //
// ====================================================== //

document.write("<h2>Les constantes</h2>");

// const permet de déclarer une constante et par convention elle est écrite en MAJ
const URL = "https.//monsite.com";

// URL = 'autre chose';  = ERREUR car URL est constant et ne peut être modifié
document.write(`Mon url est ${URL}`);

// ====================================================== //
// ============== OPERATEURS ARITHMETIQUES ============== //
// ====================================================== //

document.write("<h2>Opérateurs arithmétiques</h2>");
document.write(10 + 5 + "<br>");
// addition concaténation
// pour rappel : le + est opérateur d'addition si j'ai à faire à deux nombres (number)

document.write(10 + 5 + "<br>");
document.write(10 * 5 + "<br>");
document.write(10 / 5 + "<br>");
document.write((10 % 5) + "<br>"); // Modulo : reste de la division entière
document.write(10 ** 5 + "<br>"); // puissance 10²

let chiffre1 = 10,
    chiffre2 = 3;
let resultat = chiffre1 + chiffre2;
document.write(`${chiffre1}+${chiffre2}=${resultat}<br>`);
document.write(`${chiffre1 + chiffre2}<br>`);
document.write(chiffre1 + chiffre2 + "<br>");
// le même résultat écrit de différente façon

// parseFloat() et parseIn() sont des fonctions qui vont forcer en float ou en Int(eger) des chaines de caractères dont la première partie est numérique
console.log(parseInt("256€"));
console.log(parseInt("1200px"));
console.log(parseInt("25.34"));
console.log(parseFloat("25.34€"));

// let nombre1 = parseFloat(window.prompt('Entrez un premier nombre'));
// let nombre2 = parseFloat(window.prompt('Entrez un deuxieme nombre'));
// document.write(`Vous avez saisi ${nombre1} et ${nombre2}, voici la somme : ${nombre1+nombre2}`);

document.write("<h2>Structures conditionnelles</h2>");

let a = 10,
    b = 5,
    c = 2;

// Structure if/else
// BOOLEAN
if (a > b) {
  // si le booléen est VRAI
document.write("a est supérieur à b<br>");
} else {
  // si le booléen est FAUX
document.write("a n'est pas suppérieur à b<br>");
}

// ====================================================== //
// ================ Plusieurs conditions ================ //
// ====================================================== //

// ET : &&
if (a > b && b > c) {
document.write("OK pour les deux conditions<br>");
}
/*
FAUX && FAUX = FAUX
FAUX && VRAI = FAUX
VRAI && VRAI = VRAI
*/

// OU : ||
if (a == 9 || b > c) {
document.write("Ok pour au moins une des conditions<br>");
}

// OU exclusif (simulé)
// (!) = NOT
if ((a == 9 && !(b > c)) || (!(a == 9) && b > c)) {
document.write("Une de ces conditions seulement doit être vraie<br>");
}
/*
FAUX || FAUX = FAUX
FAUX || VRAI = VRAI
VRAI || VRAI = VRAI (ou inclusif)
VRAI (ou exclusif) VRAI = FAUX (ou exclusif)
*/

// utilisation du != (NOT egal)
if (a != 8) {
document.write("a est different de 8<br>");
}

if (!(a == 8)) {
document.write("a est different de 8<br>");
}
/* on utilise cette écriture quand on veut exécuter du code quand une condition est fausse */

let test = a > 10; // test
console.log(test);

if (!test) {
document.write("c'est vrai que a n'est pas supp à 10<br>");
}

let age = 14;

if (!(age > 18)) {
document.write("Tu ne rentres pas<br>");
}

age += 2; // age vaut 16 > age = age +2
console.log(age);

age -= 3; // age vaut 13 > age = age - 3

age += 1; // age = 14
age++; // incrémentation de 1
age--; // décrémentation de 1
console.log(age);

// number,   string(chaine de valeur)
let varA = 1,
varB = "1";
if (varA == varB) {
console.log("C'est la même chose");
}
// les variables sont égales en VALEUR

// Comparaison en VALEUR et en TYPE
if (varA === varB) {
/* ne s'affiche pas car ce n'est pas VRAI */
console.log("C'est la même chose en valeur et en type");
}

// autre exemple : 0 et false sont identiques en valeur mais pas en type
if (0 === false) {
  /* ne s'affiche pas car 0 est un nombre et false un booléen */
console.log("C'est la même chose");
}

// ====================================================== //
// ============== Structure if/else if/else ============= //
// ====================================================== //
// le esle/if permet d'intercaler des conditions
if (a == 8) {
document.write("Cas 1 : a vaut 8<br>");
} else if (a != 10) {
document.write("Cas 2 : a est différent de 10<br>");
} else {
document.write("Cas 3 : tout le monde a faux<br>");
}

// ====================================================== //
// ================== Structure switch ================== //
// ====================================================== //
// (fonctionne si la variable comparée est toujours la même et qu'on la compare à différentes valeurs)
let couleur = "jaune";

switch (couleur) {
case "bleu":
console.log("vous aimez le bleu");
break;
case "rouge":
console.log("vous aimez le rouge");
break;
case "vert":
console.log("vous aimez le vert");
break;
default:
console.log(
"Vous n'aimez aucune de nos couleurs disponibles (bleu, rouge, vert)");
} /* tres interessant si 3 cas ou plus */

// Exercice : retranscrire ceci avec if/else if/else
if (couleur == "rouge") {
document.write("Vous aimez le jaune");
} else if (couleur == "bleu") {
document.write("Vous aimez le jaune");
} else if (couleur == "vert") {
document.write("Vous aimez le jaune");
} else {
document.write("Vous aimez le jaune<br>");
}

/* isNaN() >>> is Not a Number */
/* !isNaN() >>> Not is Not a Number = is a number */

let nombre3 = 10;
if (!isNaN(nombre3)) {
document.write("C'est bien un nombre !<br>");
}

if (typeof nombre3 == "number") {
document.write("C'est bien un nombre !<br>");
}
console.log(nombre3);

// ~~~~~ DRY : DON'T REPEAT YOURSELF ~~~~~ //

// ====================================================== //
// =================== FORME TERNAIRE =================== //
// ====================================================== //

let sexe = "m";
let civilite = sexe == "m" ? "Monsieur" : "Madame";
// condition   ?   si vrai     sinon
console.log(civilite);
/*
let civilite;
if( sexe == 'm'){
    civilite = 'Monsieur';
}
else{
    civilite='Madame'
}
*/

// ====================================================== //
// =========== STRUCTURES ITERATIVES (BOUCLES) ========== //
// ====================================================== //

document.write("<h2>Structures itératives : boucles</h2>");

/*
1 - Situation de départ
2 - Condition qui fait tourner la boucle
3 - Incrémentation 
*/

// BOUCLE WHILE

let i = 1; // point 1 (situation de départ)
while (i <= 10) {
  // point 2 (condition qui fait tourner la boucle)
document.write(i + " ");
  i++; // point 3 (incrémentation)
}
document.write("<hr>");

// BOUCLE FOR (pour)

//     1       2     3
for (let i = 1; i <= 10; i++) {
document.write(i + " ");
}
document.write("<hr>");

// Exercice: Avec la boucle de votre choix, afficher un comptage de 10 à 100 de 10 en 10

i = 10;
while (i <= 100) {
document.write(i + " ");
i += 10;
}
document.write("<hr>");

for (let i = 10; i <= 100; i += 10) {
document.write(i + " ");
}

// BOUCLE DO/WHILE

document.write("<hr>");

i = 6;
do {
document.write(i + " "); // cette instruction sera réalisée au moins une fois
i++;
} while (i <= 5);

// exemple
// let reponse;
// do{
//     reponse = window.prompt('Ecrivez stop');
// }
// while(reponse != 'stop');

// exemple
// let reponse;
// let loisirs = '';
// do{
//    reponse = window.prompt('Saisir un loisir ou ecrivez stop quand vous avez terminé');

//    if(reponse!='stop'){
//     loisirs += reponse + ' ';
//    }
// }
// while(reponse != 'stop');

// document.write('Vos loisirs sont ' + loisirs);

document.write("<select>");
// 2004 => 1904 de 1 en 1
for (let annee = 2004; annee >= 1904; annee--) {
document.write(`<option>${annee}</option>`);
}
document.write("</select>");

// BOUCLES IMBRIQUEE
let lignes = 8;
let colonnes = 8;

document.write("<table>");
for (let lig = 1; lig <= lignes; lig++) {
document.write("<tr>");
for (let col = 1; col <= colonnes; col++) {
document.write("<td></td>");
}
document.write("</tr>");
}
document.write("</table>");

document.write("<h2>Fonctions prédéfinies</h2>");

// ====================================================== //
// ================ CHAINE DE CARACTERES ================ //
// ====================================================== //

let phrase = "Je m'apelle Julien"; //propriété
document.write(`Ma phrase contient ${phrase.length} caractères`);
// length est une propriété de phrase qui renvoie sa longueur (nbre de caractères)
// méthode
document.write(`<br>En majuscule : ${phrase.toUpperCase()} `); // force en majuscule

document.write(phrase.toLowerCase()); // force en minuscule

document.write(`<br>Julien se trouve à la position ` + phrase.indexOf("Julien"));
// idexOf(chaine) renvoie la position de départ de chaine à l'interieur de phrase
// (si non trouvé, renvoie à la position -1)

document.write("<hr>");

// sub string (sous chaine) (extraire un morceau de la phrase)
document.write(phrase.substring(12, 19));
// substring(position_depart,position_arrivée)
document.write("<hr>");

let email = "julien.larrouse@gmail.com";
// extraire la partie nominative d'une adresse email
document.write(email.substring(email.indexOf("@") + 1));

// Fonctions aux nombres
let monNombre = 125;
console.log(Number.isInteger(monNombre));

let prix = "45.92€"; // string
console.log(parseInt(prix)); // renvoie la partie entiere du nombre dans la chaine
console.log(parseFloat(prix)); // renvoie la partie intégrale(décimale incluse) du nombre dans la chaine

let valeurPrix = parseFloat(prix);
console.log(Math.round(valeurPrix)); // arrondi à l'entier le plus proche
console.log(Math.floor(valeurPrix)); // arrondi à l'entier inférieur
console.log(Math.ceil(valeurPrix));  // arrondi à l'entier supérieur

// Nombre aléatoire
console.log(Math.random()); // renvoie un chiffre aléatoire compris entre 0 et 1 non inclus

// simuler un jet de dé 6

console.log(Math.floor(Math.random()*6) + 1); // 1-6
console.log(Math.floor(1 + Math.random()*6)); // 1-6
console.log(Math.ceil(Math.random()*5)+ 1);   // 1-6

document.write('<h3>Jeu de dés</h3>');


// EXERCICE
// Simuler un jet de dé pour vous
//                      pour l'ordinateur
// Si votre score est supérieur à celui de l'ordinateur, afficher "vous avez gagné"
// Si votre score est inférieur à celui de l'ordinateur, afficher "vous avez perdu"
// Si votre score est indentique à celui de l'ordinateur, afficher "match nul"

let monJet = Math.floor(Math.random()*6) + 1;
let ordiJet = Math.floor(Math.random()*6) + 1;

document.write(`Vous avez obtenu ${monJet} et l'ordinateur a obtenu ${ordiJet}<br>`);

if(monJet > ordiJet){
    document.write('Vous avez gagné !<br>');
}
else if( monJet < ordiJet){
    document.write('<br>Vous avez perdu !');
}
else{
    document.write('Match nul !');
}



document.write("<h2>Fonctions utilisateurs</h2>");

function direBonjour(){
    document.write('Bonjour!<br>');
}

direBonjour(); // Je peux appeler ma fonction ici
// 150 lignes de code ...
direBonjour(); // ou là

function direBonjour2(prenom){
    document.write('Bonjour '+prenom+'<br>');
}

direBonjour2('Dany');
direBonjour2('Mathieu');


function direBonjour3(prenom){
    return 'Bonjour '+prenom+ '<br>';
}

let bienvenue = direBonjour3('Julien');
document.write(direBonjour3('Jenne'));

// Autre exemple avec 2 paramètres
function addition(a,b){
    return a+b; // en sortie de renvoie l'addition des deux paramètres
}
document.write(addition(53,76) + '<br>');

// Esemple de fonction de calcul de la tva a partir d'un prix HT et d'un taux
// Déclaration de type 'Function Statement'
function calculTVA(prixHT, taux=20){
    let prixTTC = prixHT + prixHT * taux/100;
    return prixTTC;
}
// esxemples d'utilisation
// en attribuant une valeur à un parametre, il devient optionnel au moment de l'appel de la fonction et aura une valeur par défaut
document.write(calculTVA(100,20) + '<br>');
document.write(calculTVA(100,5.5) + '<br>');
document.write(calculTVA(400,20) + '<br>');
document.write(calculTVA(200) + '<br>');

// Déclaration de type 'Function Operator'
let maFonction = function (){
  console.log ('Hello');
};

maFonction();

// Espace local et global 
let animal = 'loup';
function jungle(){
  let animal = 'tigre';
  return animal;
}
document.write(animal); // = loup
document.write(jungle()); // = tigre
document.write(animal); // = loup





document.write('<h2>Tableaux de données : Arrays </h2>');

