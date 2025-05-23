import { MdBarChart, MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { Button } from "react-bootstrap";
import { FiTarget } from "react-icons/fi";
import { GrAnnounce } from "react-icons/gr";
import { TbBell } from "react-icons/tb";
{/* Find more icons */}
export default function CourseStatus() {
 return (
   <div id="wd-course-status" style={{ width: "350px" }}>
     <h2>Course Status</h2>
     <div className="d-flex">
       <div className="w-50 pe-1">
         <Button variant="secondary" size="lg" className="w-100 text-nowrap ">
           <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </Button> </div>
       <div className="w-50">
         <Button variant="success" size="lg" className="w-100">
           <FaCheckCircle className="me-2 fs-5" /> Publish </Button> </div>
     </div>
     <br />
     <Button variant="light" size="lg" className="w-100 mt-1 text-start">
       <BiImport className="me-2 fs-5" /> Import Existing Content </Button>
     <Button variant="light" size="lg" className="w-100 mt-1 text-start">
       <FiTarget  className="me-2 fs-5" /> Choose Home Page </Button>
      <Button variant="light" size="lg" className="w-100 mt-1 text-start">
       <MdBarChart className="me-2 fs-5" /> View Course Notifications </Button>
      <Button variant="light" size="lg" className="w-100 mt-1 text-start">
       <GrAnnounce  className="me-2 fs-5" /> New Announcement </Button>
      <Button variant="light" size="lg" className="w-100 mt-1 text-start">
       <MdBarChart className="me-2 fs-5" /> New Analytics </Button>
      <Button variant="light" size="lg" className="w-100 mt-1 text-start">
       <TbBell  className="me-2 fs-5" /> View Course Notifications </Button>
      
     {/* Complete the rest of the buttons */}
   </div> );}