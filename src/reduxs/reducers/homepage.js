import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	homepage: {
		data: null,
		error: null
	}
};

const homepageReducer = createSlice({
	name: 'homepage',
	initialState,
	reducers: {
		setHomepageSuccess: (state, action) => {
			state.homepage.data = action.payload;
		},
		setHomepageError: (state, action) => {
			state.homepage.error = action.payload;
		}
	}
});

export const {
	setHomepageSuccess,
	setHomepageError
} = homepageReducer.actions;

export default homepageReducer.reducer;