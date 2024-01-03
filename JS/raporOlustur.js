function info(infoText) {
    const infoElement = document.getElementById("info");
    const textElement = document.getElementById("text");
    infoElement.style.display = "block";
    textElement.textContent = infoText;
}

function addRecipe() {
    // Yeni reçete öğelerini oluştur
    const newRecipe = document.createElement("div");
    newRecipe.className = "recipe-item";
    newRecipe.innerHTML = `
        <h2>Reçete Tarihi: 01.01.2023</h2>
        <br>
        <p id="reportPrescriptionId"><strong>Reçete No:</strong> </p>
        <p id="reportPersonelId"><strong>Yazan Doktor:</strong> </p>
        <p id="reportPatientName"><strong>Hasta Adı:</strong> </p>
        <p id="reportPatientAge"><strong>Hasta Yaşı:</strong> </p>
        <p id="reportPatientComplaint"><strong>Hasta Şikayeti:</strong> <i onclick="info('Başım ağrıyor.')"
            class="fa-solid fa-circle-info"></i>
        </p>
        <p id="reportDrugName"><strong>İlaç Adı:</strong> </p>
        <p id="reportRecommendedDose"><strong>Önerilen Doz Aralığı:</strong> </p>
        <p id="reportPrescribedDose"><strong>Yazılan Doz Miktarı:</strong> </p>
        <br>
        <button class="report-button" onclick="complain()">Reçeteyi Bildir</button>
    `;

    // recipe-container'a ekleyin
    const recipeContainer = document.querySelector(".recipe-container");
    recipeContainer.appendChild(newRecipe);
}


