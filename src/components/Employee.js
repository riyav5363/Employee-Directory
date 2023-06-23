import React from 'react';

const Employee = ({ employee }) => {
  return (
    <div key={employee.id} className="bg-white p-4 shadow-md rounded-md flex flex-col items-center">
      <div className="absolute bg-black z-10 text-white h-12 w-12 border-10 -mr-44 rounded-3xl -mt-6 pl-5 pt-3"><p className="text-lg font-semibold">{employee.id}</p></div>
          <img
            src={employee.avatar}
            alt={employee.first_name}
            className="w-40 h-40 object-cover rounded-3xl"
          />
          <p className="text-lg font-semibold mt-2">{employee.first_name} {employee.last_name}</p>
          <span>{employee.email}</span>
        </div>
  );
};

export default Employee;