import ProfileInfoData from "./ProfileInfoData";

interface JobOfferData {
  id: string;
  positionName: string;
  description: string;
  qualifications: string[];
  profile: ProfileInfoData;
  companyLink?: string;
}

export default JobOfferData;
