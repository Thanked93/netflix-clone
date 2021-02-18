import React, { useReducer } from "react";
import Home from "./pages/home/Home";
import {
  accountReducer,
  initialAccountState,
} from "./reducer/account/accountReducer";
import StoreContext from "./context/StoreContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Account from "./pages/account/Account";
import { initialMovieState, movieReducer } from "./reducer/movie/movieReducer";
import useFetchToState from "./customHooks/useFetchToState";
import BoxDisplay from "./pages/BoxDisplay";
import Navbar from "./components/navbar/Navbar";
import ErrorPage from "./pages/error/ErrorPage";

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
    return <ErrorPage errorMessage="Could not fetch the Data!" />;
  }
  return (
    <StoreContext.Provider
      value={{ movieState, movieDispatch, accountState, accountDispatch }}
    >
      <div className="App">
        <Router>
          <Navbar />
          <Route component={Home} exact path="/" />
          <Route path="/account" component={Account} />
          <Route path="/browse" component={BoxDisplay} />
          <Route component={ErrorPage} />
        </Router>
      </div>
    </StoreContext.Provider>
  );
}

export default App;
