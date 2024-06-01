const exerciseButtons = document.querySelectorAll('.exercise-button');
const exerciseDescriptions = document.querySelectorAll('.exercise-description');

exerciseButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        exerciseDescriptions[index].style.display = 'block';
    });
});