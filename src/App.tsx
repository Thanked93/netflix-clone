import React, { useEffect, useReducer } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import StoreContext from "./context/StoreContext";
import useFetchToState from "./customHooks/useFetchToState";
import Account from "./pages/account/Account";
import BoxDisplay from "./pages/BoxDisplay";
import ErrorPage from "./pages/error/ErrorPage";
import Home from "./pages/home/Home";
import {
  accountReducer,
  initialAccountState,
} from "./reducer/account/accountReducer";
import { initialMovieState, movieReducer } from "./reducer/movie/movieReducer";

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
          <Navbar />
          <Switch>
            <Route component={Home} exact path="/" />
            <Route path="/account" component={Account} />
            <Route path="/browse" component={BoxDisplay} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      </div>
    </StoreContext.Provider>
  );
}

export default App;
