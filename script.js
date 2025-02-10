const messages = [
    "Sure ka?",
    "Last na yan??",
    "Baka nagkamali ka lang?",
    "Wrong click siguro",
    "Pag isipan mo muna",
    "OK lang....",
    "Okay lang ako",
    "SURE KA NA TALAGA",
    "OK OK",
    "Sige na yes ka na"
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