package com.example.serden.Service;

import com.example.serden.Entity.Personel;
import com.example.serden.Repository.PersonelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class PersonelService {

    @Autowired
    private PersonelRepository personelRepository;

    public Personel login(String personelNameSurname, String personelPassword) {
        return personelRepository.findByPersonelNameSurnameAndPersonelPassword(personelNameSurname, personelPassword);
    }

    public Personel findByPersonelNameSurname(String personelNameSurname) {
        return personelRepository.findByPersonelNameSurname(personelNameSurname);
    }
}
