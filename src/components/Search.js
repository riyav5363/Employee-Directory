import React from "react";

const Search = ({ searchQuery, handleSearchChange }) => {
  return (
    <div className="mb-3">
      <div className="relative mb-4 flex w-full flex-wrap items-stretch">
        <input
          type="text"
          className="relative m-0 -mr-0.5 block flex-auto rounded-l border border-solid border-neutral-300  bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Search by First Name"
          value={searchQuery}
          onChange={handleSearchChange}
        />

        
      </div>
    </div>
  );
};

export default Search;
