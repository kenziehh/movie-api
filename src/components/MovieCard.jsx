import React from "react";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="border-white bg-darkBlue inline-block" key={imdbID}>
      {/* <div>
        <p className="text-black">{Year}</p>
      </div> */}

      <div>
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
        className="w-[1435px] h-[400px] flex items-center justify-center"/>
      </div>

      <div>
        <span className="text-white">{Year}</span>
        <div className="text-white">{Type}</div>
        <h3 className="text-white">{Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
