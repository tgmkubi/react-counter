import "./App.css";
import { useState } from "react";
import { CounterContext } from "./store/counter-context.jsx";
import Div from "./components/Div.jsx";

function App() {
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
      <h1>React Counter</h1>
      <Div />
    </CounterContext.Provider>
  );
}

export default App;
