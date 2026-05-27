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

    public QuoteRequestService(QuoteRequestRepository quoteRequestRepository) {
        this.quoteRequestRepository = quoteRequestRepository;
    }

    public QuoteRequest createQuoteRequest(QuoteRequestDto dto) {
        QuoteRequest quoteRequest = new QuoteRequest();
        quoteRequest.setClientName(dto.getClientName());
        quoteRequest.setEmail(dto.getEmail());
        quoteRequest.setPhone(dto.getPhone());
        quoteRequest.setSelectedPackageName(dto.getSelectedPackageName());
        quoteRequest.setEventType(dto.getEventType());
        quoteRequest.setWeddingDate(dto.getWeddingDate());
        quoteRequest.setLocation(dto.getLocation());
        quoteRequest.setNumberOfEvents(dto.getNumberOfEvents());
        quoteRequest.setCoverageHours(dto.getCoverageHours());
        quoteRequest.setServiceType(dto.getServiceType());
        quoteRequest.setNeedsDrone(dto.isNeedsDrone());
        quoteRequest.setNeedsTeaserReel(dto.isNeedsTeaserReel());
        quoteRequest.setNeedsFullCeremonyVideo(dto.isNeedsFullCeremonyVideo());
        quoteRequest.setNeedsInterviews(dto.isNeedsInterviews());
        quoteRequest.setNeedsConceptualScenes(dto.isNeedsConceptualScenes());
        quoteRequest.setBudgetRange(dto.getBudgetRange());
        quoteRequest.setSpecialNotes(dto.getSpecialNotes());
        quoteRequest.setCreatedAt(LocalDateTime.now());
        return quoteRequestRepository.save(quoteRequest);
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
