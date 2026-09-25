
const message = [
    "Are you sure? 🥺",
    "Really sure? 😢",
    "Think again! 💭💕",
    "Are you absolutely sure? 🥹",
    "Please reconsider! 🥺👉👈",
    "Don't break my heart! 💔🥺",
    "Give me one chance! 🥹❤️",
    "I'll be really sad... 😭",
    "Please say yes! 🥺💕",
    "Pretty please? 🥹👉👈",
    "You can't say no forever! 😭❤️",
    "Just say yes! 🥰",
    "I know you want to say yes! 😏💕",
    "One last chance! 🥺",
    "Okay... but my heart is broken! 💔😭",
    "Pleaseeee! 🥹❤️",
    "I'll keep asking! 😭💕",
    "Come on, say yes! 🥰👉👈",
    "No is not an option! 😭❤️",
    "Okay fine... just kidding! SAY YES! 🥹💕"
];
let messageIndex = 0;
function handleNoClick () {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = message[messageIndex];
    messageIndex = (messageIndex + 1) % message.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.35}px`;

}

function handleYesClick () {
    window.location.href = "yes_page.html";
}