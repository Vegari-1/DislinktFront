import JobOfferFormValues from "../models/forms/JobOfferFormValues";
import ApiService from "./ApiService";

const ENDPOINTS = {
  GET_JOB_OFFERS: "/job-offer",
  SEARCH_JOB_OFFERS: "/job-offer?query=",
};

export class JobOfferService extends ApiService {
  getJobOffers = async () => {
    // const { data } = await this.apiClient.get(ENDPOINTS.GET_JOB_OFFERS);

    // return data;

    return [
      {
        id: "1",
        positionName: "Designer",
        description: "Most awesome designer ever",
        qualifications: ["Adobe", "CorelDraw"],
        profileId: "1",
        name: "Eva",
        surname: "Jankovic",
        picture: "slika",
        companyLink: "https://agent-app-frontend-test.herokuapp.com/company/1",
      },
      {
        id: "2",
        positionName: "Designer",
        description: "Most awesome designer ever",
        qualifications: ["Adobe", "CorelDraw"],
        profileId: "1",
        name: "Eva",
        surname: "Jankovic",
        picture: "slika",
      },
      {
        id: "3",
        positionName: "Designer",
        description: "Most awesome designer ever",
        qualifications: ["Adobe", "CorelDraw"],
        profileId: "1",
        name: "Eva",
        surname: "Jankovic",
        picture: "slika",
      },
    ];
  };

  searchJobOffers = async (query: string) => {
    // const { data } = await this.apiClient.get(
    //   ENDPOINTS.SEARCH_JOB_OFFERS + query
    // );

    // return data;
    console.log(query);
    return [
      {
        id: "1",
        positionName: "Designer",
        description: "Most awesome designer ever",
        qualifications: ["Adobe", "CorelDraw"],
        profileId: "1",
        name: "Eva",
        surname: "Jankovic",
        picture: "slika",
        companyLink: "https://agent-app-frontend-test.herokuapp.com/company/1",
      },
    ];
  };

  addJobOffer = async (jobOfferFormValues: JobOfferFormValues) => {
    // const { data } = await this.apiClient.post(
    //   ENDPOINTS.GET_JOB_OFFERS,
    //   jobOfferFormValues
    // );

    // return data;
    console.log(jobOfferFormValues);
  };
}

const jobOfferService = new JobOfferService();

export default jobOfferService;
