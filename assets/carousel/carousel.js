const carouselTrack = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;
const itemsPerSlide = 3; // Number of items per slide

function updateCarousel() {
    const width = carouselTrack.offsetWidth / itemsPerSlide;
    carouselTrack.style.transform = `translateX(-${currentIndex * width}px)`;
}

nextBtn.addEventListener('click', () => {
    const maxIndex = Math.ceil(items.length / itemsPerSlide) - 1;
    if (currentIndex < maxIndex) {
        currentIndex++;
        updateCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

window.addEventListener('resize', updateCarousel);

// Initial call to ensure correct sizing
updateCarousel();
