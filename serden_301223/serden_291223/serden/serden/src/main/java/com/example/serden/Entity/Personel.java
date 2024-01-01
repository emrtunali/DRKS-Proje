package com.example.serden.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Personels")
public class Personel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "personel_id")
    private Long personelId;

    @Column(name = "personel_name_surname")
    private String personelNameSurname;

    @Column(name = "personel_password")
    private String personelPassword;
    @Column(name = "personel_rank")
    private String personelRank;
    @ManyToOne
    @JoinColumn(name = "clinic_id", referencedColumnName = "clinic_id")
    private Clinic clinic; // clinicId yerine clinic olarak değiştirildi

    // ...

    public Clinic getClinic() {
        return clinic;
    }

    public void setClinic(Clinic clinic) {
        this.clinic = clinic;
    }
    public String getPersonelRank(){return personelRank;}
    public void setPersonelRank(String personelRank){this.personelRank=personelRank;}

    // Getter ve Setter metotları

    public Long getPersonelId() {
        return personelId;
    }

    public void setPersonelId(Long personelId) {
        this.personelId = personelId;
    }

    public String getPersonelNameSurname() {
        return personelNameSurname;
    }

    public void setPersonelNameSurname(String personelNameSurname) {
        this.personelNameSurname = personelNameSurname;
    }

    public String getPersonelPassword() {
        return personelPassword;
    }

    public void setPersonelPassword(String personelPassword) {
        this.personelPassword = personelPassword;
    }
}