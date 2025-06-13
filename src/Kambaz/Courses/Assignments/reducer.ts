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
        deleteAssignment: (state, { payload: assignmentId })=>{
            state.assignments = state.assignments.filter((a)=>a._id !== assignmentId);
        },
        setAssignment: (state, {payload: assignments}) => {
            state.assignments = assignments;
        }
    }
});

export const { addAssignment, updateAssignment, deleteAssignment, setAssignment } =
  assignmentSlice.actions;
export default assignmentSlice.reducer;
