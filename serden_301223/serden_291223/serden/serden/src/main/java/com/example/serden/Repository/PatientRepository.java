package com.example.serden.Repository;

import com.example.serden.Entity.Patient;
import com.example.serden.Entity.Personel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient, Long> {
    Patient findByPatientNameSurname(String patientNameSurname);
    Patient findByPatientNameSurnameAndPatientPassword(String patientNameSurname, String patientPassword);
}