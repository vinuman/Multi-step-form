import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  number: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addFormDetails: (state, action) => {
      const { name, email, number } = action.payload;
      state.name = name;
      state.email = email;
      state.number = number;
    },
  },
});

export const addedFields = (state) => state.form;

export const { addFormDetails } = formSlice.actions;

export default formSlice.reducer;
