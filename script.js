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

var maBoite;

maBoite = 10; // Affectation

document.write(maBoite);