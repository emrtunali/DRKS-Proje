package com.example.serden.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "DrugGroups")
public class DrugGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "drug_group_id")
    private String drugGroupId;

    @Column(name = "drug_group_name")
    private String drugGroupName;

    @ManyToOne
    @JoinColumn(name = "drug_id")
    private Drug drug;

    // Getter ve Setter metotları
    public String getDrugGroupId() {
        return drugGroupId;
    }

    public void setDrugGroupId(String drugGroupId) {
        this.drugGroupId = drugGroupId;
    }

    public String getDrugGroupName() {
        return drugGroupName;
    }

    public void setDrugGroupName(String drugGroupName) {
        this.drugGroupName = drugGroupName;
    }

    public Drug getDrug() {
        return drug;
    }

    public void setDrug(Drug drug) {
        this.drug = drug;
    }
}
