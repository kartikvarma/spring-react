import axios from "axios";

export function getEmployees(){
  return axios.get(`/api/v1/employees`);
}

export function getEmployeeById(id) {
  return axios.get(`/api/v1/employee/${id}`);
}