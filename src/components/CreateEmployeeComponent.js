import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const CreateEmploymentComponent = (props) => {
  const { id } = useParams(props.id);
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");

  useEffect(() => {
    if (id !== "_add") {
      EmployeeService.getEmployeeById(id).then((res) => {
        const employee = res.data.employee;
        setEmailId(employee.emailId);
        setFirstName(employee.firstName);
        setLastName(employee.lastName);
      });
    }
  }, [id]);

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    const employee = {
      firstName,
      lastName,
      emailId,
    };

    if (id === "_add") {
      EmployeeService.createEmployee(employee).then(() => {
        navigate("/employees");
      });
    } else {
      EmployeeService.updateEmployee(id, employee).then(() => {
        navigate("/employees");
      });
    }
  };

  const changeFirstNameHandler = (event) => setFirstName(event.target.value);

  const changeLastNameHandler = (event) => setLastName(event.target.value);

  const changeEmailHandler = (event) => setEmailId(event.target.value);

  function cancel() {
    navigate("/employees");
  }

  const getTitle = () => {
    if (id === "_add") return <h3 className="text-center">Add Employee</h3>;
    else return <h3 className="text-center">Update Employee</h3>;
  };

  return (
    <div>
      <br></br>
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">{getTitle}</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>First Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={changeFirstNameHandler}
              />
            </div>

            <label>Last Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={changeLastNameHandler}
            />

            <label>Email ID:</label>
            <input
              type="email"
              className="form-control"
              placeholder="abc@example.com"
              name="emailId"
              value={emailId}
              onChange={changeEmailHandler}
            />
          </form>

          <button className="btn btn-success" onClick={saveOrUpdateEmployee}>
            Save
          </button>
          <button
            className="btn btn-danger"
            onClick={cancel}
            style={{ marginLeft: "10px" }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateEmploymentComponent;
