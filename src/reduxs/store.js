import { configureStore } from "@reduxjs/toolkit";
import homepageReducer from "./reducers/homepage";
import defaultSettingsReducer from "./reducers/defaultSettings";

export default configureStore({
	reducer: {
		homepageReducer,
		defaultSettingsReducer
	}
});