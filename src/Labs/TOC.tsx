import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
export default function TOC() {
 return (
   <Nav variant="pills">
    <NavLink className="nav-link" to="/Labs/Lab1">Lab 1</NavLink>
    <NavLink className="nav-link" to="/Labs/Lab2">Lab 2</NavLink>
    <NavLink className="nav-link" to="/Labs/Lab3">Lab 3</NavLink>
    <NavLink className="nav-link" to="/Kambaz">Kambaz</NavLink>
    <NavLink className="nav-link" to="https://github.com/jaiminsavaliya316/kambaz-jaimin">My GitHub</NavLink>
   </Nav>
);}
