import { useParams } from "react-router";
import { Link, useLocation} from "react-router-dom";
export default function CourseNavigation() {
  const {cid} = useParams();
  const {pathname} = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((linkItem) => (
        <Link to={`/Kambaz/Courses/${cid}/${linkItem} `} id={`wd-course-${linkItem}-link`}
        className={`list-group-item border border-0 ${pathname.includes(`${linkItem}`)?"active":"text-danger"}`}> {linkItem} 
        </Link>
      ))}
    </div>
);}
