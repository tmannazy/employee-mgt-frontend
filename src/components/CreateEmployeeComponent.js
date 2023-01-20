import React from "react";
import EmployeeService from "../services/EmployeeService";

class CreateEmploymentComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      emailId: "",
    };

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "add") return;
    else {
      EmployeeService.getEmployeeById(this.state.id).then((res) => {
        let employee = res.data;
        this.setState({
          firstName: employee.firstName,
          lastName: employee.lastName,
          emailId: employee.emailId,
        });
      });
    }
  }

  saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };

    if (this.state.id === "_add") {
      EmployeeService.createEmployee(employee).then((res) => {
        this.props.history.push("/employees");
      });
    } else {
      EmployeeService.updateEmployee(employee, this.state.id).then((res) => {
        this.props.history.push("/employees");
      });
    }
  };

  changeFirstNameHandler = (event) =>
    this.setState({ firstName: event.target.value });

  changeLastNameHandler = (event) =>
    this.setState({ lastName: event.target.value });

  changeEmailHandler = (event) =>
    this.setState({ emailId: event.target.value });

  cancel() {
    this.props.history.push("/employees");
  }

  getTitle() {
    if (this.state.id === "_add")
      return <h3 className="text-center">Add Employee</h3>;
    else return <h3 className="text-center">Update Employee</h3>;
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {this.getTitle()}
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>First Name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  name="firstName"
                  value={this.state.firstName}
                />
              </div>

              <label>Last Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.changeFirstNameHandler}
              />

              <label>Email ID:</label>
              <input
                type="email"
                className="form-control"
                placeholder="abc@example.com"
                name="emailId"
                value={this.state.emailId}
                onChange={this.changeEmailHandler}
              />
            </form>

            <button
              className="btn btn-success"
              onClick={this.saveOrUpdateEmployee}
            >
              Save
            </button>
            <button
              className="btn btn-danger"
              onClick={this.cancel.bind(this)}
              style={{ marginLeft: "10px" }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEmploymentComponent;
