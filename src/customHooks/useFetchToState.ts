import { useEffect, useState } from "react";
import axios from "../api/axios";
import { Request, requests } from "../api/requests";
import { ADD_ENTRY, MovieAction } from "../reducer/movie/movieReducer";

function useFetchToState(dispatch: React.Dispatch<MovieAction>) {
  const [success, setSuccess] = useState<boolean>(true);

  useEffect(() => {
    async function fetch(request: Request) {
      await axios
        .get(request.url)
        .then((res) => {
          dispatch({
            type: ADD_ENTRY,
            payload: {
              items: res.data.results,
              query: request.query,
              title: request.title,
              key: request.url,
              isLarge: request.isLarge,
            },
          });
        })
        .catch((_) => {
          setSuccess(false);
        });
    }
    requests.forEach((request: Request) => {
      fetch(request);
    });
  }, [dispatch]);
  return success;
}

export default useFetchToState;
