import React, { useState } from "react";
import searchIcon from "./../assets/icons/search-icon.png";

const SearchField = ({ searchTerm, onInputChange, onSearch }) => {
  //   const inputStyle = {
  //     backgroundImage: `url(${searchIcon})`,
  //     backgroundPosition: "right 10px center",
  //     backgroundSize: "32px 32px",
  //     backgroundRepeat: "no-repeat",
  //     paddingLeft: "10px",
  //   };

  return (
    <div className="inline-flex justify-center items-center gap-2 bg-dark-blue border-black border-2 rounded-md p-1">
      <input
        type="text"
        placeholder="Search Movie"
        className="p-2 focus:border-transparent transition duration-300"
        value={searchTerm}
        onChange={(e) => onInputChange(e.target.value)}
      />
      <img
        src={searchIcon}
        alt="searchIcon"
        onClick={onSearch}
        className="w-8 h-8 cursor-pointer"
      />
    </div>
  );
};

export default SearchField;
