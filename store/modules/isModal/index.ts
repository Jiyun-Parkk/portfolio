import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface StateType {
  value: boolean;
}

const initialState: StateType = { value: false };

const openModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    isOpen: (state: StateType, actions: PayloadAction<boolean>) => {
      state.value = actions.payload;
    },
  },
});

export const { isOpen } = openModalSlice.actions;
export const reducer = openModalSlice.reducer;
