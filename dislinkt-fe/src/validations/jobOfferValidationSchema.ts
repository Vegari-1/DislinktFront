import * as Yup from "yup";

const jobOfferValidationSchema = Yup.object().shape({
  positionName: Yup.string().required("* Required field"),
  description: Yup.string().required("* Required field"),
  companyLink: Yup.string().required("* Required field"),
  qualificationsCombined: Yup.string().required("* Required field"),
});

export default jobOfferValidationSchema;
