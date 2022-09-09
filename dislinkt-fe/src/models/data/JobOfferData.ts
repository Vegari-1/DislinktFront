interface JobOfferData {
  id: string;
  name: string;
  surname: string;
  picture: string;
  positionName: string;
  description: string;
  qualifications: string[];
  companyLink?: string;
}

export default JobOfferData;
