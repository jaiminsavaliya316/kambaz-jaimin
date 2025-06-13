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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "./Courses/reducer";
export default function Kambaz() {
  const courses = {};
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();

  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      dispatch(setCourses(courses));
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
