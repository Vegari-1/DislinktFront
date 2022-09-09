import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "./sagas/root-saga";

import authReducer from "./slices/auth";
import profileReducer from "./slices/profile";
import postReducer from "./slices/post";
import jobOfferReducer from "./slices/job-offer";
import notificationsReducer from "./slices/notifications";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    post: postReducer,
    jobOffer: jobOfferReducer,
    notifications: notificationsReducer,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
