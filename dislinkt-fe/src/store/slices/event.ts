import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SystemEventData from "../../models/data/SystemEventData";
import { EventSliceValues } from "../../models/slices/event";

const initEventValues: EventSliceValues = {
  events: [],
};

const evetSlice = createSlice({
  name: "event",
  initialState: initEventValues,
  reducers: {
    setEvents(state, action: PayloadAction<SystemEventData[]>) {
      state.events = action.payload;
    },
  },
});

export const { setEvents } = evetSlice.actions;

export default evetSlice.reducer;
