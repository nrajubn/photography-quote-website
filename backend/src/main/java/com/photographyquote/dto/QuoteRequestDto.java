package com.photographyquote.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

import java.time.LocalDate;

public class QuoteRequestDto {

    @NotBlank
    private String clientName;

    @Email
    @NotBlank
    private String email;

    private String phone;

    @NotBlank
    private String selectedPackageName;

    private String eventType;
    private LocalDate weddingDate;
    private String location;

    @Min(1)
    private Integer numberOfEvents;

    @Min(1)
    private Integer coverageHours;

    private String serviceType;
    private boolean needsDrone;
    private boolean needsTeaserReel;
    private boolean needsFullCeremonyVideo;
    private boolean needsInterviews;
    private boolean needsConceptualScenes;
    private String budgetRange;
    private String specialNotes;

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
}
