let clickCount = 0;

const noPhrases = [
    "No",
    "Are you sure?",
    "Really sure??",
    "Think again! 🥺",
    "Last chance...",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely sure?",
    "This could be a mistake!",
    "Have a heart! ❤️"
];

function handleNoClick() {
    const noBtn = document.getElementById('noButton');
    const yesBtn = document.getElementById('yesButton');
    
    // Change the text of the No button
    if (clickCount < noPhrases.length) {
        noBtn.innerHTML = noPhrases[clickCount];
    } else {
        noBtn.innerHTML = "Okay, I'll stop... just kidding, say YES!";
    }

    // Make the YES button grow bigger every time No is clicked!
    let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize + 10) + "px";
    yesBtn.style.padding = (currentSize / 2 + 5) + "px " + (currentSize + 10) + "px";

    clickCount++;
}

function showLove() {
    document.getElementById('proposal-section').classList.add('hidden');
    document.getElementById('success-section').classList.remove('hidden');
}
// Function to go from Success screen to Gift Selection
function goToGifts() {
    document.getElementById('success-section').classList.add('hidden');
    document.getElementById('gift-selection').classList.remove('hidden');
}

// Show Gallery
function showGallery() {
    document.getElementById('gift-selection').classList.add('hidden');
    document.getElementById('photo-gallery').classList.remove('hidden');
}

// Show Letter
function showLetter() {
    document.getElementById('gift-selection').classList.add('hidden');
    document.getElementById('letter-section').classList.remove('hidden');
}

// Back buttons
function backToGifts() {
    document.getElementById('photo-gallery').classList.add('hidden');
    document.getElementById('letter-section').classList.add('hidden');
    document.getElementById('gift-selection').classList.remove('hidden');
}