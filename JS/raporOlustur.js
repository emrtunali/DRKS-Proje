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
        <p><strong>Reçete No:</strong> RCT001</p>
        <p><strong>Yazan Doktor:</strong> Dr. Mehmet Yılmaz</p>
        <p><strong>Hasta Adı:</strong> Ayşe Demir</p>
        <p><strong>Hasta Yaşı:</strong> 35</p>
        <p><strong>Hasta Şikayeti:</strong> <i onclick="info('Başım ağrıyor.')"
            class="fa-solid fa-circle-info"></i>
        </p>
        <p><strong>İlaç Adı:</strong> Parol</p>
        <p><strong>Önerilen Doz Aralığı:</strong> Günde 1-3 kez</p>
        <p><strong>Yazılan Doz Miktarı:</strong> 2</p>
        <br>
        <button class="report-button" onclick="complain()">Reçeteyi Bildir</button>
    `;

    // recipe-container'a ekleyin
    const recipeContainer = document.querySelector(".recipe-container");
    recipeContainer.appendChild(newRecipe);
}