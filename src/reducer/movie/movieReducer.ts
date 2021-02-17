import { Movie } from "../../interfaces/Movie";

export const ADD_ENTRY = "ADD_ENTRY";
export const EXPAND_MOVIE = "EXPAND_MOVIE";

export interface MovieAction {
  type: typeof ADD_ENTRY;
  payload: Item;
}

export interface MovieState {
  movies: Item[];
}

export type MovieStateType = MovieState;

export interface Item {
  key: string; // url which will be the identifier
  items: Movie[]; // Movie Data
  query: string; // Query each movie needs to know that
  title: string; // title for the row
  isLarge: boolean;
}

export const initialMovieState: MovieStateType = { movies: [] };

export const movieReducer = (state: MovieStateType, action: MovieAction) => {
  console.log("jer");
  switch (action.type) {
    case ADD_ENTRY: {
      const { key, query, title, items, isLarge } = action.payload;
      return {
        movies: [
          ...state.movies,
          {
            key: key,
            query: query,
            title: title,
            items: items,
            isLarge: isLarge,
          },
        ],
      };
    }

    default:
      return { ...state };
  }
};
