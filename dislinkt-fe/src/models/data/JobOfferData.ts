interface JobOfferData {
  id: string;
  positionName: string;
  description: string;
  qualifications: string[];
  profileName: string;
  profileSurname: string;
  profilePicture: string;
  companyLink?: string;
}

export default JobOfferData;
