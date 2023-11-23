import { useContext } from "react";
import { CounterContext } from "../store/counter-context.jsx";

export default function Div() {
  const { count, increase, decrease, reset } = useContext(CounterContext);

  return (
    <div className="card">
      <h1>{count}</h1>
      <button onClick={() => decrease()}>Decrese</button>
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => increase()}>Increse</button>
    </div>
  );
}
