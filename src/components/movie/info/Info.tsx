import React from "react";

import "./Info.css";

interface InfoProps {
  movie: any;
}

const Info: React.FC<InfoProps> = ({ movie }) => {
  return (
    <div className="info movie">
      <div className="info__item movie" style={{ color: "green" }}>
        {movie.vote_average * 10}% positive
      </div>
      <div>{movie.adult ? "18+" : ""}</div>
      <div className="info__item movie">
        {movie.release_date?.substr(0, 4) || movie.first_air_date.substr(0, 4)}
      </div>

      {movie.number_of_seasons && (
        <div className="info__item movie">
          {movie.number_of_seasons}
          {movie.number_of_seasons === 1 ? " season" : " seasons"}
        </div>
      )}
    </div>
  );
};

export default Info;
