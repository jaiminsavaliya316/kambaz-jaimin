import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENT_API = `${REMOTE_SERVER}/api/assignments`;

export const updateAssignmentInServer = async (assignment: any) => {
  const { data } = await axios.put(`${ASSIGNMENT_API}/${assignment._id}`, assignment);
  return data;
};

export const deleteAssignmentFromServer = async (assignmentId: string) => {
 const response = await axios.delete(`${ASSIGNMENT_API}/${assignmentId}`);
 return response.data; 
};

export const addAssignmentToServer = async (assignment: any) => {
  const { data } = await axios.post(`${ASSIGNMENT_API}/new`, assignment);
  return data;
};