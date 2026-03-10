const textArray = [
    "Python Developer",
    "AWS Specialist",
    "Data Engineer"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    const typingElement = document.getElementById("typing");
    if (!typingElement) return;

    if (!isDeleting && charIndex <= textArray[index].length) {
        currentText = textArray[index].substring(0, charIndex++);
        typingElement.textContent = currentText;
        setTimeout(typeEffect, 100);
    }
    else if (isDeleting && charIndex >= 0) {
        currentText = textArray[index].substring(0, charIndex--);
        typingElement.textContent = currentText;
        setTimeout(typeEffect, 50);
    }
    else {
        isDeleting = !isDeleting;
        if (!isDeleting) index = (index + 1) % textArray.length;
        setTimeout(typeEffect, 1000);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);