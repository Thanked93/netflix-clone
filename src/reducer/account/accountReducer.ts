import { Movie } from "../../interfaces/Movie";

export const SET_NAME = "SET_NAME";
export const ADD = "ADD";
export const DELETE = "DELETE";
export const CHANGE_QUERY = "CHANGE_QUERY";

interface Action {
  type: string;
  payload: DeleteAction | NameAction | AddAction | ChangeQueryAction;
}

interface DeleteAction {
  id: number;
}
interface AddAction {
  movie: Movie;
}
interface ChangeQueryAction {
  searchQuery: string;
}
interface NameAction {
  name: string;
}

export type AccountAction = Action;

export type AccountState = {
  name: string;
  searchQuery: string;
  movies: Movie[];
};

export type AccountStateType = AccountState;

export const initialAccountState: AccountStateType = {
  name: "Guest",
  searchQuery: "",
  movies: [],
};

export const accountReducer = (
  state: AccountStateType,
  action: AccountAction
): AccountStateType => {
  switch (action.type) {
    case SET_NAME: {
      const { name } = action.payload as NameAction;
      return { ...state, name: name };
    }
    case ADD: {
      const { movie } = action.payload as AddAction;
      return {
        ...state,
        movies: [...state.movies, movie],
      };
    }
    case DELETE: {
      const { id } = action.payload as DeleteAction;
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== id),
      };
    }
    case CHANGE_QUERY: {
      const { searchQuery } = action.payload as ChangeQueryAction;
      return { ...state, searchQuery: searchQuery };
    }
    default:
      return { ...state };
  }
};
