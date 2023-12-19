// 1. Récupérer les éléments HTML des 2 boutons (left et right)
let previous = document.querySelector('.left');
let next = document.querySelector('.right');

// 2. Ajouter des écouteurs d'événement à ces 2 boutons
next.addEventListener('click', nextSlide);
previous.addEventListener('click', previousSlide);

// 3. Ecrire les fonctions de rappel (callback)
let slides = document.querySelectorAll('.slide');
let currentIndex = 0;

// for(let i = 0; i < slides.length; i++){
//     if(slides[i].className.includes('active')){
//         currentIndex = i
//     }
// }

slides.forEach((slide, i) => {
    if(slide.className.includes('active')){
        currentIndex = i
    }
})

function previousSlide(){
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

function nextSlide(){
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function showSlide(index) {
    slides.forEach((slide) => {
        slide.classList.add('hidden');
    });

    slides[index].classList.remove('hidden');
}