import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: "",
  plan: "",
  arcade: true,
  advanced: false,
  pro: false,
  monthly: true,
};

const selectSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    monthOrYear: (state) => {
      state.monthly = !state.monthly;
    },
    cardSelection: (state, action) => {
      const { arcade, advanced, pro } = action.payload;
      state.arcade = arcade;
      state.advanced = advanced;
      state.pro = pro;
    },
  },
});

export const selectedPlan = (state) => state.select;

export const { monthOrYear, cardSelection } = selectSlice.actions;

export default selectSlice.reducer;
