import React, { useContext } from "react";
import { ADD, DELETE } from "../../reducer/accountReducer";
import AccountReducerContext from "../../reducer/accountReducerContext";
import "./ListButton.css";

interface ListButtonProps {
  movie: any;
  query: string;
}

const ListButton: React.FC<ListButtonProps> = ({ movie, query }) => {
  const { state, dispatch } = useContext(AccountReducerContext);
  return (
    <>
      {state.movies.filter((savedMovie) => savedMovie.id === movie.id).length >
      0 ? (
        <button
          className="listButton remove movie__dummy"
          onClick={() => dispatch({ type: DELETE, payload: { id: movie.id } })}
        >
          Remove
        </button>
      ) : (
        <button
          className="listButton add  movie__dummy"
          onClick={() =>
            dispatch({
              type: ADD,
              payload: { movie: movie, id: movie.id, query: query },
            })
          }
        >
          Add
        </button>
      )}
    </>
  );
};

export default ListButton;
