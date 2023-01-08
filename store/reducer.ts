import { CombinedState, AnyAction, combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { modal, theme } from "./modules";

export interface ReducerState {
  theme: theme.StateType;
  modal: modal.StateType;
}

const rootReducer = (state: ReducerState, action: AnyAction): CombinedState<ReducerState> => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default: {
      const combinedReducer = combineReducers({
        theme: theme.reducer,
        modal: modal.reducer,
      });
      return combinedReducer(state, action);
    }
  }
};
export default rootReducer;
