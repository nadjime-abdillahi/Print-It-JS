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

let indexSlide = 0

const arrowLeft = document.getElementById('arrow_left')
const arrowRight = document.getElementById('arrow_right')
const dots = document.querySelector('.dots')
const imgBanner = document.querySelector('.banner-img')
const tagLine = document.getElementById('tag-line')

// fonction pour la fleche gauche //

arrowLeft.addEventListener('click', () => {

	// condition pour faire défiler vers la gauche //
	if (indexSlide === 0) {
		indexSlide = slides.length - 1
	} else {
		indexSlide = indexSlide - 1
	}

	// on affiche le resultat via la console //
	console.log("click en direction de la gauche - indexSlide:", indexSlide)
	updateImageAndTagLine()
	updateDots()
})

// fonction pour la fleche droite //

arrowRight.addEventListener('click', () => {

	// condition pour faire défiler vers la droite //
	if (indexSlide === slides.length - 1) {
		indexSlide = 0
	} else {
		indexSlide = indexSlide + 1
	}

	// on affiche le resultat vers la droite //
	console.log("click sur fleche droite - indexSlide:", indexSlide)
	updateImageAndTagLine()
	updateDots()
})

// variable pour mettre a jour les elements qui defile //

const updateImageAndTagLine = () => {

	// mettre a jour  les images du projet //
	imgBanner.src = `./assets/images/slideshow/${slides[indexSlide].image}`

	// mettre a jour les tag sur les images quand les images défilent //
	tagLine.innerHTML = slides[indexSlide].tagLine
}


// mettre a jour les dots //
function updateDots(){
	// on crée un constante pour selectionner toutes les dotes //
	const allDots = document.querySelectorAll(".dot")
	// on crée une constante pour selectionner la dote par defaut //
	const previousSelected = document.querySelector(".dot_selected")
	// on crée une constante pour récupérer chaque éléments dans la div du .dot//
	const nextSelected = allDots[indexSlide]
	// on va supprimer le dot précédent //
	previousSelected.classList.remove("dot_selected")
	// on va ajouter le dot suivant//
	nextSelected.classList.add("dot_selected")
}

function createDots(){
	//nous allon créer et ajouter les points dots //
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div")
		dot.classList.add("dot")
		if(indexSlide == i){
			dot.classList.add("dot_selected")
		}
		dots.appendChild(dot)
	}
}

// afficher le resultat //
createDots()