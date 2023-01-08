import { createSlice } from "@reduxjs/toolkit";

export interface StateType {
  value: boolean;
}

const initialState: StateType = { value: true };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    isDark: (state: StateType) => {
      state.value = !state.value;
    },
  },
});

export const { isDark } = themeSlice.actions;
export const reducer = themeSlice.reducer;
