import { useReducer } from 'react';
import * as actions from './actions/actions';
import { CounterState } from './interfaces/interfaces';
import { counterReducer } from './reducer/CounterReducer';

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const CounterReducerNew = () => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleCOunterSuma = (numberAsigned: number) => {
    dispatch(actions.doIncreseAction(numberAsigned));
  };

  const handleCOunterResta = (numberAsigned: number) => {
    dispatch(actions.doDecreaseAction(numberAsigned));
  };

  const handleCOunterReset = () => {
    dispatch(actions.doResetAction());
  };
  return (
    <>
      <h1>Counter Reducer Segmentado</h1>
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
