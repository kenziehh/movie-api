import React from "react";
import searchIcon from "./../assets/icons/search-icon.png";

const SearchField = () => {
  const inputStyle = {
    backgroundImage: `url(${searchIcon})`,
    backgroundPosition: "right 10px center",
    backgroundSize: "32px 32px",
    backgroundRepeat: "no-repeat",
    paddingLeft: "10px",
  };

  return (
    <div className="flex justify-center mt-6">
      <div className="inline-flex justify-center items-center gap-2 bg-dark-blue border-black border-2 rounded-md p-1">
        <input
          type="text"
          placeholder="Search Movie"
          className="p-2 focus:border-transparent transition duration-300"
          style={inputStyle}
        />
      </div>
    </div>
  );
};

export default SearchField;
