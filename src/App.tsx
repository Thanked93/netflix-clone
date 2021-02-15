import React, { useReducer } from "react";
import "./App.css";
import Home from "./pages/Home";
import { accountReducer, initialState } from "./reducer/accountReducer";
import AccountReducerContext from "./reducer/accountReducerContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Account from "./pages/Account";

function App() {
  const [state, dispatch] = useReducer(accountReducer, initialState);
  return (
    <AccountReducerContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Router>
          <Route component={Home} exact path="/" />
          <Route path="/account" component={Account} />
        </Router>
      </div>
    </AccountReducerContext.Provider>
  );
}

export default App;
