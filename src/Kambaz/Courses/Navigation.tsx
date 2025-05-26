import { Link, useLocation} from "react-router-dom";
export default function CourseNavigation() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link to="/Kambaz/Courses/1234/Home" id="wd-course-home-link"
      className={`${
          currentPath == "/Kambaz/Courses/1234/Home" ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"
        }`}> Home </Link>
      <Link to="/Kambaz/Courses/1234/Modules" id="wd-course-modules-link"
        className={`${
          currentPath == "/Kambaz/Courses/1234/Modules" ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"
        }`}> Modules </Link>
      <Link to="/Kambaz/Courses/1234/Piazza" id="wd-course-piazza-link"
        className={`${
          currentPath == "/Kambaz/Courses/1234/Piazza" ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"
        }`}> Piazza </Link>
      <Link to="/Kambaz/Courses/1234/Zoom" id="wd-course-zoom-link"
        className={`${
          currentPath == "/Kambaz/Courses/1234/Zoom" ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"
        }`}> Zoom </Link>
      <Link to="/Kambaz/Courses/1234/Assignments" id="wd-course-quizzes-link"
        className={`${
          currentPath == "/Kambaz/Courses/1234/Assignments" ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"
        }`}> Assignments </Link>
      <Link to="/Kambaz/Courses/1234/Quizzes" id="wd-course-assignments-link"
        className={`${
          currentPath == "/Kambaz/Courses/1234/Quizzes" ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"
        }`}> Quizzes </Link>
      <Link to="/Kambaz/Courses/1234/People" id="wd-course-people-link"
        className={`${
          currentPath == "/Kambaz/Courses/1234/People" ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"
        }`}> People </Link>
    </div>
);}
