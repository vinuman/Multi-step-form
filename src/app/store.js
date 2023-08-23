import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../features/form/formSlice";
import selectReducer from "../features/selectSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    select: selectReducer,
  },
});

export default store;
