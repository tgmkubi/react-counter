import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const CounterContext = createContext({
  count: 0,
  increase: () => {},
  decrease: () => {},
  reset: () => {},
});

function counterReducer(state, action) {
  if (action.type === "INCREASE") {
    return {
      count: state.count + 1,
    };
  }
  if (action.type === "DECREASE") {
    return {
      count: state.count - 1,
    };
  }
  if (action.type === "RESET") {
    return {
      count: 0,
    };
  }

  return state;
}

export default function CounterContextProvider({ children }) {
  const [counterState, counterStateDispatch] = useReducer(counterReducer, {
    count: 0,
  });

  function increaseCounter() {
    counterStateDispatch({
      type: "INCREASE",
    });
  }
  function decreaseCounter() {
    counterStateDispatch({
      type: "DECREASE",
    });
  }
  function resetCounter() {
    counterStateDispatch({
      type: "RESET",
    });
  }
  
  const ctxValue = {
    count: counterState.count,
    increase: increaseCounter,
    decrease: decreaseCounter,
    reset: resetCounter,
  };

  return (
    <CounterContext.Provider value={ctxValue}>
      {children}
    </CounterContext.Provider>
  );
}

CounterContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
