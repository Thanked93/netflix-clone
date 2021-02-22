import React, { useContext, useEffect, useState } from "react";
import axios from "../api/axios";
import { parseResponse } from "../api/parse";
import { SEARCH_MOVIE } from "../api/requests";
import MovieList from "../components/movieList/MovieList";
import StoreContext from "../context/StoreContext";
import { Movie } from "../interfaces/Movie";

interface BoxDisplayProps {}

const BoxDisplay: React.FC<BoxDisplayProps> = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const { accountState } = useContext(StoreContext);

  useEffect(() => {
    async function fetch() {
      if (accountState.searchQuery) {
        await axios
          .get(SEARCH_MOVIE + accountState.searchQuery)
          .then((res) => {
            let fetchedMovies = res.data.results;

            if (fetchedMovies.length > 0) {
              let items: Movie[] = [];
              fetchedMovies.forEach((m: any) => {
                let item = parseResponse(m, "movie", false);
                if (item) items.push(item);
              });
              setMovieList(items);
            }
          })
          .catch((err) => console.log(err));
      }
    }
    fetch();
  }, [accountState.searchQuery, setMovieList]);
  if (movieList.length === 0) return null;
  return (
    <>
      <div
        className="boxdisplay"
        style={{ width: "80vw", margin: "10% 10% 0 10%" }}
      >
        <MovieList movies={movieList} query="movie" />
      </div>
    </>
  );
};

export default BoxDisplay;
