package com.photographyquote.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class PackageOption {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    @Column(length = 1000)
    private String shortDescription;
    @Column(length = 1000)
    private String detailedDescription;
    @Column(length = 1000)
    private String bestFor;
    private String coverageStyle;
    private String storytellingLevel;
    private boolean includesCinematicVideoFiveMinutes;
    private boolean includesCombinedEventsFilm;
    private String teaserStyle;
    private boolean includesCoupleInterviews;
    private boolean includesFamilyInterviews;
    private boolean includesDocumentaryStorytelling;
    private boolean includesConceptPlanning;
    private boolean includesPreWeddingConceptualShootVideo;
    private boolean includesCreativeStorytelling;
    private boolean includesCinematicScenes;
    private boolean includesTrailerOrReel;
    private boolean includesFullHighlightFilm;
    private String liveEventStreaming;
    @Column(length = 1000)
    private String packageIncludes;
    private String addOn;
    private String estimatedDeliveryTimeline;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public String getDetailedDescription() {
        return detailedDescription;
    }

    public void setDetailedDescription(String detailedDescription) {
        this.detailedDescription = detailedDescription;
    }

    public String getBestFor() {
        return bestFor;
    }

    public void setBestFor(String bestFor) {
        this.bestFor = bestFor;
    }

    public String getCoverageStyle() {
        return coverageStyle;
    }

    public void setCoverageStyle(String coverageStyle) {
        this.coverageStyle = coverageStyle;
    }

    public String getStorytellingLevel() {
        return storytellingLevel;
    }

    public void setStorytellingLevel(String storytellingLevel) {
        this.storytellingLevel = storytellingLevel;
    }

    public boolean isIncludesCinematicVideoFiveMinutes() {
        return includesCinematicVideoFiveMinutes;
    }

    public void setIncludesCinematicVideoFiveMinutes(boolean includesCinematicVideoFiveMinutes) {
        this.includesCinematicVideoFiveMinutes = includesCinematicVideoFiveMinutes;
    }

    public boolean isIncludesCombinedEventsFilm() {
        return includesCombinedEventsFilm;
    }

    public void setIncludesCombinedEventsFilm(boolean includesCombinedEventsFilm) {
        this.includesCombinedEventsFilm = includesCombinedEventsFilm;
    }

    public String getTeaserStyle() {
        return teaserStyle;
    }

    public void setTeaserStyle(String teaserStyle) {
        this.teaserStyle = teaserStyle;
    }

    public boolean isIncludesCoupleInterviews() {
        return includesCoupleInterviews;
    }

    public void setIncludesCoupleInterviews(boolean includesCoupleInterviews) {
        this.includesCoupleInterviews = includesCoupleInterviews;
    }

    public boolean isIncludesFamilyInterviews() {
        return includesFamilyInterviews;
    }

    public void setIncludesFamilyInterviews(boolean includesFamilyInterviews) {
        this.includesFamilyInterviews = includesFamilyInterviews;
    }

    public boolean isIncludesDocumentaryStorytelling() {
        return includesDocumentaryStorytelling;
    }

    public void setIncludesDocumentaryStorytelling(boolean includesDocumentaryStorytelling) {
        this.includesDocumentaryStorytelling = includesDocumentaryStorytelling;
    }

    public boolean isIncludesConceptPlanning() {
        return includesConceptPlanning;
    }

    public void setIncludesConceptPlanning(boolean includesConceptPlanning) {
        this.includesConceptPlanning = includesConceptPlanning;
    }

    public boolean isIncludesPreWeddingConceptualShootVideo() {
        return includesPreWeddingConceptualShootVideo;
    }

    public void setIncludesPreWeddingConceptualShootVideo(boolean includesPreWeddingConceptualShootVideo) {
        this.includesPreWeddingConceptualShootVideo = includesPreWeddingConceptualShootVideo;
    }

    public boolean isIncludesCreativeStorytelling() {
        return includesCreativeStorytelling;
    }

    public void setIncludesCreativeStorytelling(boolean includesCreativeStorytelling) {
        this.includesCreativeStorytelling = includesCreativeStorytelling;
    }

    public boolean isIncludesCinematicScenes() {
        return includesCinematicScenes;
    }

    public void setIncludesCinematicScenes(boolean includesCinematicScenes) {
        this.includesCinematicScenes = includesCinematicScenes;
    }

    public boolean isIncludesTrailerOrReel() {
        return includesTrailerOrReel;
    }

    public void setIncludesTrailerOrReel(boolean includesTrailerOrReel) {
        this.includesTrailerOrReel = includesTrailerOrReel;
    }

    public boolean isIncludesFullHighlightFilm() {
        return includesFullHighlightFilm;
    }

    public void setIncludesFullHighlightFilm(boolean includesFullHighlightFilm) {
        this.includesFullHighlightFilm = includesFullHighlightFilm;
    }

    public String getLiveEventStreaming() {
        return liveEventStreaming;
    }

    public void setLiveEventStreaming(String liveEventStreaming) {
        this.liveEventStreaming = liveEventStreaming;
    }

    public String getPackageIncludes() {
        return packageIncludes;
    }

    public void setPackageIncludes(String packageIncludes) {
        this.packageIncludes = packageIncludes;
    }

    public String getAddOn() {
        return addOn;
    }

    public void setAddOn(String addOn) {
        this.addOn = addOn;
    }

    public String getEstimatedDeliveryTimeline() {
        return estimatedDeliveryTimeline;
    }

    public void setEstimatedDeliveryTimeline(String estimatedDeliveryTimeline) {
        this.estimatedDeliveryTimeline = estimatedDeliveryTimeline;
    }
}
