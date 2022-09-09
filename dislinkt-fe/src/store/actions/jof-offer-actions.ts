import JobOfferFormValues from "../../models/forms/JobOfferFormValues";
import {
  ADD_JOB_OFFER,
  GET_JOB_OFFERS,
  SEARCH_JOB_OFFERS,
} from "./action-types";

export const getJobOffers = () => {
  return {
    type: GET_JOB_OFFERS,
  };
};

export const searchJobOffers = (query: string) => {
  return {
    type: SEARCH_JOB_OFFERS,
    payload: { query },
  };
};

export const addJobOffer = (jobOfferFormValues: JobOfferFormValues) => {
  return {
    type: ADD_JOB_OFFER,
    payload: jobOfferFormValues,
  };
};
