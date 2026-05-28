import axiosClient from "./axiosClient";

export const getEventCategories = () => axiosClient.get("/event-categories");

export const getIndianEvents = () => axiosClient.get("/indian-events");

export const getVideoPackages = () => axiosClient.get("/video-packages");

export const getVideoPackageComparison = () => axiosClient.get("/video-packages/compare");
