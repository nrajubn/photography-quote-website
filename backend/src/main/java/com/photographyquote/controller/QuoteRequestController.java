package com.photographyquote.controller;

import com.photographyquote.dto.QuoteRequestDto;
import com.photographyquote.model.QuoteRequest;
import com.photographyquote.service.QuoteRequestService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/quotes")
public class QuoteRequestController {

    private final QuoteRequestService quoteRequestService;

    public QuoteRequestController(QuoteRequestService quoteRequestService) {
        this.quoteRequestService = quoteRequestService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public QuoteRequest createQuoteRequest(@Valid @RequestBody QuoteRequestDto quoteRequestDto) {
        return quoteRequestService.createQuoteRequest(quoteRequestDto);
    }

    @GetMapping
    public List<QuoteRequest> getAllQuoteRequests() {
        return quoteRequestService.getAllQuoteRequests();
    }

    @GetMapping("/{id}")
    public QuoteRequest getQuoteRequestById(@PathVariable Long id) {
        return quoteRequestService.getQuoteRequestById(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteQuoteRequest(@PathVariable Long id) {
        quoteRequestService.deleteQuoteRequest(id);
    }
}
