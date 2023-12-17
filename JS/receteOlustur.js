var sayac=1;

function addDrug(){

    if(sayac>2)
    {
        alert("Daha fazla ilaç eklenemez.");
        const addButton = document.getElementById("addDrug");
        addButton.style="background-color: darkred; cursor: default;";
    }
    else
    {
        const newHr = document.createElement("hr");
        // Yeni ilaç öğelerini oluştur
        const newDrug = document.createElement("div");
        newDrug.className = "presMainDrug";
        newDrug.innerHTML = `
            <div class="input2">
                <div class="input">
                    <label for="">İlaç Adı</label>
                    <input class="presInput" list="ilac">
                    <datalist id="ilac">
                        <option value="Parol">
                        <option value="Arveles">
                        <option value="Aspirin">
                        <option value="Lustral">
                        <option value="Panadol">
                        <option value="Fermara">
                    </datalist>
                </div>
                <div class="input">
                    <label for="">Önerilen Doz</label>
                    <input class="presInput" type="text" disabled>
                </div>
            </div>
            <div class="input2">
                <div class="input">
                    <label for="">Yazılacak Doz</label>
                    <input class="presInput" type="text">
                </div>
                <div class="input">
                    <label for="">Maksimum Doz</label>
                    <input class="presInput" type="text" disabled>
                </div>
            </div>
        `;
        // Drug-container'a ekleyin
        const DrugContainer = document.querySelector(".presInfoDrug");
        DrugContainer.appendChild(newHr);
        DrugContainer.appendChild(newDrug);
        sayac++;
    }
}