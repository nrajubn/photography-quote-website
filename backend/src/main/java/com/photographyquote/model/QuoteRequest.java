package com.photographyquote.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
public class QuoteRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String clientName;
    private String email;
    private String phone;
    private String selectedPackageName;
    private String eventType;
    private LocalDate weddingDate;
    private String location;
    private Integer numberOfEvents;
    private Integer coverageHours;
    private String serviceType;
    private boolean needsDrone;
    private boolean needsTeaserReel;
    private boolean needsFullCeremonyVideo;
    private boolean needsInterviews;
    private boolean needsConceptualScenes;
    private String budgetRange;
    private String specialNotes;
    private LocalDateTime createdAt;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getSelectedPackageName() {
        return selectedPackageName;
    }

    public void setSelectedPackageName(String selectedPackageName) {
        this.selectedPackageName = selectedPackageName;
    }

    public String getEventType() {
        return eventType;
    }

    public void setEventType(String eventType) {
        this.eventType = eventType;
    }

    public LocalDate getWeddingDate() {
        return weddingDate;
    }

    public void setWeddingDate(LocalDate weddingDate) {
        this.weddingDate = weddingDate;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Integer getNumberOfEvents() {
        return numberOfEvents;
    }

    public void setNumberOfEvents(Integer numberOfEvents) {
        this.numberOfEvents = numberOfEvents;
    }

    public Integer getCoverageHours() {
        return coverageHours;
    }

    public void setCoverageHours(Integer coverageHours) {
        this.coverageHours = coverageHours;
    }

    public String getServiceType() {
        return serviceType;
    }

    public void setServiceType(String serviceType) {
        this.serviceType = serviceType;
    }

    public boolean isNeedsDrone() {
        return needsDrone;
    }

    public void setNeedsDrone(boolean needsDrone) {
        this.needsDrone = needsDrone;
    }

    public boolean isNeedsTeaserReel() {
        return needsTeaserReel;
    }

    public void setNeedsTeaserReel(boolean needsTeaserReel) {
        this.needsTeaserReel = needsTeaserReel;
    }

    public boolean isNeedsFullCeremonyVideo() {
        return needsFullCeremonyVideo;
    }

    public void setNeedsFullCeremonyVideo(boolean needsFullCeremonyVideo) {
        this.needsFullCeremonyVideo = needsFullCeremonyVideo;
    }

    public boolean isNeedsInterviews() {
        return needsInterviews;
    }

    public void setNeedsInterviews(boolean needsInterviews) {
        this.needsInterviews = needsInterviews;
    }

    public boolean isNeedsConceptualScenes() {
        return needsConceptualScenes;
    }

    public void setNeedsConceptualScenes(boolean needsConceptualScenes) {
        this.needsConceptualScenes = needsConceptualScenes;
    }

    public String getBudgetRange() {
        return budgetRange;
    }

    public void setBudgetRange(String budgetRange) {
        this.budgetRange = budgetRange;
    }

    public String getSpecialNotes() {
        return specialNotes;
    }

    public void setSpecialNotes(String specialNotes) {
        this.specialNotes = specialNotes;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
