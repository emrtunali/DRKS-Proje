function prescriptionQuery()
{
    var IsPatientIdNull = document.getElementById('patientId').value;
    var IsPrescriptionIdNull = document.getElementById('prescriptionId').value;

    if(IsPatientIdNull != null)
    {
        var prescriptionQueryWithPatientId =
            "SELECT prescriptions.prescription_id, prescriptions.prescription_date, personels.personel_name_surname, clinics.clinic_name, " +
            "patients.patient_name_surname, patients.patient_age, patients.patient_complaint, " +
            "drugs.drug_name, drugs.drug_recommended_dose, drugs.drug_max_dose, prescriptions.drug_prescribed_dose " +
            "FROM prescriptions " +
            "JOIN personels ON prescriptions.personel_id = personels.personel_id " +
            "JOIN clinics ON prescriptions.clinic_id = clinics.clinic_id " +
            "JOIN patients ON prescriptions.patient_id = patients.patient_id " +
            "JOIN drugs ON prescriptions.drug_group_id = drugs.drug_group_id " +
            "WHERE patients.patient_id = '" + IsPatientIdNull + "'";
    }
    else if(IsPrescriptionIdNull != null)
    {
        var prescriptionQueryWithPrescriptionId =
            "SELECT prescriptions.prescription_date, personels.personel_name_surname, clinics.clinic_name, " +
            "patients.patient_name_surname, patients.patient_age, patients.patient_id, patients.patient_complaint, " +
            "drugs.drug_name, drugs.drug_recommended_dose, drugs.drug_max_dose, prescriptions.drug_prescribed_dose " +
            "FROM prescriptions " +
            "JOIN personels ON prescriptions.personel_id = personels.personel_id " +
            "JOIN clinics ON prescriptions.clinic_id = clinics.clinic_id " +
            "JOIN patients ON prescriptions.patient_id = patients.patient_id " +
            "JOIN drugs ON prescriptions.drug_group_id = drugs.drug_group_id " +
            "WHERE prescriptions.prescription_id = '" + IsPrescriptionIdNull + "'";
    }
    else
    {
        alert("Hatalı İşlem Yaptınız!");
    }
}