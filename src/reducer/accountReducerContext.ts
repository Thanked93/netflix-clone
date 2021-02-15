import { createContext } from "react";
import { initialState, State } from "./accountReducer";

const AccountReducerContext = createContext<{
  state: State;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export default AccountReducerContext;
