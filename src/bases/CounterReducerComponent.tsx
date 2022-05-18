import { useReducer } from 'react';

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}
const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

type CounterAction =
  | { type: 'increaseBy'; payload: { value: number } }
  | { type: 'decreaseBy'; payload: { value: number } }
  | { type: 'reset' };

const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case 'increaseBy':
      return {
        ...state,
        counter: state.counter + action.payload.value,
        previous: state.counter,
        changes: state.changes + 1,
      };
    case 'decreaseBy':
      return {
        ...state,
        counter: state.counter - action.payload.value,
        previous: state.counter,
        changes: state.changes + 1,
      };
    case 'reset':
      return {
        ...state,
        counter: 0,
        previous: 0,
        changes: 0,
      };
    default:
      return state;
  }
};

export const CounterReducerComponent = () => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleCOunterSuma = (numberAsigned: number) => {
    dispatch({ type: 'increaseBy', payload: { value: numberAsigned } });
  };

  const handleCOunterResta = (numberAsigned: number) => {
    dispatch({ type: 'decreaseBy', payload: { value: numberAsigned } });
  };

  const handleCOunterReset = () => {
    dispatch({ type: 'reset' });
  };
  return (
    <>
      <h1>Counter Reducer</h1>
      <hr />
      <h3> New: {state.counter}</h3>
      <h2> Previous: {state.previous}</h2>
      <h2> Change number: {state.changes}</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <button onClick={() => handleCOunterSuma(5)}> SUMAR +5</button>
        <button onClick={() => handleCOunterResta(5)}> RESTAR -5 </button>
        <button onClick={() => handleCOunterReset()}> RESET </button>
      </div>
    </>
  );
};
