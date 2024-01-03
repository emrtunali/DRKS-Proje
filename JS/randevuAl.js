/*
function aileHekimiRandevu() {  
    var abc = document.getElementById('clinicListDiv');
    abc.style.display = 'none';
}

function hastaneRandevu() {
    var abc = document.getElementById('clinicListDiv');
    abc.style.display = 'block';
}
*/
function validateMeetingTime() {
    var allowedTimes = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"];
    var selectedTime = document.getElementById("meetingTime").value;

    if (!allowedTimes.includes(selectedTime)) {
        alert("Geçerli bir saat seçiniz.");
        document.getElementById("meetingTime").value = "";
    }
}

var meetingRecorder = 0;
var meetingDate = document.getElementById('meetingDate').value;
var meetingTime = document.getElementById('meetingTime').value;
var patientName = document.getElementById('patientName').value;
var clinicName = document.getElementById('clinicListInput').value;
var personelName = document.getElementById('personelListInput').value;
var patientComplaint = document.getElementById('patientComplaint').value;

function saveTheMeetingButton()
{
    var abc = document.getElementById('clinicListDiv');
    if(abc.style.display == 'none')
    {
        clinicName = "AİLE HEKİMİ";
    }
    var saveTheMeetingSqlQuerySentence =
        "INSERT INTO meetings (meeting_id, meeting_date, meeting_time, patient_id, clinic_id, personel_id) " +
        "VALUES (RND" +
        meetingRecorder + ", " +
        meetingDate +", " +
        meetingTime + ", " +
        "(SELECT patient_id FROM patients WHERE patient_name_surname = '" + patientName + "'), " +
        "(SELECT clinic_id FROM clinics WHERE clinic_name = '" + clinicName + "' )), " +
        "(SELECT personel_id FROM personels WHERE personel_name_surname =  '" + personelName + "')";
    

    // Hastaya complaint ekle ve meetingId ekle
    var combinedUpdateQuery =
    "UPDATE patients " +
    "SET patient_complaint = '" + patientComplaint + "', " +
    "meeting_id = '" + "RND" + meetingRecorder + "' " +
    "WHERE patient_name_surname = '" + patientName + "'";


    meetingRecorder++;
}