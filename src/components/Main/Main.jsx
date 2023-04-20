import React from 'react'
import EmployeeCard from '../EmployeeCard/EmployeeCard'
import "./Main.scss"
import data from "../../assets/data/team"
import team from '../../assets/data/team'

//map function to loop over data

// const teamData = team.map(team => {
//   return 
// })

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