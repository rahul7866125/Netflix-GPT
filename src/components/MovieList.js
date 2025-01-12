import React from "react";
import MovieCard from "./MovieCard";
import '../utils/common.css';


const MovieList = ({ title, moviesList }) => {
  return (
    <div className="pr-0 md:px-6">
      <h1 className="font-bold text-white text-xl py-4">{title}</h1>
      <div className="flex overflow-scroll hide-scrollbar">
        <div className="flex">
          {moviesList?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
