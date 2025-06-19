import CourseNavigation from "./Navigation";
import { Route, Routes, useParams, useLocation} from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa6";
import PeopleTable from "./People/Table";
import { useSelector } from "react-redux";
import { findUsersForCourse } from "./client";
import { useState, useEffect } from "react";


export default function Courses() {
  const { cid } = useParams();
  const {courses} = useSelector((state:any)=>state.courseReducer);
  const course = courses.find((course:any) => course._id === cid);
  const { pathname } = useLocation();
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    if (course && course._id) {
      findUsersForCourse(course._id).then(setUsers);
    }
  }, [course]);

  return (
<div id="wd-courses">
  <h2 className="text-danger">
    <FaAlignJustify className="me-4 fs-4 mb-1" />
    {course && course.name} &gt; {pathname.split("/")[4]}
  </h2>
  <hr />
  <div className="d-flex">
    <div className="d-none d-md-block">
      <CourseNavigation />
    </div>
    <div className="flex-fill">
    <Routes>
      <Route path="Home" element={<Home />} />
      <Route path="Modules" element={<Modules />} />
      <Route path="Assignments" element={<Assignments />} />
      <Route path="Assignments/:aid" element={<AssignmentEditor />} />
      <Route path="People" element={<PeopleTable users={users}/>} />
    </Routes>
    </div></div>
</div>

  );
}
