const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const modal = document.getElementById('loveModal');
const bgMusic = document.getElementById('bgMusic');
const bgContainer = document.getElementById('bg-container');

// --- THE UNLIMITED JUMP LOGIC ---
function moveNoButton() {
    // Get the window width and height
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    
    // Get button dimensions
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Calculate random positions (ensuring it stays within screen bounds)
    const randomX = Math.random() * (containerWidth - btnWidth);
    const randomY = Math.random() * (containerHeight - btnHeight);

    // Apply the new position
    // 'fixed' position allows it to break out of the card and float anywhere
    noBtn.style.position = 'fixed'; 
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Trigger move on Mouse Over (Desktop)
noBtn.addEventListener('mouseover', moveNoButton);

// Trigger move on Touch (Mobile)
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); 
    moveNoButton();
});

// Trigger move on Click (Just in case)
noBtn.addEventListener('click', moveNoButton);


// --- YES BUTTON LOGIC ---
yesBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    
    // Try to play music
    bgMusic.volume = 0.3;
    bgMusic.play().catch(e => console.log("Audio play failed: ", e));

    // Trigger Confetti/Flowers
    createFlowerShower();
});

// Flower Shower Animation
function createFlowerShower() {
    const flowers = ['🌹', '🌸', '💐', '🌺', '💖', '💕'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const flower = document.createElement('div');
            flower.classList.add('flower-emoji');
            flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
            
            flower.style.left = Math.random() * 100 + 'vw';
            flower.style.animationDuration = Math.random() * 2 + 3 + 's';
            
            document.body.appendChild(flower);

            setTimeout(() => {
                flower.remove();
            }, 5000);
        }, i * 100);
    }
}

// Background Hearts
function createBackgroundHearts() {
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.classList.add('bg-heart');
        heart.innerHTML = '❤';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 5 + 5 + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        bgContainer.appendChild(heart);
    }
}

// Initialize background
createBackgroundHearts();