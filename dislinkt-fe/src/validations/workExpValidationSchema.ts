import * as Yup from "yup";

function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString();
}

const today = new Date();
today.setHours(23, 59, 59, 999);

const workExpValidationSchema = Yup.object().shape({
  position: Yup.string().required("* Required field"),
  company: Yup.string().required("* Required field"),
  startDate: Yup.date()
    .max(today, "Start date cannot be in the future")
    .required("* Required field"),
  endDate: Yup.date()
    .max(today, "End date cannot be in the future")
    .min(
      Yup.ref("startDate"),
      ({ min }) => `Date needs to be after ${formatDate(min)}`
    ),
});

export default workExpValidationSchema;
