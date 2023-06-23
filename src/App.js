import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeList from "./components/EmployeeList";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import { EMPLOYEE_NOT_FOUND } from "./utils/constants";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchEmployees();
    setSearchQuery("");
  }, [currentPage]);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        `https://reqres.in/api/users?page=${currentPage}`
      );
      const { total_pages, data } = response.data;
      setEmployees(data);
      setTotalPages(total_pages);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };
  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.first_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <div className="flex flex-col sm:flex-row justify-evenly">
        <p className="text-3xl text-black font-bold mb-5">Employee Directory</p>
        <Search
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
        />
      </div>
      {filteredEmployees.length === 0 ? (
        <div className="flex justify-around">
          <p className="text-xl text-red-500 font-bold mb-5">
            {EMPLOYEE_NOT_FOUND}
          </p>
        </div>
      ) : (
        <EmployeeList filteredEmployees={filteredEmployees} />
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
