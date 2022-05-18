import { useState } from 'react';

interface Props {
  initialValue?: number;
}

interface CouterState {
  value: number;
  clicks: number;
}

export const CounterBy = ({ initialValue = 5 }: Props) => {
  const [numberInit, setNumber] = useState<CouterState>({
    value: initialValue,
    clicks: 0,
  });

  const handleCOunter = (number: number) => {
    setNumber((prev) => ({
      value: prev.value + number,
      clicks: prev.clicks + 1,
    }));
  };

  return (
    <>
      <h1>Counter</h1>
      <hr />
      <h3>{numberInit.value}</h3>
      <h3>{numberInit.clicks}</h3>
      <button onClick={() => handleCOunter(1)}> +1 </button>
      <button onClick={() => handleCOunter(5)}> +5 </button>
    </>
  );
};
