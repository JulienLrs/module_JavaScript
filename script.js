// document est un objet qui symbolise la partie affichée (body)
/*
document à une méthode write() permettant d'écrire sur le document
*/
document.write('Hello');
document.write('<h2>Entrainement Javascript</h2>'); // le HTML est interprété

// la console est un objet destiné à débuguer et permet de suivre son script
console.log('Coucou');
console.log('message'); // comme log, sur firefox affiche un (i) d'information


// window.alert('bouh');  >>> ceci est une alerte
// window.prompt('Entrez une valeur'); >>> question avec réponse
// window.confirm('Etes vous sûr ?'); >>> attente de confirmation (OK/Annuler)

document.write('<h2>Variables / déclaration / affectation</h2>');

var maBoite; // Déclaration
maBoite = 10; // Affectation
document.write(maBoite); // Affichage

let maBoite2 = 'texte'; // Déclaration + Affichage 
document.write('<br>');
document.write('maBoite2');


let prenom='Frédéric', nom='Leclercq'; // Déclarations multiples


// Concaténation
document.write("<br>Je m'appelle " + prenom + ' ' + nom + '<br>'); 
// le + est le symbole de la concaténation 
// mais il se comporte tel quel si un des éléments est une chaine de caractere


// Alternative à la concaténation, utilisation des backquotes (ou backticks)
//``
document.write(`<br>Je m'appelle ${prenom} ${nom}`);
// Les variables sont identifiées avec l'écriture ${}

// Concaténation à l'affectation
let fruit = 'pomme';
// fruit = 'fraise' >> ici on remplace "pomme" par "fraise"
fruit += 'fraise'; // Concaténation à l'affectation

console.log(fruit);

//créer une variable ville, et afficher 'je réside dans la ville...'


let ville='Paris'

document.write('<br>Je réside dans la ville de ' + ville);
document.write(`<br>Je réside dans la ville de ${ville}`);

