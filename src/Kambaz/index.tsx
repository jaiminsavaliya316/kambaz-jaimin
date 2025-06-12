import { Routes, Route, Navigate } from "react-router";
import * as userClient from "./Account/client";
// import * as courseClient from "./Courses/client";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
export default function Kambaz() {
  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  // const deleteCourse = async (courseId: string) => {
  //     const status = await courseClient.deleteCourse(courseId);
  //     setCourses(courses.filter((course) => course._id !== courseId));
  // };

  // const updateCourse = async (course:any) => {
  //   await courseClient.updateCourse(course);
  //   setCourses(courses.map((c) => {
  //       if (c._id === course._id) { return course; }
  //       else { return c; }
  //   })
  // );};

  // const addNewCourse = async (course:any) => {
  //   const newCourse = await userClient.createCourse(course);
  //   setCourses([ ...courses, newCourse ]);
  // };
  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
    console.log(courses)
  };

  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  return (
    <Session>
      <div id="wd-kambaz">
        <KambazNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            
            <Route path="Dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/Courses/:cid/*" element={
                <ProtectedRoute>  
                  <Courses />
                </ProtectedRoute>
              } />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );}
