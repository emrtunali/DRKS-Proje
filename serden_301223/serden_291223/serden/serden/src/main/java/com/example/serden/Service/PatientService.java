package com.example.serden.Service;

import com.example.serden.Entity.Patient;
import com.example.serden.Entity.Personel;
import com.example.serden.Repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    public Patient login2(String patientNameSurname, String patientPassword) {
        return patientRepository.findByPatientNameSurnameAndPatientPassword(patientNameSurname, patientPassword);
    }
    public Patient findByPatientNameSurname(String patientNameSurname) {
        return patientRepository.findByPatientNameSurname(patientNameSurname);
    }
}
