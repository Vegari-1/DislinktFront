import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import SystemEventData from "../../models/data/SystemEventData";
import eventService from "../../services/EventService";
import { setEvents } from "../slices/event";

export function* handleGetEvents(): Generator<any, void, SystemEventData[]> {
  try {
    const events: SystemEventData[] = yield call(eventService.getEvents);
    yield put(setEvents(events));
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}
