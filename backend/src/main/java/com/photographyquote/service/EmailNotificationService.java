package com.photographyquote.service;

import com.photographyquote.model.QuoteRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailNotificationService {

    private static final Logger logger = LoggerFactory.getLogger(EmailNotificationService.class);

    private final ObjectProvider<JavaMailSender> mailSenderProvider;
    private final boolean notificationsEnabled;
    private final String adminEmail;

    public EmailNotificationService(
            ObjectProvider<JavaMailSender> mailSenderProvider,
            @Value("${quote.notifications.enabled:false}") boolean notificationsEnabled,
            @Value("${quote.notifications.admin-email:vanaravisuals.studio@gmail.com}") String adminEmail
    ) {
        this.mailSenderProvider = mailSenderProvider;
        this.notificationsEnabled = notificationsEnabled;
        this.adminEmail = adminEmail;
    }

    public void sendQuoteSubmittedEmails(QuoteRequest quoteRequest) {
        if (!notificationsEnabled) {
            logger.info("Email notifications are disabled. Quote {} was saved without sending email.", quoteRequest.getId());
            return;
        }

        JavaMailSender mailSender = mailSenderProvider.getIfAvailable();
        if (mailSender == null) {
            logger.warn("JavaMailSender is not configured. Quote {} was saved without sending email.", quoteRequest.getId());
            return;
        }

        try {
            sendAdminEmail(mailSender, quoteRequest);
            sendClientEmail(mailSender, quoteRequest);
        } catch (RuntimeException ex) {
            logger.error("Quote {} was saved, but email notification failed: {}", quoteRequest.getId(), ex.getMessage());
        }
    }

    private void sendAdminEmail(JavaMailSender mailSender, QuoteRequest quoteRequest) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(adminEmail);
        message.setSubject("New MyHobbyGraphy Quote Request - " + quoteRequest.getClientName());
        message.setText(buildAdminBody(quoteRequest));
        mailSender.send(message);
    }

    private void sendClientEmail(JavaMailSender mailSender, QuoteRequest quoteRequest) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(quoteRequest.getEmail());
        message.setSubject("MyHobbyGraphy received your quote request");
        message.setText("""
                Hi %s,

                Thank you for submitting your MyHobbyGraphy quote request.
                We received your event details and will review everything before sending a custom quote.

                Selected event: %s
                Wedding date: %s
                Coverage: %s
                Video style: %s

                - MyHobbyGraphy
                """.formatted(
                quoteRequest.getClientName(),
                quoteRequest.getEventCategory(),
                quoteRequest.getWeddingDate(),
                quoteRequest.getServiceType(),
                quoteRequest.getFinalVideoStyle()
        ));
        mailSender.send(message);
    }

    private String buildAdminBody(QuoteRequest quoteRequest) {
        return """
                New quote request submitted.

                Client: %s
                Email: %s
                Phone: %s
                Event Category: %s
                Wedding Date: %s
                Location: %s
                Number of Events: %s
                Guest Count: %s
                Coverage Type: %s
                Selected Events: %s
                Service Type: %s
                Live Streaming: %s
                Deliverables: %s
                Final Video Style: %s
                Notes: %s
                """.formatted(
                quoteRequest.getClientName(),
                quoteRequest.getEmail(),
                quoteRequest.getPhone(),
                quoteRequest.getEventCategory(),
                quoteRequest.getWeddingDate(),
                quoteRequest.getLocation(),
                quoteRequest.getNumberOfEvents(),
                quoteRequest.getGuestCount(),
                quoteRequest.getIndoorOutdoorType(),
                quoteRequest.getSelectedIndianEvents(),
                quoteRequest.getServiceType(),
                quoteRequest.getLiveStreamingPreference(),
                quoteRequest.getSelectedDeliverables(),
                quoteRequest.getFinalVideoStyle(),
                quoteRequest.getSpecialNotes()
        );
    }
}
