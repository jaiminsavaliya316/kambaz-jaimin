import { createSlice } from "@reduxjs/toolkit";
import { courses, enrollments } from "../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    courses: courses,
    enrollments: enrollments
};
const courseSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        addNewCourse: (state, { payload: course })=>{
            course = {...course, _id:uuidv4()};
            state.courses.push(course);

        },
        updateCourse: (state, { payload: course })=>{
            const index = state.courses.findIndex(c => c._id === course._id);
            if (index !== -1) {
                state.courses[index] = course;
            } 
        },
        deleteCourse: (state, { payload: courseId })=>{
            state.courses = state.courses.filter((a)=>a._id !== courseId);
        },
        enroll: (state, {payload: enrollment})=>{
            // state.enrollments = [...state.enrollments, { "_id": uuidv4(), "user": enrollment.user, "course": enrollment.course}];
            state.enrollments.push({ "_id": uuidv4(), "user": enrollment.user, "course": enrollment.course});
        },
        unenroll: (state, {payload: enrollment})=>{
            state.enrollments = state.enrollments.filter((ed) => !(ed.course === enrollment.course && ed.user === enrollment.user))
        },
        setCourses: (state, {payload: courses})=>{
            state.courses = courses;
        },
        
    }
});

export const { addNewCourse, updateCourse, deleteCourse, enroll, unenroll, setCourses } =
  courseSlice.actions;
export default courseSlice.reducer;
