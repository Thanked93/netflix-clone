import React, { useContext, useEffect, useState } from "react";
import { NETFLIX_ORIGINALS } from "../../api/requests";
import StoreContext from "../../context/StoreContext";
import { Movie } from "../../interfaces/Movie";
import { ItemEntry } from "../../reducer/movie/movieReducer";
import ListButton from "../button/ListButton";
import Container from "../movie/container/Container";
import "./Banner.css";

const Banner: React.FC = ({ children }) => {
  const [showMovie, setShowMovie] = useState(false);
  const [movie, setMovie] = useState<Movie | null>(null);
  const { movieState } = useContext(StoreContext);

  useEffect(() => {
    let m: ItemEntry = movieState.filter(
      (item: ItemEntry) => item.key === NETFLIX_ORIGINALS.url
    )[0];
    setMovie(m.items[Math.floor(Math.random() * m.items.length - 1)]);
  }, [setMovie, movieState]);

  if (!movie) return null;
  return (
    <>
      <header
        className="banner"
        style={{
          backgroundImage:
            movie.bannerImage &&
            `url("https://image.tmdb.org/t/p/original/${movie.bannerImage}")`,
        }}
      >
        <div className="banner__contents">
          <h1
            className="banner__title"
            style={{ fontSize: movie.title.length > 16 ? "5vmin" : "8vmin" }}
          >
            {movie.title}
          </h1>
          <div className="banner__buttons">
            <button
              className="banner__button"
              onClick={() => setShowMovie(true)}
            >
              Show
            </button>
            <ListButton movie={movie} />
          </div>
          <h1 className="banner__description">
            {movie?.overview?.length > 200
              ? movie.overview.substr(0, 197) + "..."
              : movie.overview}
          </h1>
        </div>
        <div className="banner--fadebottom" />
        {children}
      </header>
      {showMovie && movie && (
        <Container movie={movie} showComponent={setShowMovie} query={"tv"} />
      )}
    </>
  );
};

export default Banner;
