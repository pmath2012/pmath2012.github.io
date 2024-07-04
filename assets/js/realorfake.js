const realImages = ['jan_wyck_the_battle_of_the_boyne.jpg','leech_covent_garden.jpg','mainie_jellet_decoration.jpg','monet_single_sailboat.jpg','tree.jpg','meadow.jpg','van_gogh_starry_night.jpg','house.jpg','mrT_ssavaart.jpg']; // Add real images filenames
const fakeImages = ['illiad.png','abstract_1.png','cityskyline.png','art_nouveau.png', 'tree.png','col.png','flower_gate.png','starry_night_v2.png','sunflower_field.png','soldirs_field.png','alan_rickman.png', 'lady_1.png','lady_2.png','garbage.png']; // Add AI-generated images filenames
let usedImages = []; // Array to keep track of used images
let score = 0;
let rounds = 0;
const imageDescriptions = {
    'jan_wyck_the_battle_of_the_boyne.jpg': 'This is a painting by Jan Wyck depicting the Battle of the Boyne.',
    'leech_covent_garden.jpg': 'A depiction of Covent Garden by Leech.',
    'mainie_jellet_decoration.jpg': 'Decoration by Mainie Jellet.',
    'monet_single_sailboat.jpg': 'A painting by Monet showing a single sailboat.',
    'tree.jpg': 'A painting of a scene from a studio ghibli movie by a local artist.',
    'meadow.jpg': 'A serene meadow painting by a local artist.',
    'van_gogh_starry_night.jpg': 'The famous Starry Night by Vincent van Gogh.',
    'house.jpg': 'A traditional house painting by a local artist.',
    'mrT_ssavaart.jpg': 'A creative depiction of Mr. T. by Scott Christian Saava.',
    'cityskyline.png': 'Prompt : generate a watercolor painting. the scene is a sunset over a city skyline, there is a small fenced park with a lamp post just about to turn on. the material of the painting is cold pressed rough grain paper. use shades of alizarin crimson, pthalo blue and marigold yellow',
    'art_nouveau.png': 'AI-generated image in Art Nouveau style.',
    'tree.png': 'Pormpt : generate a painting with a flat matte finish. the scene is a field of flowers followed by a babbling brook. A tree canopy blocks most sunlight with tiny slivers of silver light peering through. the field of flowers have cool colors, an assortment of blues, whites and pinks. ',
    'col.png': 'Prompt : painting oil on canvas. there is an old woman, a middle aged woman and a young woman taking care of each other. the art style is chiaroscuro and the scene reflects the circle of life how parents are never to old to take care of their children and how children should learn to care for their parents',
    'flower_gate.png': 'AI-generated image of a flower gate.',
    'starry_night_v2.png': 'AI’s take on Starry Night.',
    'sunflower_field.png': 'Prompt : sunrise far in the distance, misty forests in the back sunlit sunflower fields stretching out into the horizon. A beaten pathway in the middle with two fir tree on either sides, one close and one further away. there is a stream close to the observer where a small duck is swimming happily',
    'soldirs_field.png': 'AI-generated soldiers field with prompt : a field with a few soldiers walking through the mud using neoclassicism and natural pigments of mostly vivid browns but muted blues',
    'alan_rickman.png': 'AI-generated portrait of Alan Rickman with prompt : portrait of Sir Alan Rickman in chiaroscuro style. the shadows are predominantly muted magentas and indigos and the highlights are cadmium reds and cadmium yellows. allow brush strokes to show and the face has a somber expression. add a small scribble resembling a signature but not legible',
    'lady_1.png': 'AI-generated image of a lady with prompt : generate a portrait of a lady in the high renaissance style. The painting background is very simple, just hints of a meadow. The expression on the woman\'s face is haunting.She is barely smiling, her eyes have no shine and her skin is pale and lustless.The painting has aged over time and the varnishing has yellowed over hundereds of years of aging',
    'lady_2.png': 'Another AI-generated image of a lady with prompt : generate a portrait of a lady in chiaroscuro style and use greens and purples for shadows',
    'garbage.png': 'generate a surreal style painting. the scene signifies the decay of society. buildings are tattered and overgrown, there is decaying garbage which some animals are eating. predominant colors are muted greys, dull greens and sad blues. ',
    'abstract_1.png': 'AI-generated abstract image. do an abstract piece in the color field style. the colors are a mix of muted reds, vibrant yellows and dull greens. there are hints of blacks and white. the colors are meant to represent the natural colors of the world but how pollution has contaminated the natural color pallete',
    'illiad.png': 'Prompt : depict a scene from the Illiad by Homer',
};

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
    document.getElementById('description').textContent = ''; // Clear previous description
    document.getElementById('nextButton').style.display = 'none'; // Hide the next button
}

function checkAnswer(isReal) {
    const image = document.getElementById('gameImage');
    const isCorrect = (image.dataset.isReal === 'true' && isReal) || (image.dataset.isReal === 'false' && !isReal);

    image.className = isCorrect ? 'game-image correct' : 'game-image incorrect'; // Apply glow effect

    const description = document.getElementById('description');
    const imageName = image.src.split('/').pop();
    description.textContent = imageDescriptions[imageName] || 'Description not available.';

    document.getElementById('nextButton').style.display = 'block'; // Show the next button

    if (isCorrect) {
        score++;
    }

    document.getElementById('score').innerText = score;
    rounds++;

    if (rounds >= 10) {
        showResults();
    }
    document.getElementById('nextButton').focus();
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
// Event listener for the next button to load the next image
document.getElementById('nextButton').addEventListener('click', () => {
    if (rounds < 10) {
        loadImage();
        document.getElementById('nextButton').style.display = 'none'; // Hide the next button
        const image = document.getElementById('gameImage');
        image.className = 'game-image'; // Reset glow effect
        window.scrollTo(0, 0, behavior = 'smooth')
    } else {
        showResults();
    }
});
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