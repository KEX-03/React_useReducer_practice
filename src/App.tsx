import { useState, useReducer } from 'react';
import './App.css';

  function reducer(state, action) {
    switch (action.type) {
      case 'decrement':
        return { count: state.count - 1 }
      case 'increment':
        return { count: state.count + 1 }
    }
  }

function App() {
  const [state, dispatch] = useReducer(reducer, {count: 0})

  function decrementCount() {
    dispatch({ type: 'decrement' })
  }

  function incrementCount() {
    dispatch({ type: 'increment' })
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