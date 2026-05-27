import axiosClient from "./axiosClient";

export const createQuote = (quoteData) => axiosClient.post("/quotes", quoteData);

export const getQuotes = () => axiosClient.get("/quotes");

export const getQuoteById = (id) => axiosClient.get(`/quotes/${id}`);

export const deleteQuote = (id) => axiosClient.delete(`/quotes/${id}`);
