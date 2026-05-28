package com.photographyquote.controller;

import com.photographyquote.model.PackageOption;
import com.photographyquote.service.PackageOptionService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CatalogController {

    private static final List<String> EVENT_CATEGORIES = List.of(
            "Wedding",
            "Engagement",
            "Birthday",
            "Sweet 16",
            "Housewarming",
            "Baby Shower",
            "Half Saree / Puberty Ceremony",
            "Naming Ceremony",
            "Conceptual Shoot",
            "Other"
    );

    private static final List<String> INDIAN_EVENTS = List.of(
            "Haldi",
            "Mehndi",
            "Sangeet",
            "Engagement",
            "Pellikuthuru / Pellikoduku",
            "Wedding Ceremony",
            "Reception",
            "Gruhapravesam / Housewarming",
            "Baby Shower",
            "Naming Ceremony",
            "Other"
    );

    private final PackageOptionService packageOptionService;

    public CatalogController(PackageOptionService packageOptionService) {
        this.packageOptionService = packageOptionService;
    }

    @GetMapping("/event-categories")
    public List<String> getEventCategories() {
        return EVENT_CATEGORIES;
    }

    @GetMapping("/indian-events")
    public List<String> getIndianEvents() {
        return INDIAN_EVENTS;
    }

    @GetMapping("/video-packages")
    public List<PackageOption> getVideoPackages() {
        return packageOptionService.getAllPackages();
    }

    @GetMapping("/video-packages/compare")
    public List<PackageOption> compareVideoPackages() {
        return packageOptionService.getPackageComparison();
    }
}
