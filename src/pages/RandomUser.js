import React, { Component } from "react";
import API from "../utils/API";
import Header from "../components/Header";
import Table from "../components/Table";

class RandomUser extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
    search: "",
    sorted: "",
    error: "",
  };

  componentDidMount() {
    API.getRandomEmployee().then((res) => {
      console.log(res);
      this.setState({ employees: res.data.results });
    });
  }

  handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(value);
  };

  handleSubmit = (event, search) => {
    event.preventDefault();
  };

  render() {
    return (
      <>
        <Header search={this.state.search} input={this.handleInputChange} />
        <Table>
          {this.state.employees.map((employee) => (
            <tr>
              <td>
                <img
                  alt={employee.name.first}
                  src={employee.picture.thumbnail}
                />
              </td>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>
                {employee.location.city}/{employee.location.state}
              </td>
            </tr>
          ))}
        </Table>
      </>
    );
  }
}

export default RandomUser;
