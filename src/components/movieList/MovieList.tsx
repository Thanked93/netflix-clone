import React from "react";
import Preview from "../preview/Preview";
import "./MovieList.css";

interface MovieListProps {
  movies: any[];
  query?: string;
}

const MovieList: React.FC<MovieListProps> = ({ movies, query = "tv" }) => {
  if (movies.length === 0) return <div>No Movies found</div>;
  return (
    <div className="movielist">
      {movies.map((movie) => {
        return (
          <div key={movie.id} className="movieList__item">
            <Preview query={query} movie={movie} isLarge={true} />
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
