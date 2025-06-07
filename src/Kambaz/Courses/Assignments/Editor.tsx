import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import { FaCalendarAlt, FaTimes } from 'react-icons/fa';
import { useNavigate, useParams } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import * as db from "../../Database";
import "./styles.css";
import { addAssignment, updateAssignment} from './reducer';
import { useState } from 'react';

export default function AssignmentEditor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { aid, cid } = useParams();
  
  const dummyAssignment = { 
    "_id": 'R'+uuidv4(), 
    "points": "100", 
    "title": "Please add title", 
    "course": cid, 
    "startDate": "2025-05-30T00:00", 
    "dueDate": "2025-06-10T23:59", 
    "description": "Enter the description of this assignment"
  };
  
  const [assignment, setAssignment] = useState(
    aid === 'new' 
      ? dummyAssignment 
      : db.assignments.find((assignment) => assignment._id === aid) || dummyAssignment
  );

  // Handler for updating assignment fields
  const handleInputChange = (field: string, value: string) => {
    setAssignment(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    aid === 'new'?
      dispatch(addAssignment(assignment)):
      dispatch(updateAssignment(assignment));
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="p-4">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <Form.Control
            type="text"
            id="wd-name"
            value={assignment?.title || ''}
            onChange={(e) => handleInputChange('title', e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Control
            as="textarea"
            rows={6}
            id="wd-description"
            value={assignment?.description || ''}
            onChange={(e) => handleInputChange('description', e.target.value)}
            className="border-0 bg-light"
          />
        </Form.Group>

        <Row className="mb-3">
          <Col md={3} className="text-end">
            <Form.Label htmlFor="wd-points" className="pt-2">Points</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control
              type="number"
              id="wd-points"
              value={assignment?.points || ''}
              onChange={(e) => handleInputChange('points', e.target.value)}
              style={{ maxWidth: '200px' }}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3} className="text-end">
            <Form.Label htmlFor="wd-group" className="pt-2">Assignment Group</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Select 
              id="wd-group" 
              defaultValue="ASSIGNMENTS"
              style={{ maxWidth: '300px' }}
            >
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="LAB">Lab</option>
              <option value="QUIZ">Quiz</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3} className="text-end">
            <Form.Label htmlFor="wd-display-grade-as" className="pt-2">Display Grade as</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Select 
              id="wd-display-grade-as" 
              defaultValue="Percentage"
              style={{ maxWidth: '300px' }}
            >
              <option value="Percentage">Percentage</option>
              <option value="GPA">GPA</option>
              <option value="Points">Points</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3} className="text-end">
            <Form.Label htmlFor="wd-submission-type" className="pt-2">Submission Type</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Select 
              id="wd-submission-type" 
              defaultValue="Online"
              style={{ maxWidth: '300px' }}
            >
              <option value="Online">Online</option>
              <option value="Exam">Exam</option>
              <option value="Viva">Viva</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={3}></Col>
          <Col md={9}>
            <div className="border rounded p-3 bg-light" style={{ maxWidth: '400px' }}>
              <Form.Label className="mb-3">
                <strong>Online Entry Options</strong>
              </Form.Label>
              <div>
                <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" className="mb-2" />
                <Form.Check type="checkbox" id="wd-website-url" label="Website URL" defaultChecked className="mb-2" />
                <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" className="mb-2" />
                <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" className="mb-2" />
                <Form.Check type="checkbox" id="wd-file-upload" label="File Uploads" className="mb-2" />
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={3} className="text-end">
            <Form.Label className="pt-2">Assign</Form.Label>
          </Col>
          <Col md={9}>
            <div className="border rounded p-3" style={{ maxWidth: '400px' }}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="wd-assign-to">Assign to</Form.Label>
                <div className="border rounded p-2 bg-light d-flex align-items-center">
                  <span className="me-2">Everyone</span>
                  <FaTimes className="text-muted"  />
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="wd-due-date">Due</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="datetime-local"
                    id="wd-due-date"
                    value={assignment?.dueDate || ''}
                    onChange={(e) => handleInputChange('dueDate', e.target.value)}
                  />
                  <InputGroup.Text 
                    className="bg-white border-start-0" 
                    onClick={() => {
                      const input = document.getElementById('wd-due-date') as HTMLInputElement;
                      input?.showPicker();
                    }}
                  >
                    <FaCalendarAlt className="text-dark" />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="wd-available-from">Available from</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="datetime-local"
                        id="wd-available-from"
                        value={assignment?.startDate || ''}
                        onChange={(e) => handleInputChange('startDate', e.target.value)}
                      />
                      <InputGroup.Text 
                        className="bg-white border-start-0" 
                        onClick={() => {
                          const input = document.getElementById('wd-available-from') as HTMLInputElement;
                          input?.showPicker();
                        }}
                      >
                        <FaCalendarAlt className="text-dark" />
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="wd-available-until">Until</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="datetime-local"
                        id="wd-available-until"
                        value={assignment?.dueDate || ''}
                        onChange={(e) => handleInputChange('dueDate', e.target.value)}
                      />
                      <InputGroup.Text 
                        className="bg-white border-start-0" 
                        onClick={() => {
                          const input = document.getElementById('wd-available-until') as HTMLInputElement;
                          input?.showPicker();
                        }}
                      >
                        <FaCalendarAlt className="text-dark" />
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <hr />
        
        <div className="d-flex justify-content-end gap-2">
          <Button 
            variant="outline-secondary" 
            type="button" 
            id="wd-cancel"
            onClick={handleCancel}
          > 
            Cancel 
          </Button>
          <Button 
            variant="danger" 
            type="button" 
            id="wd-save" 
            onClick={handleSave}
          > 
            Save 
          </Button>
        </div>
      </Form>
    </div>
  );
}