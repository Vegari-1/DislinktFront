import ProfileNestedData from "./ProfileNestedData";

interface JobOfferData {
  id: string;
  profile: ProfileNestedData;
  positionName: string;
  description: string;
  qualifications: string[];
  companyLink?: string;
}

export default JobOfferData;
