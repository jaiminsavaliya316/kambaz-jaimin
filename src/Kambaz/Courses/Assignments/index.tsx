import { InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap';
import { CiMenuKebab } from 'react-icons/ci';
import { FaSearch, FaPlus, FaCheckCircle } from 'react-icons/fa';
import { FaGripVertical } from 'react-icons/fa6';
import { LuNotebookPen } from 'react-icons/lu';

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <InputGroup className="w-50">
          <InputGroup.Text><FaSearch /></InputGroup.Text>
          <FormControl
            placeholder="Search for Assignments"
            aria-label="Search for Assignments"
            id="wd-search-assignment"
          />
        </InputGroup>
        <div>
          <Button variant="outline-secondary" className="me-2">
            <FaPlus className="me-1" /> Group
          </Button>
          <Button variant="danger">
            <FaPlus className="me-1" /> Assignment
          </Button>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">ASSIGNMENTS</h3>
        <span className="text-muted">40% of Total</span>
        <Button variant="link" className="p-0">
          <FaPlus />
        </Button>
      </div>


    <ListGroup as="ul" variant="flush">
      <ListGroup.Item
        as="li"
        className="d-flex align-items-center border-0 border-start border-4 border-success ps-3 py-3"
      >
        <div className="d-flex align-items-center me-3">
          <FaGripVertical className="text-secondary" />
          <LuNotebookPen className="text-success ms-2" />
        </div>
        <div className="flex-grow-1">
          <div className="fw-bold">A1</div>
          <div className="small text-muted ps-1">
            <span className="text-success">Multiple Modules</span> |{' '}
            <strong>Not available until</strong> May 6 at 12:00am<br/>
            <strong>Due</strong> May 13 at 11:59pm | 100 pts
          </div>
        </div>
        <div className="d-flex align-items-center">
          <FaCheckCircle className="text-success me-3" />
          <CiMenuKebab className="text-muted" />
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex align-items-center border-0 border-start border-4 border-success ps-3 py-3"
      >
        <div className="d-flex align-items-center me-3">
          <FaGripVertical className="text-secondary" />
          <LuNotebookPen className="text-success ms-2" />
        </div>
        <div className="flex-grow-1">
          <div className="fw-bold">A2</div>  
          <div className="small text-muted ps-1">
            <span className="text-success">Multiple Modules</span> |{' '}
            <strong>Not available until</strong> May 13 at 12:00am<br/>
            <strong>Due</strong> May 20 at 11:59pm | 100 pts
          </div>
        </div>
        <div className="d-flex align-items-center">
          <FaCheckCircle className="text-success me-3" />
          <CiMenuKebab className="text-muted" />
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex align-items-center border-0 border-start border-4 border-success ps-3 py-3"
      >
        <div className="d-flex align-items-center me-3">
          <FaGripVertical className="text-secondary" />
          <LuNotebookPen className="text-success ms-2" />
        </div>
        <div className="flex-grow-1">
          <div className="fw-bold">A3</div>
          <div className="small text-muted ps-1">
            <span className="text-success">Multiple Modules</span> |{' '}
            <strong>Not available until</strong> May 20 at 12:00am<br/>
            <strong>Due</strong> May 27 at 11:59pm | 100 pts
          </div>
        </div>
        <div className="d-flex align-items-center">
          <FaCheckCircle className="text-success me-3" />
          <CiMenuKebab className="text-muted" />
        </div>
      </ListGroup.Item>


    </ListGroup>
    </div>
  );
}
