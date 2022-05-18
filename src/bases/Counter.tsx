import { useState } from 'react';

interface Props {
  initialValue?: number;
}

const Counter = ({ initialValue = 0 }: Props) => {
  const [numberInit, setNumber] = useState(initialValue);

  const handleCOunter = (number: number) => {
    setNumber((prev) => prev + number);
  };

  return (
    <>
      <h1>Counter</h1>
      <hr />
      <h3>{numberInit}</h3>
      <button onClick={() => handleCOunter(1)}> +1 </button>
      <button onClick={() => handleCOunter(2)}> +2 </button>
    </>
  );
};

export default Counter;
