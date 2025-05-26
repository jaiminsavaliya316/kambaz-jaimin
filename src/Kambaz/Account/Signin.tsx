import { Form, Button, Col, Row } from 'react-bootstrap';
export default function SignIn() {
  return (
    <div>
      <div id="wd-signin-screen">
        <h2 className="mb-3 fw-normal">Sign In</h2>
        
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Col>
              <Form.Control type="username" placeholder="username" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col>
              <Form.Control type="password" placeholder="password" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col>
              <Button id="wd-signin-btn" type="submit" className="w-100">Sign In</Button>
            </Col>
          </Form.Group>
        </Form>
        <a href="#/Kambaz/Account/Signup" className='text-decoration-none'>Sign Up</a>
      </div>
    </div>
  );
}