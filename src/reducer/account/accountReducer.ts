export const SET_NAME = "SET_NAME";
export const ADD = "ADD";
export const DELETE = "DELETE";

interface Action {
  type: string;
  payload: any;
}

interface Movie {
  movie: any;
  query: string;
  id: number;
}

export type AccountAction = Action;

export type AccountState = {
  name: string;
  movies: Movie[];
};

export type AccountStateType = AccountState;

export const initialAccountState = {
  name: "Guest",
  movies: [],
};

export const accountReducer = (
  state: AccountStateType,
  action: AccountAction
) => {
  switch (action.type) {
    case SET_NAME: {
      return { ...state, name: action.payload.name };
    }
    case ADD: {
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: action.payload.id,
            query: action.payload.query,
            movie: action.payload.movie,
          },
        ],
      };
    }
    case DELETE: {
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload.id),
      };
    }
    default:
      return state;
  }
};