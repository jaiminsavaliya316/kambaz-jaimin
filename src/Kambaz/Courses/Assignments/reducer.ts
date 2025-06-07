import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: assignments,
};
const assignmentSlice = createSlice({
    name: 'assignments',
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment })=>{
            state.assignments.push(assignment);
        },
        updateAssignment: (state, { payload: assignment })=>{
            state.assignments = state.assignments.filter((a)=>a._id !== assignment._id);
            state.assignments.push(assignment);
        },
        deleteAssignment: (state, { payload: assignment })=>{
            state.assignments = state.assignments.filter((a)=>a._id !== assignment._id);
        }
    }
});

export const { addAssignment, updateAssignment, deleteAssignment } =
  assignmentSlice.actions;
export default assignmentSlice.reducer;
