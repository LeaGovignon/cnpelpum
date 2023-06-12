$(document).ready(function() { // Initialisation de JQuery pour faciliter la manipulation des objets

	// Listes des paires question/bonne réponse
	var decryptage = [
		["avocat", "secrecy,shape-shifting&love"],
		["ciseaux", "openingnewformsofcommunica°"],
		
	];

	// Choix aléatoire d'une qestion
	var choix_question = Math.floor(Math.random()*decryptage.length);

	// Stockage de la question dans une variable
	var question = decryptage[choix_question][0];

	// Stockage de la bonne réponse dans une variable
	var bonne_response = decryptage[choix_question][1];

	// Lancer le prompt et stocker la réponse dans la variable "reponse_utilisateur"
	var reponse_utilisateur = prompt("Quel est le mot de passe correspondant à "+question+" ?");

	// Vérifier si la réponse est bonne
	if (reponse_utilisateur.toLowerCase() == bonne_response) {
		// Bonne réponse
		// Exécuter les fonctions suivantes
		$(".contenu_secret").show();
		// $("body").css("background-color", "green");
	} else {
		// Mauvaise réponse
		// Exécuter les fonctions suivantes
		alert("pas ok")
		$("body").css("visibility", "hidden");
	}
});


