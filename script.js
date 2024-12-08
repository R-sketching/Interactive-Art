// Colors and corresponding moods
const moodColors = {
    happy: '#FFEB3B',       // Bright Yellow
    sad: '#2196F3',         // Blue
    angry: '#F44336',       // Red
    calm: '#4CAF50',        // Green
    excited: '#FF9800',     // Orange
    surprised: '#9C27B0',   // Purple
    bored: '#9E9E9E',       // Gray
    stressed: '#E91E63',    // Pink
    confused: '#795548',    // Brown
    motivated: '#8BC34A',   // Light Green
    relaxed: '#607D8B',     // Blue-Green
    lonely: '#3F51B5',      // Dark Blue
    hopeful: '#00BCD4',     // Cyan
    grateful: '#FFC107',    // Amber
    fearful: '#FF5722',     // Deep Orange
    proud: '#FF4081',       // Light Pink
    guilty: '#FF5722',      // Orange-Red
    nostalgic: '#FF9800',   // Golden Orange
    embarrassed: '#F44336', // Bright Red
    determined: '#4CAF50',  // Vibrant Green
    curious: '#8BC34A',     // Lime Green
};

// Store the colors and moods input by the user
let colors = [];
let moodHistory = [];

// Function to change color based on the input mood
function changeColor() {
    const mood = document.getElementById('mood-input').value.toLowerCase();
    const interactiveArea = document.getElementById('interactive-area');

    // If the mood exists in our moodColors object, use the corresponding color
    let color = moodColors[mood] || '#9e9e9e'; // Default to grey if mood is not in the list

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

// Function to gradually reveal the shape
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
