import { configureStore } from "@reduxjs/toolkit";
import calcSlicer from "./CalcSlicer";

export default configureStore({
  reducer: {
    calc: calcSlicer,
  },
});
