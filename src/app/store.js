import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../features/form/formSlice";
import selectReducer from "../features/selectSlice";
import addReducer from "../features/addSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    select: selectReducer,
    add: addReducer,
  },
});

export default store;
