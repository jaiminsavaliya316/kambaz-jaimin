import { useState } from "react";
import { Row, Col } from "react-bootstrap";
export default function ArrayStateVariable() {
 const [array, setArray] = useState([1, 2, 3, 4, 5]);
 const addElement = () => {
   setArray([...array, Math.floor(Math.random() * 100)]);
 };
 const deleteElement = (index: number) => {
   setArray(array.filter((_item, i) => i !== index));
 };
 return (
  <div id="wd-array-state-variables">
   <h2>Array State Variable</h2>
   <button className="btn btn-success" onClick={addElement}>Add Element</button>
    {array.map((item, index) => (
     <Row key={index}> 
      <Col className="text-start">{item}
      <button className="mx-5 my-1 btn btn-danger" onClick={() => deleteElement(index)}>
       Delete</button>
      </Col>
     </Row>))}
    <hr/></div>);}