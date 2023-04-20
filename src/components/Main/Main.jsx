import React from 'react'
import EmployeeCard from '../EmployeeCard/EmployeeCard'
import "./Main.scss"
import data from "../../assets/data/team"
import team from '../../assets/data/team'

//map function to loop over data

// const teamData = team.map(team => {
//   return 
// })

const TeamData = () => {
  return (
    <div>
      {team.map(member => (
        <div key={member.id}>
          <p>ID: {member.id}</p>
          <p>Name: {member.name}</p>
          <p>Role: {member.role}</p>
        </div>
      ))}
    </div>
  );
};

const Main = () => {
  return (
    <div className="main">
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
    </div>
  )
}

export default Main