// You can add more languages to this array as needed
const languages = ["JavaScript", "HTML", "CSS", "Python"];

// Get the carousel element and the slider element
const carousel = document.querySelector(".carousel");
const slider = document.querySelector(".slider");

// Function to create the carousel and add the languages
function createCarousel() {
    let carouselContent = "";
    // Duplicate the languages array to create a seamless loop
    const loopedLanguages = [...languages, ...languages, ...languages, ...languages];
    for (const language of loopedLanguages) {
        carouselContent += `<button class="language">${language}</button>`;
    }
    slider.innerHTML = carouselContent;
}

// Create the initial carousel
createCarousel();
