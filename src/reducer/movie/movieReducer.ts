import { Movie } from "../../interfaces/Movie";

export const ADD_ENTRY = "ADD_ENTRY";

export interface MovieAction {
  type: typeof ADD_ENTRY;
  payload: ItemEntry | ExtendEntryAction;
}

interface ExtendEntryAction {
  movie: Movie;
  url: string;
}

export interface MovieState {
  movies: ItemEntry[];
}

export type MovieStateType = Array<ItemEntry>;

export interface ItemEntry {
  key: string; // url which will be the identifier
  items: Movie[]; // Movie Data
  title: string; //
}

export const initialMovieState: MovieStateType = [];

export const movieReducer = (state: MovieStateType, action: MovieAction) => {
  switch (action.type) {
    case ADD_ENTRY: {
      const { key, title, items } = action.payload as ItemEntry;
      return [...state, { key, title, items }];
    }

    default:
      return [...state];
  }
};
