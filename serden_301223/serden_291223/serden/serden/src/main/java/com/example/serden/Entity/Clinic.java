package com.example.serden.Entity;
import jakarta.persistence.*;

@Entity
@Table(name = "Clinics")
public class Clinic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "clinic_id")
    private String clinicId;

    @Column(name = "clinic_name")
    private String clinicName;

    // Getter ve Setter metotları

    public String getClinicId() {
        return clinicId;
    }

    public void setClinicId(String clinicId) {
        this.clinicId = clinicId;
    }

    public String getClinicName() {
        return clinicName;
    }

    public void setClinicName(String clinicName) {
        this.clinicName = clinicName;
    }
}
