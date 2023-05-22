import { createSlice } from "@reduxjs/toolkit";
import { ThemeType } from "./../types/types";

const value: string | null = localStorage.getItem("theme");

const status = JSON.parse(value ? value : "true"); //* ok

const initialState = {
  themeDark: status,
} as ThemeType;

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.themeDark = !state.themeDark;
    },
  },
});
export const { changeTheme } = themeSlice.actions;
export const ThemeReducer = themeSlice.reducer;
