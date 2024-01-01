function info(infoText) {
    const infoElement = document.getElementById("info");
    const textElement = document.getElementById("text");
    infoElement.style.display = "block";
    textElement.textContent = infoText;
}