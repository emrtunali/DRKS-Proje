/*
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
*/

function saveThePrescription() {
    var patientName = document.getElementById('patientNameInput').value;
    var clinicName = document.getElementById('clinicName').value;
    var personelName = document.getElementById('personelName').value;
    var drugName = document.getElementById('drugListInput').value;
    var prescribedDose = document.getElementById('prescribedDose').value;

    var saveThePrescriptionSqlQuerySentence =
        "INSERT INTO prescriptions (prescriptionDate, patientId, clinicId, personelId, drugGroupId, drugPrescribedDose) " +
        "VALUES (" +
        "CURRENT_DATE, " +
        "(SELECT patientId FROM patients WHERE patientNameSurname = '" + patientName + "'), " +
        "(SELECT clinicId FROM clinics WHERE clinicName = (SELECT clinicName FROM personels WHERE personelNameSurname = '" + clinicName + "' )), " +
        "(SELECT personelId FROM personels WHERE personelNameSurname =  '" + personelName + "'), " +
        "(SELECT drugGroupId FROM drugGroups WHERE drugId = (SELECT drugName from drugs WHERE drugName = '" + drugName + "')), " +
        "'" + prescribedDose + "')";

}

function getDrugInfo() {
    var selectedDrug = document.getElementById('drugListInput').value;
    if (!selectedDrug) 
    {
        return;
    }
    
    var getDrugInfoSqlQuerySentence =
        "SELECT drugs.drugRecommendedDose, drugs.drugMaxDose " +
        "FROM drugs " +
        "WHERE drugs.drugName = '" + selectedDrug + "'";

}

function getPatientInfo() {
    var selectedPatientName = document.getElementById('patientNameInput').value;
    var oturumSahibiAdıGelecek;

    var getPatientInfoSqlQuerySentence =
        "SELECT patients.patientId, patients.patientNameSurname, patients.patientAge, patients.patientComplaint " +
        "FROM patients " +
        "JOIN meetings ON patients.patientId = meetings.patientId " +
        "WHERE meetings.personelId = (SELECT personelId FROM personels WHERE personelNameSurname = '" + oturumSahibiAdıGelecek + "')";

}