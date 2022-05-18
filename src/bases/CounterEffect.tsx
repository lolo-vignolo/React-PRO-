import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

const CounterEffect = () => {
  const [numberInit, setNumber] = useState(5);

  const refCounter = useRef<HTMLHeadingElement>(null);

  const handleCOunter = () => {
    setNumber((prev) => (prev < 10 ? prev + 1 : prev));
  };

  useEffect(() => {
    if (numberInit < 10) return;
    console.log(
      '%cCauseEffect',
      'color: red; background: yellow; font-size: 10px;'
    );

    const tl = gsap.timeline();

    tl.to(refCounter.current, { y: -20, duration: 0.2, ease: 'ease.out' });
    tl.to(refCounter.current, {
      y: 0,
      duration: 1,
      ease: 'bounce.out',
      delay: 0.2,
      color: 'red',
    });
  }, [numberInit]);

  return (
    <>
      <h1>Counter</h1>
      <hr />
      <h2 ref={refCounter}>{numberInit}</h2>
      <button onClick={() => handleCOunter()}> +1 </button>
      <button onClick={() => handleCOunter()}> +2 </button>
    </>
  );
};

export default CounterEffect;
