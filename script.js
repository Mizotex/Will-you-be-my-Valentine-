const messages = [
    "Estas segura?",
    "Segura Segurisima?",
    "Sin remordimientos?",
    "PORQUE NO",
    "mi corazonzito de pollo no aguantara",
    "si sigues diciendo no estare triste...",
    "Muy muy triste...",
    "pero muy muy muy muy troste...",
    "ya po dejo de insistir...",
    "mentiritas ACEPTAAAAAA ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}