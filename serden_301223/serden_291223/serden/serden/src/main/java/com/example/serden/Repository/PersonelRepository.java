package com.example.serden.Repository;

import com.example.serden.Entity.Personel;
import org.springframework.data.jpa.repository.JpaRepository;

// PersonelRepository.java
public interface PersonelRepository extends JpaRepository<Personel, Long> {

    Personel findByPersonelNameSurname(String personelNameSurname);

    Personel findByPersonelNameSurnameAndPersonelPassword(String personelNameSurname, String personelPassword);
}
