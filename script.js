// Array to store the colors entered by the user
let colors = [];
let moodHistory = [];

// Function to change the color based on user input
function changeColor() {
    const mood = document.getElementById('mood-input').value.toLowerCase();
    const interactiveArea = document.getElementById('interactive-area');

    let color = '';
    // Assigning color based on mood
    if (mood === 'happy') {
        color = '#ffeb3b'; // Yellow
    } else if (mood === 'sad') {
        color = '#2196f3'; // Blue
    } else if (mood === 'angry') {
        color = '#f44336'; // Red
    } else if (mood === 'calm') {
        color = '#4caf50'; // Green
    } else {
        color = '#9e9e9e'; // Default grey color
    }

    // Add color and mood to the arrays
    colors.push(color);
    moodHistory.push(mood);

    // Apply the color to the interactive area and gradually reveal the shape
    interactiveArea.style.backgroundColor = color;
    interactiveArea.style.opacity = 0.5 + (colors.length * 0.1); // Increase opacity as colors stack up

    // Once 3 colors are added, reveal the shape
    if (colors.length >= 3) {
        revealShape();
    }
}

// Function to reveal the shape
function revealShape() {
    const interactiveArea = document.getElementById('interactive-area');
    const shape = document.createElement('div');
    shape.style.width = '200px';
    shape.style.height = '200px';
    shape.style.backgroundColor = 'transparent';
    shape.style.borderRadius = '50%';
    shape.style.border = '5px solid black';
    shape.style.position = 'absolute';

    // Gradually fill the shape with the stacked colors
    for (let i = 0; i < colors.length; i++) {
        setTimeout(() => {
            shape.style.borderColor = colors[i];
            interactiveArea.appendChild(shape);
        }, i * 1000); // Add color one by one with a delay
    }
}
