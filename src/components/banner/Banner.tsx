import React, { useState } from "react";
import ListButton from "../button/ListButton";
import Container from "../movie/container/Container";
import "./Banner.css";

interface BannerProps {
  movie: any;
}

const Banner: React.FC<BannerProps> = ({ movie }) => {
  const [showMovie, setShowMovie] = useState(false);
  if (!movie) return null;
  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            movie.backdrop_path &&
            `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner__buttons">
            <button
              className="banner__button"
              onClick={() => setShowMovie(true)}
            >
              Show
            </button>
            <ListButton movie={movie} query="tv" />
          </div>
          <h1 className="banner__description">
            {movie?.overview?.length > 200
              ? movie.overview.substr(0, 197) + "..."
              : movie.overview}
          </h1>
        </div>
        <div className="banner--fadebottom" />
      </header>
      {showMovie && movie && (
        <Container movie={movie} showComponent={setShowMovie} query={"tv"} />
      )}
    </>
  );
};

export default Banner;
