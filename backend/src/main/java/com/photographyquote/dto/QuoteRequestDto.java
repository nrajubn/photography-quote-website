package com.photographyquote.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

import java.time.LocalDate;

public class QuoteRequestDto {

    @NotBlank(message = "Client name is required")
    private String clientName;

    @Email(message = "Please enter a valid email address")
    @NotBlank(message = "Email is required")
    private String email;

    @NotBlank(message = "Phone is required")
    private String phone;

    @NotBlank(message = "Event category is required")
    private String eventCategory;

    private LocalDate weddingDate;

    @NotBlank(message = "Location is required")
    private String location;

    @Min(value = 1, message = "Number of events is required")
    private Integer numberOfEvents;

    private String selectedIndianEvents;
    private String customEventName;
    private String eventNamesOrNotes;

    @Min(value = 1, message = "Coverage hours must be at least 1")
    private Integer coverageHours;

    private String indoorOutdoorType;
    private Integer guestCount;
    private String specialTraditions;

    @NotBlank(message = "Service type is required")
    private String serviceType;

    private boolean photographyNeeded;
    private String photoDeliverableEstimate;
    private String selectedPhotographyOptions;
    private String selectedVideoPackage;
    private String liveStreamingPreference;
    private String selectedDeliverables;
    private String finalVideoStyle;
    private String selectedVideoAddOns;
    private String selectedGeneralAddOns;
    private String referenceVideoLink;
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

    public String getEventCategory() {
        return eventCategory;
    }

    public void setEventCategory(String eventCategory) {
        this.eventCategory = eventCategory;
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

    public String getSelectedIndianEvents() {
        return selectedIndianEvents;
    }

    public void setSelectedIndianEvents(String selectedIndianEvents) {
        this.selectedIndianEvents = selectedIndianEvents;
    }

    public String getCustomEventName() {
        return customEventName;
    }

    public void setCustomEventName(String customEventName) {
        this.customEventName = customEventName;
    }

    public String getEventNamesOrNotes() {
        return eventNamesOrNotes;
    }

    public void setEventNamesOrNotes(String eventNamesOrNotes) {
        this.eventNamesOrNotes = eventNamesOrNotes;
    }

    public Integer getCoverageHours() {
        return coverageHours;
    }

    public void setCoverageHours(Integer coverageHours) {
        this.coverageHours = coverageHours;
    }

    public String getIndoorOutdoorType() {
        return indoorOutdoorType;
    }

    public void setIndoorOutdoorType(String indoorOutdoorType) {
        this.indoorOutdoorType = indoorOutdoorType;
    }

    public Integer getGuestCount() {
        return guestCount;
    }

    public void setGuestCount(Integer guestCount) {
        this.guestCount = guestCount;
    }

    public String getSpecialTraditions() {
        return specialTraditions;
    }

    public void setSpecialTraditions(String specialTraditions) {
        this.specialTraditions = specialTraditions;
    }

    public String getServiceType() {
        return serviceType;
    }

    public void setServiceType(String serviceType) {
        this.serviceType = serviceType;
    }

    public boolean isPhotographyNeeded() {
        return photographyNeeded;
    }

    public void setPhotographyNeeded(boolean photographyNeeded) {
        this.photographyNeeded = photographyNeeded;
    }

    public String getPhotoDeliverableEstimate() {
        return photoDeliverableEstimate;
    }

    public void setPhotoDeliverableEstimate(String photoDeliverableEstimate) {
        this.photoDeliverableEstimate = photoDeliverableEstimate;
    }

    public String getSelectedPhotographyOptions() {
        return selectedPhotographyOptions;
    }

    public void setSelectedPhotographyOptions(String selectedPhotographyOptions) {
        this.selectedPhotographyOptions = selectedPhotographyOptions;
    }

    public String getSelectedVideoPackage() {
        return selectedVideoPackage;
    }

    public void setSelectedVideoPackage(String selectedVideoPackage) {
        this.selectedVideoPackage = selectedVideoPackage;
    }

    public String getLiveStreamingPreference() {
        return liveStreamingPreference;
    }

    public void setLiveStreamingPreference(String liveStreamingPreference) {
        this.liveStreamingPreference = liveStreamingPreference;
    }

    public String getSelectedDeliverables() {
        return selectedDeliverables;
    }

    public void setSelectedDeliverables(String selectedDeliverables) {
        this.selectedDeliverables = selectedDeliverables;
    }

    public String getFinalVideoStyle() {
        return finalVideoStyle;
    }

    public void setFinalVideoStyle(String finalVideoStyle) {
        this.finalVideoStyle = finalVideoStyle;
    }

    public String getSelectedVideoAddOns() {
        return selectedVideoAddOns;
    }

    public void setSelectedVideoAddOns(String selectedVideoAddOns) {
        this.selectedVideoAddOns = selectedVideoAddOns;
    }

    public String getSelectedGeneralAddOns() {
        return selectedGeneralAddOns;
    }

    public void setSelectedGeneralAddOns(String selectedGeneralAddOns) {
        this.selectedGeneralAddOns = selectedGeneralAddOns;
    }

    public String getReferenceVideoLink() {
        return referenceVideoLink;
    }

    public void setReferenceVideoLink(String referenceVideoLink) {
        this.referenceVideoLink = referenceVideoLink;
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
