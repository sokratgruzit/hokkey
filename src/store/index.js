import { configureStore, combineReducers } from "@reduxjs/toolkit";

import settingsReducer from "./settingsReducer";

const rootReducer = combineReducers({
  settings: settingsReducer,
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
