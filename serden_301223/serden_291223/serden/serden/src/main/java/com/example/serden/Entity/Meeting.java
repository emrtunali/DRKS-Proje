package com.example.serden.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Meetings")
public class Meeting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "meeting_id")
    private Long meetingId;

    // Diğer özellikler

    // Getter ve Setter metotları
    public Long getMeetingId() {
        return meetingId;
    }

    public void setMeetingId(Long meetingId) {
        this.meetingId = meetingId;
    }

    // Diğer setter ve getter metotları
}