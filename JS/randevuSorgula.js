function meetingQuery()
{
    var IsPatientIdNull = document.getElementById('patientId').value;
    var IsMeetingIdNull = document.getElementById('meetingId').value;

    if(IsPatientIdNull != null)
    {
        var meetingQueryWithPatientId =
            "SELECT meetings.meeting_id, meetings.meeting_date, meetings.meeting_time, " +
            "clinics.clinic_name, " +
            "personels.personel_name_surname, " +
            "patients.patient_name_surname, patients.patient_age, patients.patient_complaint " +
            "FROM meetings " +
            "JOIN clinics ON meetings.clinic_id = clinics.clinic_id " +
            "JOIN personels ON meetings.personel_id = personels.personel_id " +
            "JOIN patients ON meetings.patient_id = patients.patient_id " +
            "WHERE patients.patient_id = '" + IsPatientIdNull + "'";
    }
    else if(IsMeetingIdNull != null)
    {
        var meetingQueryWithMeetingId =
            "SELECT meetings.meeting_date, meetings.meeting_time, " +
            "clinics.clinic_name, " +
            "personels.personel_name_surname, " +
            "patients.patient_name_surname, patients.patient_id, patients.patient_age, patients.patient_complaint " +
            "FROM meetings " +
            "JOIN clinics ON meetings.clinic_id = clinics.clinic_id " +
            "JOIN personels ON meetings.personel_id = personels.personel_id " +
            "JOIN patients ON meetings.patient_id = patients.patient_id " +
            "WHERE meetings.meeting_id = '" + IsMeetingIdNull + "'";
    }
    else
    {
        alert("Hatalı İşlem Yaptınız!");
    }
}