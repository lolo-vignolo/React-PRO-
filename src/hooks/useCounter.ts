import { useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export const useCounter = () => {
  const [numberInit, setNumber] = useState(5);

  const elementToAnimate = useRef<any>(null);
  //creo la instancia fuera, y luego gracias al useRef la puedo usar dentro del useEffect.
  const tl = useRef(gsap.timeline());

  const handleCOunter = () => {
    setNumber((prev) => (prev < 10 ? prev + 1 : prev));
  };

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;
    tl.current
      .to(elementToAnimate.current, {
        y: -20,
        duration: 0.5,
        ease: 'ease.out',
      })
      .to(elementToAnimate.current, {
        y: 0,
        duration: 0.5,
        ease: 'bounce.out',
        color: 'red',
      });
  }, [numberInit]);

  //el useLayoutEffect, es igual al useEffect pero tiene en cuenta que el HTML esté ya renderizado para hace rel effect-
  //   useEffect(() => {
  //     if (numberInit < 10) return;
  //     console.log(
  //       '%cCauseEffect',
  //       'color: red; background: yellow; font-size: 10px;'
  //     );

  //     tl.current.to(refCounter.current, {
  //       y: -20,
  //       duration: 0.2,
  //       ease: 'ease.out',
  //     });
  //     tl.current.to(refCounter.current, {
  //       y: 0,
  //       duration: 1,
  //       ease: 'bounce.out',
  //       delay: 0.2,
  //       color: 'red',
  //     });
  //   }, [numberInit]);
  return {
    refCounter: elementToAnimate,
    numberInit,
    handleCOunter,
  };
};
