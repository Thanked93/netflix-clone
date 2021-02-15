import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import ListButton from "../button/ListButton";
import Container from "../movie/container/Container";
import "./Banner.css";

const Banner: React.FC = () => {
  const [showMovie, setShowMovie] = useState(false);
  const [movie, setMovie] = useState<any>([]);
  const [fetchedExtended, setFetchExtended] = useState<boolean>(false);

  async function toggleMovie() {
    if (!fetchedExtended) {
      await axios
        .get(`/tv/${movie.id}?${requests.fetchMovie}`)
        .then((res) => {
          setMovie(res.data);
          setFetchExtended(true);
        })
        .catch((err) => {});
    }
    setShowMovie(!showMovie);
  }

  useEffect(() => {
    async function fetch() {
      await axios
        .get(requests.fetchNetflixOriginals)
        .then((res) => {
          setMovie(
            res.data.results[
              Math.floor(Math.random() * (res.data.results.length - 2))
            ]
          );
        })
        .catch((err) => {});
    }
    fetch();
  }, []);

  if (movie === null) return null;
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
            <button className="banner__button" onClick={toggleMovie}>
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
