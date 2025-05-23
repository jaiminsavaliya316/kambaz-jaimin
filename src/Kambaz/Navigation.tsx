import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router";
import { MdOutlineCalendarMonth } from "react-icons/md";

export default function KambazNavigation() {
   const location = useLocation();
   const currentPath = location.pathname;
 return (
  <ListGroup id="wd-kambaz-navigation" style={{ width: 120 }} 
       className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
    <ListGroup.Item id="wd-neu-link" target="_blank" action
       href="https://www.northeastern.edu/"
       className="bg-black border-0 text-center">
       <img src="/images/NEU.png" width="75px" /></ListGroup.Item>
    <ListGroup.Item to="/Kambaz/Account" as={Link}
       className={`${
          currentPath == "/Kambaz/Account" ? "text-center border-0 bg-white text-danger" : "text-center border-0 bg-black text-white"
        }`}>
       <FaRegCircleUser className="fs-1 text text-white" />
       Account </ListGroup.Item>
    <ListGroup.Item to="/Kambaz/Dashboard" as={Link}
       className={`${
          currentPath == "/Kambaz/Dashboard" ? "text-center border-0 bg-white text-danger" : "text-center border-0 bg-black text-white"
        }`}>
       <AiOutlineDashboard className="fs-1 text-danger" />
       Dashboard </ListGroup.Item>
    <ListGroup.Item to="/Kambaz/Courses" as={Link}
      className={`${
          currentPath == "/Kambaz/Courses" ? "bg-white text-center border-0 text-danger" : "bg-black text-center border-0 text-white"
        }`}>
       <LiaBookSolid className="fs-1 text-danger" />
       Courses </ListGroup.Item>
    <ListGroup.Item to="/Kambaz/Calendar" as={Link}
      className={`${
          currentPath == "/Kambaz/Calendar" ? "bg-white text-center border-0 text-danger" : "bg-black text-center border-0 text-white"
        }`}>
       <MdOutlineCalendarMonth className="fs-1 text-danger" />
       Calendar </ListGroup.Item>
    <ListGroup.Item to="/Kambaz/Inbox" as={Link}
      className={`${
          currentPath == "/Kambaz/Inbox" ? "d-flex flex-column align-items-center bg-white text-center border-0 text-danger" : "d-flex flex-column align-items-center d-flex bg-black text-center border-0 text-white"
        }`}
       >
       <FaInbox className="fs-1 text-danger " />
       Inbox </ListGroup.Item>
    <ListGroup.Item to="/Labs" as={Link}
       className={`${
          currentPath == "/Labs" ? "d-flex flex-column align-items-center bg-white text-center border-0 text-danger" : "d-flex flex-column align-items-center d-flex bg-black text-center border-0 text-white"
        }`}
       >
       <LiaCogSolid className="fs-1 text-danger" />
       Labs </ListGroup.Item>
  </ListGroup>
  

);}

      // Calendar, Inbox, Labs