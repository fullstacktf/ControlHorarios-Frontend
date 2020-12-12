import axios from 'axios'

export default class Client {
  async getEmployeeData () {
    return await axios.get('https://flipday.es/api/employee/1').then(response => response.data)
  }

  async registerCompany (dto) {
    return await axios.post('https://flipday.es/api/companies/', dto).then(response => response)
  }

  async createEmployee (dto, companyID) {
    return await axios.post('https://flipday.es/api/employee/' + companyID, dto).then(response => response)
  }

  async getEmployees (companyID) {
    return await axios.get('https://flipday.es/api/companies/' + companyID + '/employees').then(response => response)
  }

  async loginUser (dto) {
    return await axios.post('https://flipday.es/api/user/login', dto).then(response => response)
  }

  async updateEmployeeStatus (companyID, userID, status) {
    const dto = {
      UserID: userID,
      Status: status
    }
    return await axios.put('https://flipday.es/api/companies/' + companyID + '/employees', dto).then(response => response)
  }

  async checkIn (id, description) {
    return await axios.post('https://flipday.es/api/employee/' + id + '/checkin', description).then(response => response)
  }

  async checkOut (userID, recordID) {
    return await axios.put(`https://flipday.es/api/employee/${userID}/checkout/${recordID}`).then(response => response)
  }

  async getSummary (employeeID) {
    return await axios.get(`https://flipday.es/api/employee/${employeeID}/summary`).then(response => response)
  }
}
