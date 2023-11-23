import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CounterContext = createContext({
  count: 0,
  increase: () => {},
  decrease: () => {},
  reset: () => {},
});

export default function CounterContextProvider({ children }) {
  const [counterState, setCounterState] = useState({
    count: 0,
  });

  function increaseCounter() {
    setCounterState((prevState) => ({ count: prevState.count + 1 }));
  }
  function decreaseCounter() {
    setCounterState((prevState) => ({ count: prevState.count - 1 }));
  }
  function resetCounter() {
    setCounterState({ count: 0 });
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
