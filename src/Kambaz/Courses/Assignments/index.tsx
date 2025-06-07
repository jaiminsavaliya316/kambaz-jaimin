import { InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap';
import { CiMenuKebab } from 'react-icons/ci';
import { FaSearch, FaPlus, FaCheckCircle, FaTrash } from 'react-icons/fa';
import { FaChevronDown, FaGripVertical } from 'react-icons/fa6';
import { LuNotebookPen } from 'react-icons/lu';
import {  useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { deleteAssignment} from './reducer';

export default function Assignments() {
  const { cid } = useParams();
  const {assignments} = useSelector((state: any) => state.assignmentreducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div id="wd-assignments" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <InputGroup className="w-50">
          <InputGroup.Text><FaSearch /></InputGroup.Text>
          <FormControl
            placeholder="Search..."
            aria-label="Search for Assignments"
            id="wd-search-assignment"
          />
        </InputGroup>
        <div>
          <Button variant="outline-secondary" className="me-2">
            <FaPlus className="me-1" /> Group
          </Button>
          <Button 
            variant="danger" 
            onClick={()=>navigate(`/Kambaz/Courses/${cid}/Assignments/new`)}>
            <FaPlus className="me-1" /> Assignment
          </Button>
        </div>
      </div>

      <div className="d-flex align-items-center mb-3">
        <div className="d-flex align-items-center me-auto">
          <FaGripVertical className="text-secondary me-2" />
          <FaChevronDown className="text-secondary me-2" />
          <span className="fw-bold">ASSIGNMENTS</span>
        </div>

        <Button variant="outline-secondary" size="sm" className="rounded-pill me-2"> 
          40% of Total
        </Button>

        <Button variant="link" className="p-2 text-secondary">
          <FaPlus />
        </Button>

        <Button variant="link" className="p-2 text-secondary">
          <CiMenuKebab />
        </Button>
      </div>

      <ListGroup as="ul" variant="flush">
        {assignments.filter((assignment: any) => assignment.course === cid).map((assignment: any) => (
          <ListGroup.Item as="li" className="d-flex align-items-center border-0 border-start border-4 border-success ps-3 py-3">
            <div className="d-flex align-items-center me-3">
              <FaGripVertical className="text-secondary" />
              <LuNotebookPen className="text-success ms-2" />
            </div>
            <div className="flex-grow-1">
              <div className="fw-bold ps-1"> 
                <a href={`#/Kambaz/Courses/${assignment.course}/Assignments/${assignment._id}`} className="wd-assignment-link text-black text-decoration-none" > {assignment.title}</a></div>
              <div className="small text-muted ps-1">
                <span className="text-danger">Multiple Modules</span> |{' '}
                <strong>{(new Date(assignment.startDate)<=new Date())?'Start Date':'Not available until'}</strong> {new Date(assignment.startDate).toLocaleString('en-us', { day :"numeric", month:"short", hour: 'numeric', minute: 'numeric', hour12: true})} | <br/>
                <strong>Due</strong> {new Date(assignment.dueDate).toLocaleString('en-us', { day :"numeric", month:"short", hour: 'numeric', minute: 'numeric', hour12: true})} | {assignment.points} pts
              </div>
            </div>
            <div className="d-flex align-items-center">
              <FaTrash className="text-danger me-2 mb-1" onClick={() => dispatch(deleteAssignment(assignment))}/>
              <FaCheckCircle className="text-success me-3" />
              <CiMenuKebab className="text-muted" />
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
