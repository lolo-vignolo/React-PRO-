import { useCounter } from '../hooks/useCounter';

const CounterHook = () => {
  const { refCounter, numberInit, handleCOunter } = useCounter();
  return (
    <>
      <h1>Counter hook</h1>
      <hr />
      <h2 ref={refCounter}>{numberInit}</h2>
      <button onClick={() => handleCOunter()}> +1 </button>
      <button onClick={() => handleCOunter()}> +2 </button>
      <hr />
      <hr />
    </>
  );
};

export default CounterHook;
