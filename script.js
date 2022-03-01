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

document.write("<h2>Les constantes</h2>");

// const permet de déclarer une constante et par convention elle est écrite en MAJ
const URL = "https.//monsite.com";

// URL = 'autre chose';  = ERREUR car URL est constant et ne peut être modifié
document.write(`Mon url est ${URL}`);

document.write("<h2>Opérateurs arithmétiques</h2>");
document.write(10 + 5 + "<br>");

// addition concaténation
// pour rappel : le + est opérateur d'addition si j'ai à faire à deux nombres (number)


document.write(10 + 5 + "<br>");
document.write(10 * 5 + "<br>");
document.write(10 / 5 + "<br>");
document.write(10 % 5 + "<br>"); // Modulo : reste de la division entière
document.write(10 ** 5 + "<br>");// puissance 10²

let chiffre1 = 10, chiffre2 = 3;
let resultat = chiffre1 + chiffre2;
document.write(`${chiffre1}+${chiffre2}=${resultat}`);

