import React, { useEffect, useState } from "react";
import axios from "../../../api/axios";
import { EXTEND_ENTRY } from "../../../api/requests";
import Info from "../info/Info";
import Listing from "../listing/Listing";
import Player from "../player/Player";
import TitleBar from "../titlebar/TitleBar";
import "./Container.css";

interface ContainerProps {
  movie: any;
  query: string;
  showComponent: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Container: React.FC<ContainerProps> = ({
  movie,
  query,
  showComponent,
}) => {
  const [fullMovie, setFullMovie] = useState<any>(null);
  console.log(query, movie);
  useEffect(() => {
    async function fetch() {
      if (fullMovie === null) {
        await axios
          .get(`/${query}/${movie.id}?${EXTEND_ENTRY.url}`)
          .then((res) => {
            setFullMovie(res.data);
          })
          .catch((err) => {});
      }
    }
    fetch();
  }, [query, setFullMovie, fullMovie, movie.id]);

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
          <Player movie={fullMovie} />
          <TitleBar movie={fullMovie} query={query} />

          <div className="container__innerWrapper movie">
            <div className="container__left movie">
              <Info movie={fullMovie} />
              <div className="container__overview movie">{movie.overview}</div>
            </div>
            <div className="container__listing">
              <Listing items={fullMovie.credits.cast} title="actor" />
              <Listing items={fullMovie.genres} title="genre" />
              <Listing items={fullMovie.created_by} title="author" />
            </div>
          </div>
        </div>
      </div>
    );
  return null;
};

export default Container;
