import React, { useEffect, useState } from "react";
import axios from "../../../api/axios";
import { parseResponse } from "../../../api/parse";
import { EXTEND_ENTRY } from "../../../api/requests";
import { Movie } from "../../../interfaces/Movie";
import Info from "../info/Info";
import Listing from "../listing/Listing";
import Player from "../player/Player";
import TitleBar from "../titlebar/TitleBar";
import "./Container.css";

interface ContainerProps {
  movie: Movie;
  query: string;
  showComponent: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Container: React.FC<ContainerProps> = ({
  movie,
  query,
  showComponent,
}) => {
  const [fullMovie, setFullMovie] = useState<Movie | null>(null);
  useEffect(() => {
    async function fetch() {
      if (fullMovie === null) {
        await axios
          .get(`/${movie.query}/${movie.id}?${EXTEND_ENTRY.url}`)
          .then((res) => {
            const item = parseResponse(res.data, movie.query, true);

            setFullMovie(item);
          })
          .catch((err) => {});
      }
    }
    if (!movie.isExtended) fetch();
  }, [query, setFullMovie, fullMovie, movie]);

  useEffect(() => {
    function closeComponent(e: any) {
      if (!e.target.className.includes("movie")) {
        showComponent(false);
      }
    }
    window.addEventListener("click", closeComponent);
    return () => window.removeEventListener("click", closeComponent);
  }, [showComponent]);

  if (fullMovie)
    return (
      <div className="container">
        <div className="container__wrapper movie">
          <div
            className="container__close"
            onClick={() => showComponent(false)}
          >
            x
          </div>
          <Player
            movieUrl={fullMovie.extended.videos[0]}
            imageUrl={fullMovie.image}
          />
          <TitleBar movie={fullMovie} />

          <div className="container__innerWrapper movie">
            <div className="container__left movie">
              <Info movie={fullMovie} />
              <div className="container__overview movie">{movie.overview}</div>
            </div>
            <div className="container__listing">
              <Listing items={fullMovie.extended.actors} title="actor" />
              <Listing items={fullMovie.extended.genres} title="genre" />
              <Listing items={fullMovie.extended.author} title="author" />
            </div>
          </div>
        </div>
      </div>
    );
  return null;
};

export default Container;
