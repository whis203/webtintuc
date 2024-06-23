import axios from "axios";

const API_URL = "http://localhost:5454/api/v1/employee";

class EmployeeService {
  saveEmployee(employee) {
    return axios.post(`${API_URL}/save`, employee);
  }
  login(employee) {
    return axios.post(`${API_URL}/login`, employee);
  }
  //   getAllCustomers() {
  //     return axios.get(`${API_URL}/getAllCustomer`);
  //   }

  updateEmployee(employee) {
    return axios.put(`${API_URL}/update`, employee);
  }
  changePassword(changePasswordDTO) {
    return axios.put(`${API_URL}/change-password`, changePasswordDTO);
  }
}

export default new EmployeeService();
