import { useState, useReducer } from 'react';
import './App.css';

  function reducer(state, action) {
    return { count: state.count - 1 }
  }

function App() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, {count: 0})

  function decrementCount() {
    dispatch()
  }

  function incrementCount() {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{state.count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;