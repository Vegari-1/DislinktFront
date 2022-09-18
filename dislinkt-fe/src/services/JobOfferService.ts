import JobOfferFormValues from "../models/forms/JobOfferFormValues";
import ApiService from "./ApiService";

const ENDPOINTS = {
  GET_JOB_OFFERS: "/job-offer-service",
  SEARCH_JOB_OFFERS: "/job-offer-service?query=",
};

export class JobOfferService extends ApiService {
  getJobOffers = async () => {
    const { data } = await this.apiClient.get(ENDPOINTS.GET_JOB_OFFERS);

    return data.items;
  };

  searchJobOffers = async (query: string) => {
    const { data } = await this.apiClient.get(
      ENDPOINTS.SEARCH_JOB_OFFERS + query
    );

    return data;
  };

  addJobOffer = async (jobOfferFormValues: JobOfferFormValues) => {
    const { data } = await this.apiClient.post(
      ENDPOINTS.GET_JOB_OFFERS,
      jobOfferFormValues
    );

    return data;
  };
}

const jobOfferService = new JobOfferService();

export default jobOfferService;
