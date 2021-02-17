import React, { useReducer } from "react";
import Home from "./pages/Home";
import {
  accountReducer,
  initialAccountState,
} from "./reducer/account/accountReducer";
import StoreContext from "./context/StoreContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Account from "./pages/Account";
import { initialMovieState, movieReducer } from "./reducer/movie/movieReducer";
import useFetchToState from "./customHooks/useFetchToState";

function App() {
  const [accountState, accountDispatch] = useReducer(
    accountReducer,
    initialAccountState
  );
  const [movieState, movieDispatch] = useReducer(
    movieReducer,
    initialMovieState
  );
  let show = useFetchToState(movieDispatch);

  if (!show) {
    return null;
  }
  return (
    <StoreContext.Provider
      value={{ movieState, movieDispatch, accountState, accountDispatch }}
    >
      <div className="App">
        <Router>
          <Route component={Home} exact path="/" />
          <Route path="/account" component={Account} />
        </Router>
      </div>
    </StoreContext.Provider>
  );
}

export default App;
