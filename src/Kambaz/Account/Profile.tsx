import { Form, Button, Col, Row, InputGroup } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa';
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h2 className="mb-3 fw-normal">Profile</h2>
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Col>
            <Form.Control type="username" placeholder="alice" />
          </Col>
        </Form.Group>
       
        <Form.Group as={Row} className="mb-3">
          <Col>
            <Form.Control type="password" placeholder="password" />
          </Col>
        </Form.Group>

                <Form.Group as={Row} className="mb-3">
          <Col>
            <Form.Control type="text" placeholder="Alice" />
          </Col>
        </Form.Group>        
        <Form.Group as={Row} className="mb-3">
          <Col>
            <Form.Control type="text" placeholder="Wonderland" />
          </Col>
        </Form.Group>

        <Form.Group className="mb-3">
          <InputGroup>
            <Form.Control type="datetime-local" id="wd-due-date" defaultValue="2024-05-13T23:59" />
            <InputGroup.Text
              onClick={() => {
                const input = document.getElementById('wd-due-date') as HTMLInputElement;
                input?.showPicker();
              }}
              >
              <FaCalendarAlt />
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>        

        <Form.Group as={Row} className="mb-3">
          <Col>
            <Form.Control type="email" placeholder="alica@wonderland.com" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col>
            <Form.Control type="text" placeholder="Wonderland" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col>
            <Button href="#/Kambaz/Account/Signin" id="wd-signin-btn" type="submit" className="w-100 btn btn-danger">Sign Out</Button>
          </Col>
        </Form.Group>        
      </Form>
    </div>
);}
