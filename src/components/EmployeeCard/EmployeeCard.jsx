import React from "react";
import Counter from "../Counter/Counter";
import "./EmployeeCard.scss"

const EmployeeCard = () => {
    return( 
    <div className="employee-card">
        <h2>Name</h2>
        <h2>Role</h2>
        <Counter />

    </div>)
}

export default EmployeeCard