function aileHekimiRandevu() {
    const meetingInfo = document.getElementById('meetingPressMain');
    meetingInfo.innerHTML = `
        <div class="input2">
            <div class="input">
                <label for="meetingDate">Randevu Tarihi</label>
                <input class="presInput" type="date">
            </div>
            <div class="input">
                <label for="meetingNo">Randevu No</label>
                <input class="presInput" type="text" value="RND001" disabled>
            </div>
        </div>
        <div class="input2">
            <div class="input">
                <label for="meetingTime">Randevu Saati</label>
                <input class="presInput" type="time">
            </div>
            <div class="input">
                <label for="familyDoctors">Aile Hekimleri</label>
                <input class="presInput" list="familyDoctorOptions">
                <datalist id="familyDoctorOptions">
                    <option value="Aile Hekimi 1">
                    <option value="Aile Hekimi 2">
                    <option value="Aile Hekimi 3">
                    <option value="Aile Hekimi 4">
                    <option value="Aile Hekimi 5">
                    <option value="Aile Hekimi 6">
                </datalist>
            </div>
        </div>
    `;
}

function hastaneRandevu() {
    const meetingInfo = document.getElementById('meetingPressMain');
    meetingInfo.innerHTML = `
        <div class="input2">
            <div class="input">
                <label for="meetingDate">Randevu Tarihi</label>
                <input class="presInput" type="date">
            </div>
            <div class="input">
                <label for="meetingNo">Randevu No</label>
                <input class="presInput" type="text" value="RND001" disabled>
            </div>
        </div>
        <div class="input2">
            <div class="input">
                <label for="meetingTime">Randevu Saati</label>
                <input class="presInput" type="time">
            </div>
            <div class="input">
                <label for="clinics">Klinikler</label>
                <input class="presInput" list="clinicOptions">
                <datalist id="clinicOptions">
                    <option value="Klinik 1">
                    <option value="Klinik 2">
                    <option value="Klinik 3">
                    <option value="Klinik 4">
                    <option value="Klinik 5">
                    <option value="Klinik 6">
                </datalist>
            </div>
        </div>
        <div class="input2">
            <div class="input">
                <label for="doctors">Doktorlar</label>
                <input class="presInput" list="doctorOptions">
                <datalist id="doctorOptions">
                    <option value="Doktor 1">
                    <option value="Doktor 2">
                    <option value="Doktor 3">
                    <option value="Doktor 4">
                    <option value="Doktor 5">
                    <option value="Doktor 6">
                </datalist>
            </div>
        </div>
    `;
}