package com.example.serden.Entity;
import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Prescriptions")
public class Prescription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "prescription_id")
    private Long prescriptionId;

    @Column(name = "prescription_date")
    private Date prescriptionDate;

    @ManyToOne
    @JoinColumn(name = "patient_id")
    private Patient patient;

    @ManyToOne
    @JoinColumn(name = "clinic_id")
    private Clinic clinic;

    @ManyToOne
    @JoinColumn(name = "personel_id")
    private Personel personel;

    @ManyToOne
    @JoinColumn(name = "drug_group_id")
    private DrugGroup drugGroup;

    @Column(name = "drug_prescribed_dose")
    private String drugPrescribedDose;

    // Getter ve Setter metotları
    public Long getPrescriptionId() {
        return prescriptionId;
    }

    public void setPrescriptionId(Long prescriptionId) {
        this.prescriptionId = prescriptionId;
    }

    public Date getPrescriptionDate() {
        return prescriptionDate;
    }

    public void setPrescriptionDate(Date prescriptionDate) {
        this.prescriptionDate = prescriptionDate;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public Clinic getClinic() {
        return clinic;
    }

    public void setClinic(Clinic clinic) {
        this.clinic = clinic;
    }

    public Personel getPersonel() {
        return personel;
    }

    public void setPersonel(Personel personel) {
        this.personel = personel;
    }

    public DrugGroup getDrugGroup() {
        return drugGroup;
    }

    public void setDrugGroup(DrugGroup drugGroup) {
        this.drugGroup = drugGroup;
    }

    public String getDrugPrescribedDose() {
        return drugPrescribedDose;
    }

    public void setDrugPrescribedDose(String drugPrescribedDose) {
        this.drugPrescribedDose = drugPrescribedDose;
    }
}
