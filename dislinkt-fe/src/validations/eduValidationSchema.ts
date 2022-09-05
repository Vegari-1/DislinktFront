import * as Yup from "yup";

function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString();
}

const today = new Date();
today.setHours(0, 0, 0, 0);

const eduValidationSchema = Yup.object().shape({
  school: Yup.string().required("* Required field"),
  degree: Yup.string().required("* Required field"),
  field: Yup.string().required("* Required field"),
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

export default eduValidationSchema;
