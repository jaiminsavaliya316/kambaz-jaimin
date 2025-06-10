import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentreducer from "./Courses/Assignments/reducer";
import courseReducer from "./Courses/reducer"
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentreducer,
    courseReducer,
  },
});
export default store;