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

// Sélection des flèches, du conteneur des dots et de l'image
let arrow_left = document.querySelector("#banner .arrow_left")
let arrow_right = document.querySelector("#banner .arrow_right")
const dotsContainer = document.querySelector(".dots")
// Sélection de l'image à modifier
const bannerImg = document.querySelector(".banner-img")
// Sélection du tagLine si applicable
const tagline = document.querySelector("#banner p") 

let currentIndex = 0  // Index de la slide active


// Fonction pour mettre à jour l'image et la tagline de la bannière
function updateSlide(index) {
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}` // Chemin vers la nouvelle image
    tagline.innerHTML = slides[index].tagLine  // Mettre à jour la tagline si nécessaire
}

// Fonction pour créer les dots dynamiquement
function createDots() {
	slides.forEach((slides, index) => {
		const dot = document.createElement('div')
        dot.classList.add('dot')
        // Ajouter la classe 'dot_selected' au premier dot (pour la première slide)
        if (index === 0) {
			dot.classList.add('dot_selected')
        }
        dotsContainer.appendChild(dot)
    })
}

// Fonction pour mettre à jour les dots actifs
function updateDots(index) {
	const allDots = document.querySelectorAll('.dot')
    allDots.forEach((dot, i) => {
		if (i === index) {
			dot.classList.add('dot_selected')
        } else {
			dot.classList.remove('dot_selected')
        }
    })
}

// Gestion du clic sur la flèche gauche (précédent)
arrow_left.addEventListener("click", () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1
    /* utilisation opérateur ternaire 
     condition ? expression_si_vraie : expression_si_fausse;
     pourrait aussi être écit :  
     if (currentIndex > 0) {
    currentIndex = currentIndex - 1;
    } else {
    currentIndex = slides.length - 1;
    }*/
    console.log("Flèche gauche cliquée, index:", currentIndex)
	updateDots(currentIndex) // Mettre à jour les dots
	updateSlide(currentIndex)  // Mettre à jour l'image et le texte de la slide
})

// Gestion du clic sur la flèche droite (suivant)
arrow_right.addEventListener("click", () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0
    console.log("Flèche droite cliquée, index:", currentIndex)
	updateDots(currentIndex) // Mettre à jour les dots
	updateSlide(currentIndex)  // Mettre à jour l'image et le texte de la slide
})

// Appel de la fonction pour créer les dots lors du chargement de la page
createDots()