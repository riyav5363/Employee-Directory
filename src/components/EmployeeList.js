import React from "react";
import Employee from "./Employee";

const EmployeeList = ({ filteredEmployees }) => {
  return (
    <div className="flex flex-wrap justify-center mt-6 gap-6 lg:gap-x-32 lg:gap-y-20">
      {filteredEmployees.map((employee) => (
        <Employee key={employee.id} employee={employee} />
      ))}
    </div>
  );
};

export default EmployeeList;
