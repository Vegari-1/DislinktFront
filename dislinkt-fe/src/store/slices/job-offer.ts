import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import JobOfferData from "../../models/data/JobOfferData";
import { JobOfferSliceValues } from "../../models/slices/job-offer";

const initJobOfferValues: JobOfferSliceValues = {
  jobOffers: [],
};

const jobOfferSlice = createSlice({
  name: "jobOffer",
  initialState: initJobOfferValues,
  reducers: {
    setJobOffers(state, action: PayloadAction<JobOfferData[]>) {
      state.jobOffers = action.payload;
    },
  },
});

export const { setJobOffers } = jobOfferSlice.actions;

export default jobOfferSlice.reducer;
