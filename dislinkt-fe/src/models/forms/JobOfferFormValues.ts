import ProfileNestedData from "../data/ProfileNestedData";

interface JobOfferFormValues {
  positionName: string;
  description: string;
  companyLink: string;
  qualifications: string[];
  qualificationsCombined: string;
  profile?: ProfileNestedData;
}

export default JobOfferFormValues;
