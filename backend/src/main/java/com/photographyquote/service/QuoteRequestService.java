package com.photographyquote.service;

import com.photographyquote.dto.QuoteRequestDto;
import com.photographyquote.model.QuoteRequest;
import com.photographyquote.repository.QuoteRequestRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class QuoteRequestService {

    private final QuoteRequestRepository quoteRequestRepository;
    private final EmailNotificationService emailNotificationService;

    public QuoteRequestService(QuoteRequestRepository quoteRequestRepository, EmailNotificationService emailNotificationService) {
        this.quoteRequestRepository = quoteRequestRepository;
        this.emailNotificationService = emailNotificationService;
    }

    public QuoteRequest createQuoteRequest(QuoteRequestDto dto) {
        QuoteRequest quoteRequest = new QuoteRequest();
        quoteRequest.setClientName(dto.getClientName());
        quoteRequest.setEmail(dto.getEmail());
        quoteRequest.setPhone(dto.getPhone());
        quoteRequest.setEventCategory(dto.getEventCategory());
        quoteRequest.setWeddingDate(dto.getWeddingDate());
        quoteRequest.setLocation(dto.getLocation());
        quoteRequest.setNumberOfEvents(dto.getNumberOfEvents());
        quoteRequest.setSelectedIndianEvents(dto.getSelectedIndianEvents());
        quoteRequest.setCustomEventName(dto.getCustomEventName());
        quoteRequest.setEventNamesOrNotes(dto.getEventNamesOrNotes());
        quoteRequest.setCoverageHours(dto.getCoverageHours());
        quoteRequest.setIndoorOutdoorType(dto.getIndoorOutdoorType());
        quoteRequest.setGuestCount(dto.getGuestCount());
        quoteRequest.setSpecialTraditions(dto.getSpecialTraditions());
        quoteRequest.setServiceType(dto.getServiceType());
        quoteRequest.setPhotographyNeeded(dto.isPhotographyNeeded());
        quoteRequest.setPhotoDeliverableEstimate(dto.getPhotoDeliverableEstimate());
        quoteRequest.setSelectedPhotographyOptions(dto.getSelectedPhotographyOptions());
        quoteRequest.setSelectedVideoPackage(dto.getSelectedVideoPackage());
        quoteRequest.setLiveStreamingPreference(dto.getLiveStreamingPreference());
        quoteRequest.setSelectedDeliverables(dto.getSelectedDeliverables());
        quoteRequest.setFinalVideoStyle(dto.getFinalVideoStyle());
        quoteRequest.setSelectedVideoAddOns(dto.getSelectedVideoAddOns());
        quoteRequest.setSelectedGeneralAddOns(dto.getSelectedGeneralAddOns());
        quoteRequest.setReferenceVideoLink(dto.getReferenceVideoLink());
        quoteRequest.setBudgetRange(dto.getBudgetRange());
        quoteRequest.setSpecialNotes(dto.getSpecialNotes());
        quoteRequest.setCreatedAt(LocalDateTime.now());
        QuoteRequest savedQuoteRequest = quoteRequestRepository.save(quoteRequest);
        emailNotificationService.sendQuoteSubmittedEmails(savedQuoteRequest);
        return savedQuoteRequest;
    }

    public List<QuoteRequest> getAllQuoteRequests() {
        return quoteRequestRepository.findAll();
    }

    public QuoteRequest getQuoteRequestById(Long id) {
        return quoteRequestRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Quote request not found with id: " + id));
    }

    public void deleteQuoteRequest(Long id) {
        if (!quoteRequestRepository.existsById(id)) {
            throw new IllegalArgumentException("Quote request not found with id: " + id);
        }
        quoteRequestRepository.deleteById(id);
    }
}
