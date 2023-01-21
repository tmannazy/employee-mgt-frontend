import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const ViewEmployeeComponent = (props) => {
  const { id } = useParams(props.id);
  const [employee, setEmployee] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((res) => {
      setEmployee(res.data.employee);
    });
  }, [id]);

  const cancel = () => {
    navigate("/employees");
  };

  return (
    <>
      <br></br>
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center">View Employee Details</h3>
        <div className="card-body">
          <div className="row">
            <label className="row-">Employee First Name:</label>
            <span>{employee.firstName}</span>
          </div>
          <div className="row">
            <label>Employee Last Name:</label>
            <span>{employee.lastName}</span>
          </div>
          <div className="row">
            <label>Employee Email ID:</label>
            <span>{employee.emailId}</span>
          </div>
          <button
            style={{ margin: "0 100px" }}
            className="btn btn-outline-danger"
            onClick={cancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default ViewEmployeeComponent;
