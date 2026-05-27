package com.photographyquote.config;

import com.photographyquote.model.PackageOption;
import com.photographyquote.repository.PackageOptionRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {

    private final PackageOptionRepository packageOptionRepository;

    public DataSeeder(PackageOptionRepository packageOptionRepository) {
        this.packageOptionRepository = packageOptionRepository;
    }

    @Override
    public void run(String... args) {
        if (packageOptionRepository.count() > 0) {
            return;
        }

        packageOptionRepository.save(createPackage(
                "Wedding Video - Cinematic",
                "Clean cinematic wedding video coverage for all selected events.",
                "Clean cinematic wedding video coverage for all selected events.",
                "Couples who want a beautiful cinematic recap of their entire wedding in one film.",
                true,
                true,
                "Cinematic teaser for all events combined, up to 2 minutes",
                false,
                false,
                false,
                false,
                false,
                false,
                "Complimentary for one event",
                "Cinematic video for all events combined, 5+ minutes\nCinematic teaser for all events combined, up to 2 minutes\nLive event streaming for one event complimentary",
                ""
        ));

        packageOptionRepository.save(createPackage(
                "Documentary Wedding Film",
                "A deeper emotional wedding film with documentary-style storytelling, interviews, reactions, and full event coverage.",
                "A deeper emotional wedding film with documentary-style storytelling, interviews, reactions, and full event coverage.",
                "Couples who want a deeper emotional story with interviews, reactions, and full event coverage.",
                true,
                true,
                "Cinematic teaser for each event separately",
                true,
                true,
                true,
                false,
                false,
                false,
                "Add-on",
                "Cinematic video for all events combined, 5+ minutes\nCinematic teaser for each event separately\nCouple interview\nFamily interviews\nDocumentary-style storytelling",
                "Live Event Streaming"
        ));

        packageOptionRepository.save(createPackage(
                "Wedding Film + Conceptual",
                "Premium cinematic wedding film with creative direction, pre-wedding concept shoot, storytelling, and emotional visuals.",
                "Premium cinematic wedding film with creative direction, pre-wedding concept shoot, storytelling, and emotional visuals.",
                "Couples looking for a premium experience with creative, conceptual, and cinematic storytelling.",
                true,
                true,
                "Cinematic teaser for each event separately",
                true,
                true,
                true,
                true,
                true,
                true,
                "Add-on",
                "Cinematic video for all events combined, 5+ minutes\nCinematic teaser for each event separately\nCouple interview\nFamily interviews\nComplimentary pre-wedding conceptual shoot video\nCreative storytelling and conceptual scenes",
                "Live Event Streaming"
        ));
    }

    private PackageOption createPackage(
            String name,
            String shortDescription,
            String detailedDescription,
            String bestFor,
            boolean includesCinematicVideoFiveMinutes,
            boolean includesCombinedEventsFilm,
            String teaserStyle,
            boolean includesCoupleInterviews,
            boolean includesFamilyInterviews,
            boolean includesDocumentaryStorytelling,
            boolean includesConceptPlanning,
            boolean includesPreWeddingConceptualShootVideo,
            boolean includesCreativeStorytelling,
            String liveEventStreaming,
            String packageIncludes,
            String addOn
    ) {
        PackageOption packageOption = new PackageOption();
        packageOption.setName(name);
        packageOption.setShortDescription(shortDescription);
        packageOption.setDetailedDescription(detailedDescription);
        packageOption.setBestFor(bestFor);
        packageOption.setCoverageStyle("Combined selected events");
        packageOption.setStorytellingLevel(getStorytellingLevel(includesDocumentaryStorytelling, includesCreativeStorytelling));
        packageOption.setIncludesCinematicVideoFiveMinutes(includesCinematicVideoFiveMinutes);
        packageOption.setIncludesCombinedEventsFilm(includesCombinedEventsFilm);
        packageOption.setTeaserStyle(teaserStyle);
        packageOption.setIncludesCoupleInterviews(includesCoupleInterviews);
        packageOption.setIncludesFamilyInterviews(includesFamilyInterviews);
        packageOption.setIncludesDocumentaryStorytelling(includesDocumentaryStorytelling);
        packageOption.setIncludesConceptPlanning(includesConceptPlanning);
        packageOption.setIncludesPreWeddingConceptualShootVideo(includesPreWeddingConceptualShootVideo);
        packageOption.setIncludesCreativeStorytelling(includesCreativeStorytelling);
        packageOption.setIncludesCinematicScenes(includesCreativeStorytelling);
        packageOption.setIncludesTrailerOrReel(true);
        packageOption.setIncludesFullHighlightFilm(true);
        packageOption.setLiveEventStreaming(liveEventStreaming);
        packageOption.setPackageIncludes(packageIncludes);
        packageOption.setAddOn(addOn);
        packageOption.setEstimatedDeliveryTimeline("Discussed during quote review");
        return packageOption;
    }

    private String getStorytellingLevel(boolean includesDocumentaryStorytelling, boolean includesCreativeStorytelling) {
        if (includesCreativeStorytelling) {
            return "Creative conceptual storytelling";
        }
        if (includesDocumentaryStorytelling) {
            return "Documentary storytelling";
        }
        return "Clean cinematic recap";
    }
}
