import { useEffect, useState } from "react";
import axios from "../api/axios";
import { parseResponse } from "../api/parse";
import { Request, requests } from "../api/requests";
import { Movie } from "../interfaces/Movie";
import { ADD_ENTRY, MovieAction } from "../reducer/movie/movieReducer";

function useFetchToState(dispatch: React.Dispatch<MovieAction>) {
  const [success, setSuccess] = useState<boolean>(true);

  useEffect(() => {
    async function fetch(request: Request) {
      await axios
        .get(request.url)
        .then((res) => {
          const items: Movie[] = [];
          res.data.results.forEach((item: any) => {
            let movie = parseResponse(item, request.query, false);
            if (movie) items.push(movie);
          });
          dispatch({
            type: ADD_ENTRY,
            payload: {
              items: items,
              title: request.title,
              key: request.url,
            },
          });
        })
        .catch((e) => {
          setSuccess(false);
        });
    }
    requests.forEach(async (request: Request) => {
      await fetch(request);
    });
  }, [dispatch]);
  return success;
}

export default useFetchToState;
