import axiosClient from "./axiosClient";

export const getPackages = () => axiosClient.get("/packages");

export const getPackageById = (id) => axiosClient.get(`/packages/${id}`);

export const getPackageComparison = () => axiosClient.get("/packages/compare");
