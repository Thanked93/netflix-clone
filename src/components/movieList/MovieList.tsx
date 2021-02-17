import React from "react";
import Preview from "../preview/Preview";
import "./MovieList.css";

interface MovieListProps {
  movies: any[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  console.log("ere");
  return (
    <div className="movielist">
      {movies.map((movie) => {
        return (
          <div key={movie.movie.id} className="movieList__item">
            <Preview
              query={"tv"}
              movie={movie.movie}
              isLarge={true}
              onlyPreview={true}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
