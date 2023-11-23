import "./App.css";
import CounterContextProvider from "./store/counter-context.jsx";
import Div from "./components/Div.jsx";

function App() {
  return (
    <CounterContextProvider>
      <h1>React Counter</h1>
      <Div />
    </CounterContextProvider>
  );
}

export default App;
