import React from "react";
import Counter from "../Counter/Counter";
import "./EmployeeCard.scss"


const EmployeeCard = ({ name, role }) => {
    return (
      <div className="employee-card">
        <h2>{name}</h2>
        <p>{role}</p>
        <Counter />
      </div>
    );
  };
  
  export default EmployeeCard;