document.getElementById('mood-form').addEventListener('submit', function(e) {
    e.preventDefault(); // No page reroad
    
    const mood = document.getElementById('mood').value; // chosen emotion
    const interactiveArea = document.getElementById('interactive-area');

// color history
let colors = [];
let moodHistory = [];

// color add on
function changeColor() {
    const mood = document.getElementById('mood-input').value.toLowerCase();
    const interactiveArea = document.getElementById('interactive-area');

    let color = '';
    if (mood === 'joy') {
        interactiveArea.style.backgroundColor = '#ffeb3b'; // Bright Yellow
    } else if (mood === 'happy') {
        interactiveArea.style.backgroundColor = '#ff9800'; // Orange
    } else if (mood === 'tired') {
        interactiveArea.style.backgroundColor = '#9e9e9e'; // Grey
    } else if (mood === 'stressed') {
        interactiveArea.style.backgroundColor = '#e91e63'; // Red
    } else if (mood === 'sad') {
        interactiveArea.style.backgroundColor = '#2196f3'; // Blue
    } else if (mood === 'irritating') {
        interactiveArea.style.backgroundColor = '#f44336'; // Plumb
    } else if (mood === 'hungry') {
        interactiveArea.style.backgroundColor = '#ff5722'; // Dark Orange
    } else if (mood === 'disgust') {
        interactiveArea.style.backgroundColor = '#4caf50'; // Green
    } else if (mood === 'angry') {
        interactiveArea.style.backgroundColor = '#f44336'; // Anger Red
    } else if (mood === 'calm') {
        color = '#4caf50'; // Green
    } else {
        color = '#9e9e9e'; // Basic
    }

    // color & emontions layer
    colors.push(color);
    moodHistory.push(mood);

    // three emotions to appear shape
    if (colors.length >= 3) {
        interactiveArea.style.backgroundColor = colors[colors.length - 1];
        revealShape();
    } else {
        interactiveArea.style.backgroundColor = color;
    }

    document.getElementById('mood-input').value = '';  // clear
}

// shape
function revealShape() {
    const interactiveArea = document.getElementById('interactive-area');
    const shape = document.createElement('div');
    shape.style.width = '200px';
    shape.style.height = '200px';
    shape.style.backgroundColor = 'transparent';
    shape.style.borderRadius = '50%';
    shape.style.border = '5px solid black';
    shape.style.position = 'absolute';

    // coloring
    for (let i = 0; i < colors.length; i++) {
        setTimeout(() => {
            shape.style.borderColor = colors[i];
            interactiveArea.appendChild(shape);
        }, i * 1000); // colors by order
    }
}

// reset
function resetCanvas() {
    colors = [];
    moodHistory = [];
    document.getElementById('interactive-area').style.backgroundColor = '#fff';
    const shapes = document.querySelectorAll('#interactive-area div');
    shapes.forEach(shape => shape.remove()); // removing every color
}
