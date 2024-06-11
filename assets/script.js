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

var selectedIndex = 0;

// On affiche les points selon la slide seléctionée
function draw_carousel_dots(){
	var dots_container = document.querySelector("#banner .dots");
	dots_container.innerHTML = "";
	for(var i=0; i < slides.length; i++){
		var dotDiv = document.createElement("div");
		dotDiv.classList.add("dot");
		if(i == selectedIndex) dotDiv.classList.add("dot_selected");
		dots_container.appendChild(dotDiv);
	}
}

// On met à jour le carousel selon la slide seléctionnée
function update_carousel(selectedIndex){
	var banner_img = document.querySelector("#banner .banner-img");
	banner_img.src = "./assets/images/slideshow/" + slides[selectedIndex]["image"];
	var banner_paragraphe = document.querySelector("#banner p");
	banner_paragraphe.innerHTML = slides[selectedIndex]["tagLine"]
	draw_carousel_dots();
}

// On gère le clic de la flèche gauche
var arrow_left = document.querySelector("#banner .arrow_left");
arrow_left.onclick = function(){
	selectedIndex--;
	if(selectedIndex < 0) selectedIndex = slides.length - 1
	update_carousel(selectedIndex);
};

// On gère le clique de la flèche droite
var arrow_right = document.querySelector("#banner .arrow_right");
arrow_right.onclick = function(){
	selectedIndex++;
	if(selectedIndex > (slides.length - 1)) selectedIndex = 0;
	update_carousel(selectedIndex);
};

// On dessine les points au premier affichage du carousel
draw_carousel_dots();