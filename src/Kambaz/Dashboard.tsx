import { Link } from "react-router-dom";
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { addNewCourse, deleteCourse, updateCourse, enroll, unenroll } from "./Courses/reducer";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
export default function Dashboard()
  {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const {courses} = useSelector((state:any)=>state.courseReducer);
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const [enrollMode, setEnrollMode] = useState(false);
  const {enrollments} = useSelector((state:any)=>state.courseReducer);
  const dispatch = useDispatch();
  const isEnrolled = (courseId:any) => {
    return enrollments.find((ed:any) => ed.course === courseId && ed.user === currentUser._id)
  }


  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <section className={`${currentUser.role !== 'FACULTY'&&'d-none'}`} >
      <h5>New Course
        <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={()=>setEnrollMode(!enrollMode)}> Enrollment </button>
        <button className="btn btn-primary float-end me-2" id="wd-add-new-course-click" onClick={()=>dispatch(addNewCourse(course))} > Add </button>
        <button className="btn btn-warning float-end me-2" onClick={()=>dispatch(updateCourse(course))} id="wd-update-course-click"> Update </button>
      </h5>
      <FormControl value={course.name} className="mb-2" onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <FormControl value={course.description} onChange={(e) => setCourse({ ...course, description: e.target.value }) }/>
      <hr />
      </section>

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.filter((course:any) =>
            enrollments.some(
              (enrollment:any) =>
                (enrollment.user === currentUser._id && enrollment.course === course._id) || enrollMode
          ))
          .map((course:any) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "330px" }}>
              <Card>
                <Link key={course._id} to={`/Kambaz/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                  <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </Card.Title>
                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} </Card.Text>
                    <Button variant="primary"> Go </Button>
                    <button onClick={(event) => {
                      event.preventDefault();
                      dispatch(deleteCourse(course._id));
                    }} 
                    className={`btn btn-danger float-end ${currentUser.role !== 'FACULTY'&&'d-none'}`}
                    id="wd-delete-course-click">
                    Delete
                    </button>
                    <button id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className={`btn btn-warning me-1 float-end ${currentUser.role !== 'FACULTY'&&'d-none'}`}>
                      Edit
                    </button>
                    {enrollMode && ((isEnrolled(course._id)?
                    (<button id="wd-unenroll-btn"
                      onClick={(event) => {
                        event.preventDefault();
                        dispatch(unenroll({ user: currentUser._id, course: course._id }));
                      }}
                      className={`btn btn-danger me-1 float-end ${currentUser.role !== 'FACULTY'&&'d-none'}`}>
                      Unenroll
                    </button>):
                    (<button id="wd-enroll-btn"
                      onClick={(event) => {
                        event.preventDefault();
                        dispatch(enroll({ user: currentUser._id, course: course._id }));
                      }}
                      className={`btn btn-success me-1 float-end ${currentUser.role !== 'FACULTY'&&'d-none'}`}>
                      Enroll
                    </button>)
                    ))}
                  </Card.Body>
                </Link>
              </Card>
            </Col> 
          ))}
        </Row>
      </div>
    </div>);}