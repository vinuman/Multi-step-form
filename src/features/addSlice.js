import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  online_services: true,
  large_storage: false,
  custom_profle: false,
};

const addSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    toggleOne: (state, action) => {
      state.online_services = action.payload;
    },
    toggleTwo: (state, action) => {
      state.large_storage = action.payload;
    },
    toggleThree: (state, action) => {
      state.custom_profle = action.payload;
    },
  },
});

export const selectedAddOns = (state) => state.add;

export const { toggleOne, toggleTwo, toggleThree } = addSlice.actions;

export default addSlice.reducer;
