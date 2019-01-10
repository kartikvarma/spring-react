import axios from "axios";

export function getEmployees() {
  return axios.get(`/api/v1/employees`);
}

export function getEmployeeById(id) {
  return axios.get(`/api/v1/employee/${id}`);
}

export function saveEmployee(data) {
  return axios.post('/api/v1/saveEmployee', data , { headers : {'Accept': 'application/json','Content-Type': 'application/json' }});
}

export function cancel() {
  return axios.CancelToken.source();
}