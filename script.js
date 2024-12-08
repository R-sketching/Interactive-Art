// Mapping moods to colors based on your provided list
const moodColors = {
    calm: '#9F9F00',        // Calm - #9F9F00
    grounded: '#2B4A00',    // Grounded - #2B4A00
    anger: '#ED1C24',       // Anger - #ED1C24
    sadness: '#BE1E2D',     // Sadness - #BE1E2D
    excitement: '#FF8500',  // Excitement - #FF8500
    peace: '#00A79D',       // Peace - #00A79D
    confidence: '#343A82',  // Confidence - #343A82
    happiness: '#2DE23E',   // Happiness - #2DE23E
    love: '#FF4580',        // Love - #FF4580
    affection: '#FFBBD8',   // Affection - #FFBBD8
    serenity: '#86D5E0',    // Serenity - #86D5E0
    mystery: '#000F8E',     // Mystery - #000F8E
    nostalgia: '#873304',   // Nostalgia - #873304
    creativity: '#B4A0F9',  // Creativity - #B4A0F9
    joy: '#F9ED32',         // Joy - #F9ED32
    hope: '#FFD658',        // Hope - #FFD658
    relaxation: '#FFFBB7',  // Relaxation - #FFFBB7
    indifference: '#6D6E71',// Indifference - #6D6E71
    neutral: '#939598',     // Neutral - #939598
    fear: '#231F20',        // Fear - #231F20
    purity: '#FFFFFF',      // Purity - #FFFFFF
    motivation: '#A5D500',  // Motivation - #A5D500
    guilt: '#FFA4A4'        // Guilt - #FFA4A4
};

// Store the colors and moods input by the user
let colors = [];
let moodHistory = [];

// Function to change the color based on the input mood
function changeColor() {
    const mood = document.getElementById('mood-input').value.toLowerCase();
    const interactiveArea = document.getElementById('interactive-area');

    // Check if the mood exists in our moodColors object, else default to grey
    let color = moodColors[mood] || '#9e9e9e'; // Default to grey if mood is not in the list

    // Add color and mood to the arrays
    colors.push(color);
    moodHistory.push(mood);

    // Apply the color to the background and gradually reveal the shape
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

// Function to submit the moods and trigger color stacking
function submitMoods() {
    const interactiveArea = document.getElementById('interactive-area');
    
    // Make sure we have 3 moods selected before triggering the change
    if (colors.length >= 3) {
        colors.forEach((color, index) => {
            setTimeout(() => {
                interactiveArea.style.backgroundColor = color; // Gradually show the colors
            }, index * 1000);
        });
    }
}
