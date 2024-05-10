const realImages = ['jan_wyck_the_battle_of_the_boyne.jpg','leech_covent_garden.jpg','mainie_jellet_decoration.jpg','monet_single_sailboat.jpg','tree.jpg','meadow.jpg','van_gogh_starry_night.jpg','house.jpg','mrT_ssavaart.jpg']; // Add real images filenames
const fakeImages = ['art_nouveau.png', 'tree.png','col.png','flower_gate.png','starry_night_v2.png','sunflower_field.png','soldirs_field.png','alan_rickman.png', 'lady_1.png','lady_2.png','garbage.png']; // Add AI-generated images filenames
let usedImages = []; // Array to keep track of used images
let score = 0;
let rounds = 0;

function loadImage() {
    let folder, image, random, selectedImage;

    do {
        random = Math.random() > 0.5;
        if (random) {
            folder = 'static/images/real_paintings/';
            image = realImages[Math.floor(Math.random() * realImages.length)];
        } else {
            folder = 'static/images/ai_gen/';
            image = fakeImages[Math.floor(Math.random() * fakeImages.length)];
        }
        selectedImage = folder + image;
    } while (usedImages.includes(selectedImage)); // Check if image has already been used

    usedImages.push(selectedImage); // Add new image to the used images list
    const imgElement = document.getElementById('gameImage');
    imgElement.src = selectedImage;
    imgElement.dataset.isReal = random ? 'true' : 'false';
}

function checkAnswer(isReal) {
    const image = document.getElementById('gameImage');
    const isCorrect = (image.dataset.isReal === 'true' && isReal) || (image.dataset.isReal === 'false' && !isReal);
    
    image.className = isCorrect ? 'game-image correct' : 'game-image incorrect'; // Apply glow effect
    
    setTimeout(() => {
        image.className = 'game-image'; // Remove glow effect

        if (isCorrect) {
            score++;
        }

        document.getElementById('score').innerText = score;
        rounds++;

        if (rounds < 10) {
            loadImage();
        } else {
            showResults();
        }
    }, 1000);
}

function showResults() {
    const result = document.getElementById('result');
    result.innerHTML = `<h2>Your score: ${score} out of 10</h2>`;
    document.getElementById('scoreBoard').classList.add('highlight'); // Highlight the score
    document.getElementById('realButton').disabled = true; // Disable buttons
    document.getElementById('fakeButton').disabled = true;
    document.getElementById('restartButton').style.display = 'block';
}

document.getElementById('realButton').addEventListener('click', () => checkAnswer(true));
document.getElementById('fakeButton').addEventListener('click', () => checkAnswer(false));
document.getElementById('restartButton').addEventListener('click', restartGame);

function restartGame() {
    score = 0;
    rounds = 0;
    usedImages = [];
    document.getElementById('score').innerText = '0';
    document.getElementById('result').innerHTML = '';
    document.getElementById('scoreBoard').classList.remove('highlight'); // Remove highlight from the score
    document.getElementById('realButton').disabled = false; // Enable buttons
    document.getElementById('fakeButton').disabled = false;
    document.getElementById('restartButton').style.display = 'none';
    loadImage();
}

window.onload = loadImage;