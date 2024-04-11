import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';
import { DEFAULT_SETTINGS } from '../../utilities/constants';

const cookies = new Cookies();
const languageCookies = cookies.get("rr_lan");

const initialState = {
  language: languageCookies ? languageCookies : DEFAULT_SETTINGS.language
};

const defaultSettingsReducer = createSlice({
  name: 'defaultSettings',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    }
  }
});

export const { setLanguage } = defaultSettingsReducer.actions;

export default defaultSettingsReducer.reducer;