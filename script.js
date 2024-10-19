const roles = ["Web Developer", "UI/UX Designer", "WordPress Developer", "Custom Code Editor"];
const textElement = document.getElementById('text');
let currentRoleIndex = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeWriter(text) {
    for (let char of text) {
        textElement.textContent += char;
        await sleep(150); // Wait for 100 ms before typing the next character
    }
    await sleep(1500); // Pause before deleting
}

async function deleteWriter() {
    while (textElement.textContent.length > 0) {
        textElement.textContent = textElement.textContent.slice(0, -1);
        await sleep(80); // Wait for 50 ms before deleting the next character
    }
}

async function startAnimation() {
    while (true) {
        const currentRole = roles[currentRoleIndex];
        await typeWriter(currentRole);
        await deleteWriter();
        currentRoleIndex = (currentRoleIndex + 1) % roles.length; // Loop through roles
    }
}

startAnimation();
              
                    



