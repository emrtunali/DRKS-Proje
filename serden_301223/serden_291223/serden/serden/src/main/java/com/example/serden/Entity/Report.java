package com.example.serden.Entity;

// com.example.serden.Entity.Report
import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Reports")
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "report_id")
    private Long reportId;

    @Column(name = "report_date")
    private Date reportDate;

    @ManyToOne
    @JoinColumn(name = "prescription_id")
    private Prescription prescription;

    // Getter ve Setter metotları
    public Long getReportId() {
        return reportId;
    }

    public void setReportId(Long reportId) {
        this.reportId = reportId;
    }

    public Date getReportDate() {
        return reportDate;
    }

    public void setReportDate(Date reportDate) {
        this.reportDate = reportDate;
    }

    public Prescription getPrescription() {
        return prescription;
    }

    public void setPrescription(Prescription prescription) {
        this.prescription = prescription;
    }
}
