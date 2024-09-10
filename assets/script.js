const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélection des flèches
let arrow_left = document.querySelector("#banner .arrow_left")
let arrow_right = document.querySelector("#banner .arrow_right")

// Gestion du clic sur la flèche gauche (précédent)
arrow_left.addEventListener("click", () => {
	console.log("Flèche gauche cliquée")
})

// Gestion du clic sur la flèche droite (suivant)
arrow_right.addEventListener("click", () => {
	console.log("Flèche droite cliquée")
})