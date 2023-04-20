import React from 'react';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import './Main.scss';
import team from '../../assets/data/team';

const Main = () => {
  return (
    <div className="main">
      {team.map((member) => (
        <EmployeeCard
          key={member.id}
          name={member.name}
          role={member.role}
        />
      ))}
    </div>
  );
};

export default Main;
