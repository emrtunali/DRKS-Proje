package com.example.serden.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Drugs")
public class Drug {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "drug_id")
    private String drugId;

    @Column(name = "drug_name")
    private String drugName;

    @Column(name = "drug_use_min_age")
    private int drugUseMinAge;

    @Column(name = "drug_recommended_dose")
    private String drugRecommendedDose;

    @Column(name = "drug_max_dose")
    private String drugMaxDose;

    @Column(name = "drug_information")
    private String drugInformation;

    // Getter ve Setter metotları
    public String getDrugId() {
        return drugId;
    }

    public void setDrugId(String drugId) {
        this.drugId = drugId;
    }

    public String getDrugName() {
        return drugName;
    }

    public void setDrugName(String drugName) {
        this.drugName = drugName;
    }

    public int getDrugUseMinAge() {
        return drugUseMinAge;
    }

    public void setDrugUseMinAge(int drugUseMinAge) {
        this.drugUseMinAge = drugUseMinAge;
    }

    public String getDrugRecommendedDose() {
        return drugRecommendedDose;
    }

    public void setDrugRecommendedDose(String drugRecommendedDose) {
        this.drugRecommendedDose = drugRecommendedDose;
    }

    public String getDrugMaxDose() {
        return drugMaxDose;
    }

    public void setDrugMaxDose(String drugMaxDose) {
        this.drugMaxDose = drugMaxDose;
    }

    public String getDrugInformation() {
        return drugInformation;
    }

    public void setDrugInformation(String drugInformation) {
        this.drugInformation = drugInformation;
    }
}
