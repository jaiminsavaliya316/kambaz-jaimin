import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
 <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
 <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
 <div id="wd-dashboard-courses">
  <Row xs={1} md={5} className="g-4">
   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</Card.Title>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Full Stack software developer</Card.Text>
       <Button variant="primary">Go</Button>
      </Card.Body>
     </Link>
    </Card>
   </Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
    <Card>
      <Link to="/Kambaz/Courses/2345/Home"
            className="wd-dashboard-course-link text-decoration-none text-dark">
        <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
        <Card.Body>
          <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
            CS2345 Angular Basics
          </Card.Title>
          <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            Learn the fundamentals of the Angular framework.
          </Card.Text>
          <Button variant="primary">Go</Button>
        </Card.Body>
      </Link>
    </Card>
   </Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
    <Card>
      <Link to="/Kambaz/Courses/3456/Home"
            className="wd-dashboard-course-link text-decoration-none text-dark">
        <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
        <Card.Body>
          <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
            CS3456 Vue.js Essentials
          </Card.Title>
          <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            A comprehensive guide to building apps with Vue.js.
          </Card.Text>
          <Button variant="primary">Go</Button>
        </Card.Body>
      </Link>
    </Card>
   </Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
    <Card>
      <Link to="/Kambaz/Courses/4567/Home"
            className="wd-dashboard-course-link text-decoration-none text-dark">
        <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
        <Card.Body>
          <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
            CS4567 Node.js Fundamentals
          </Card.Title>
          <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            Server-side development with Node.js and Express.
          </Card.Text>
          <Button variant="primary">Go</Button>
        </Card.Body>
      </Link>
    </Card>
   </Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
    <Card>
      <Link to="/Kambaz/Courses/5678/Home"
            className="wd-dashboard-course-link text-decoration-none text-dark">
        <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
        <Card.Body>
          <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
            CS5678 Python Web Dev
          </Card.Title>
          <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            Build web applications using Django and Flask.
          </Card.Text>
          <Button variant="primary">Go</Button>
        </Card.Body>
      </Link>
    </Card>
   </Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
      <Link to="/Kambaz/Courses/6789/Home"
            className="wd-dashboard-course-link text-decoration-none text-dark">
        <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
        <Card.Body>
          <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
            CS6789 Java Mastery
          </Card.Title>
          <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            Deep dive into Java programming and Spring Boot.
          </Card.Text>
          <Button variant="primary">Go</Button>
        </Card.Body>
      </Link>
    </Card>   
   </Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
    <Card>
      <Link to="/Kambaz/Courses/7890/Home"
            className="wd-dashboard-course-link text-decoration-none text-dark">
        <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
        <Card.Body>
          <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
            CS7890 Data Structures
          </Card.Title>
          <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
            Essential data structures and algorithm techniques.
          </Card.Text>
          <Button variant="primary">Go</Button>
        </Card.Body>
      </Link>
    </Card>   
   </Col>
  </Row>
</div></div>

);}
