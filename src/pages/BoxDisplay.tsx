import React, { useContext, useEffect, useState } from "react";
import axios from "../api/axios";
import { parseResponse } from "../api/parse";
import { SEARCH_MOVIE } from "../api/requests";
import MovieList from "../components/movieList/MovieList";
import StoreContext from "../context/StoreContext";

interface BoxDisplayProps {}

const BoxDisplay: React.FC<BoxDisplayProps> = () => {
  const [movieList, setMovieList] = useState<any[]>([]);
  const { accountState } = useContext(StoreContext);

  useEffect(() => {
    async function fetch() {
      if (accountState.searchQuery) {
        await axios
          .get(SEARCH_MOVIE + accountState.searchQuery)
          .then((res) => {
            let fetchedMovies = res.data.results;
            console.log(fetchedMovies);
            if (fetchedMovies.length > 0) {
              setMovieList(parseResponse(fetchedMovies));
            }
          })
          .catch((err) => console.log(err));
      }
    }
    fetch();
  }, [accountState.searchQuery, setMovieList]);

  return (
    <>
      <div className="boxdisplay" style={{ margin: "5% 10% 0 5%" }}>
        <MovieList movies={movieList} query="movie" />
      </div>
    </>
  );
};

export default BoxDisplay;
