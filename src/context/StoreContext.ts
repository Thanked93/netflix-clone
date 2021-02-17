import { createContext } from "react";
import {
  initialAccountState,
  AccountStateType,
} from "../reducer/account/accountReducer";
import {
  initialMovieState,
  MovieAction,
  MovieStateType,
} from "../reducer/movie/movieReducer";

const StoreContext = createContext<{
  accountState: AccountStateType;
  accountDispatch: React.Dispatch<any>;
  movieState: MovieStateType;
  movieDispatch: React.Dispatch<MovieAction>;
}>({
  accountState: initialAccountState,
  accountDispatch: () => null,
  movieState: initialMovieState,
  movieDispatch: () => null,
});

export default StoreContext;
