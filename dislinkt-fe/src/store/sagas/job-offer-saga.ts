import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import JobOfferData from "../../models/data/JobOfferData";
import jobOfferService from "../../services/JobOfferService";
import { addJobOffer, searchJobOffers } from "../actions/jof-offer-actions";
import { setJobOffers } from "../slices/job-offer";

export function* handleGetJobOffers(): Generator<any, void, JobOfferData[]> {
  try {
    const jobOffers: JobOfferData[] = yield call(jobOfferService.getJobOffers);

    yield put(setJobOffers(jobOffers));
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}

export function* handleSearchJobOffers({
  payload,
}: ReturnType<typeof searchJobOffers>): Generator<any, void, JobOfferData[]> {
  try {
    const jobOffers: JobOfferData[] = yield call(
      jobOfferService.searchJobOffers,
      payload.query
    );

    yield put(setJobOffers(jobOffers));
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}

export function* handleAddJobOffer({
  payload,
}: ReturnType<typeof addJobOffer>): Generator<any, void, void> {
  try {
    yield call(jobOfferService.addJobOffer, payload);

    yield call(handleGetJobOffers);
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}
