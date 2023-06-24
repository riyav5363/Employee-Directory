import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeList from "./components/EmployeeList";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import { EMPLOYEE_NOT_FOUND } from "./utils/constants";
import "./App.css";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchEmployees = async () => {
      setError(null);
      try {
        const response = await axios.get(
          `https://reqresss.in/api/users?page=${currentPage}`
        );
        const { total_pages, data } = response.data;
        setEmployees(data);
        setLoading(false);
        setTotalPages(total_pages);
      } catch (err) {
        setEmployees([]);
        setLoading(false);
        setError(err.message);
      }
    };
    fetchEmployees();
    setSearchQuery("");
  }, [currentPage]);

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
      {loading ? (
        <div className="flex justify-around">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          {error ? (
            <div className="flex justify-around">
            <p className="text-xl text-red-500 font-bold mb-5">
              {error}
            </p>
          </div>
          ) : (
            
              filteredEmployees.length === 0 ? (
              <div className="flex justify-around">
                <p className="text-xl text-red-500 font-bold mb-5">
                  {EMPLOYEE_NOT_FOUND}
                </p>
              </div>
              ) : (
              <EmployeeList filteredEmployees={filteredEmployees} />)
            
          )}
        </>
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
