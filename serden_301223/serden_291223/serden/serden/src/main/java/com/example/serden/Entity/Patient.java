package com.example.serden.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Patients")
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "patient_id")
    private String patientId;

    @Column(name = "patient_name_surname")
    private String patientNameSurname;

    @Column(name = "patient_age")
    private int patientAge;

    @Column(name = "patient_password")
    private String patientPassword;

    @Column(name = "patient_neighborhood_name")
    private String patientNeighborhoodName;

    @ManyToOne
    @JoinColumn(name = "meeting_id")
    private Meeting meeting;

    @ManyToOne
    @JoinColumn(name = "prescription_id")
    private Prescription prescription;

    @Column(name = "patient_complaint")
    private String patientComplaint;

    // Getter ve Setter metotları
    public String getPatientId() {
        return patientId;
    }

    public void setPatientId(String patientId) {
        this.patientId = patientId;
    }

    public String getPatientNameSurname() {
        return patientNameSurname;
    }

    public void setPatientNameSurname(String patientNameSurname) {
        this.patientNameSurname = patientNameSurname;
    }

    public int getPatientAge() {
        return patientAge;
    }

    public void setPatientAge(int patientAge) {
        this.patientAge = patientAge;
    }

    public String getPatientPassword() {
        return patientPassword;
    }

    public void setPatientPassword(String patientPassword) {
        this.patientPassword = patientPassword;
    }

    public String getPatientNeighborhoodName() {
        return patientNeighborhoodName;
    }

    public void setPatientNeighborhoodName(String patientNeighborhoodName) {
        this.patientNeighborhoodName = patientNeighborhoodName;
    }

    public Meeting getMeeting() {
        return meeting;
    }

    public void setMeeting(Meeting meeting) {
        this.meeting = meeting;
    }

    public Prescription getPrescription() {
        return prescription;
    }

    public void setPrescription(Prescription prescription) {
        this.prescription = prescription;
    }

    public String getPatientComplaint() {
        return patientComplaint;
    }

    public void setPatientComplaint(String patientComplaint) {
        this.patientComplaint = patientComplaint;
    }
}
