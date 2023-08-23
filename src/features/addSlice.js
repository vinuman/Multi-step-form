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
    addOns: (state, action) => {
      const { online, storage, profile } = action.payload;
      state.online_services = online;
      state.large_storage = storage;
      state.custom_profle = profile;
    },
  },
});

export const selectedAddOns = (state) => state.add;

export const { addOns } = addSlice.actions;

export default addSlice.reducer;
