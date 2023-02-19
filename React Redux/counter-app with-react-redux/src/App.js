import { useSelector, useDispatch } from "react-redux"; // "useSelector" hook will help us to extract "counter" from the index.js in store
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter); // we are extracting the state from the index.js in store using "useSelector" hook provided by Redux
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    dispatch({ type: "DEC" });
  };
  const addBy = () => {
    dispatch({ type: "ADD", payload: 10 });
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add Value By 10</button>
    </div>
  );
}

export default App;
