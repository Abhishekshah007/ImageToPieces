const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');
const fileInput = document.getElementById('fileInput');

fileInput.addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
    const files = event.target.files;

    if (files.length > 0) {
        const selectedFile = files[0];
        const imageUrl = URL.createObjectURL(selectedFile);

        // Update the background image of all .box elements
        const boxElements = document.querySelectorAll('.box');
        boxElements.forEach((boxElement) => {
            boxElement.style.backgroundImage = `url('${imageUrl}')`;
        });
    }
}

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'));

async function createBoxes() {
    await fileInput; // Wait for file input to be ready
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
            boxesContainer.appendChild(box);
        }
    }
}

createBoxes();
