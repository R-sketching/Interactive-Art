document.getElementById('mood-form').addEventListener('submit', function(e) {
    e.preventDefault(); // No page reroad
    
    const mood = document.getElementById('mood').value; // chosen emotion
    const interactiveArea = document.getElementById('interactive-area');

    // Emotions by colors
    if (mood === 'joy') {
        interactiveArea.style.backgroundColor = '#ffeb3b'; // Bright Yellow
        interactiveArea.style.borderRadius = '50%'; // Round Shape
    } else if (mood === 'happiness') {
        interactiveArea.style.backgroundColor = '#ff9800'; // Orange
        interactiveArea.style.borderRadius = '50%';
    } else if (mood === 'tiredness') {
        interactiveArea.style.backgroundColor = '#9e9e9e'; // Grey
        interactiveArea.style.borderRadius = '20%';
    } else if (mood === 'stress') {
        interactiveArea.style.backgroundColor = '#e91e63'; // Red
        interactiveArea.style.borderRadius = '10%';
    } else if (mood === 'sadness') {
        interactiveArea.style.backgroundColor = '#2196f3'; // Blue
        interactiveArea.style.borderRadius = '0%'; // Ractangluer Shape
    } else if (mood === 'irritation') {
        interactiveArea.style.backgroundColor = '#f44336'; // Plumb
        interactiveArea.style.borderRadius = '30%';
    } else if (mood === 'hunger') {
        interactiveArea.style.backgroundColor = '#ff5722'; // Dark Orange
        interactiveArea.style.borderRadius = '50%';
    } else if (mood === 'disgust') {
        interactiveArea.style.backgroundColor = '#4caf50'; // Green
        interactiveArea.style.borderRadius = '40%';
    } else if (mood === 'anger') {
        interactiveArea.style.backgroundColor = '#f44336'; // Anger Red
        interactiveArea.style.borderRadius = '50%';
    } else {
        // Other Emotions
        interactiveArea.style.backgroundColor = '#9e9e9e'; // Basic
        interactiveArea.style.borderRadius = '15%';
    }
});
