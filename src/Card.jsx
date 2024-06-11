import { useState, useEffect } from 'react';
import Title from './Title';
import Count from './Count';
import Reset from './Reset';
import ButtonContainer from './ButtonContainer';
import CountButton from './CountButton';

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  useEffect(() => {
    const handler = (e) => {
      if (e.code === 'Space' && !locked) {
        setCount((count) => count + 1);
      }

      return null;
    };

    window.addEventListener('keyup', handler);

    return () => {
      window.removeEventListener('keyup', handler);
    };
  }, [locked]);

  return (
    <div className={`card ${locked ? 'card--limit' : ''}`}>
      <Title locked={locked} />
      <Count count={count} />
      <Reset setCount={setCount} />
      <ButtonContainer>
        <CountButton setCount={setCount} type='minus' locked={locked} />
        <CountButton setCount={setCount} type='plus' locked={locked} />
      </ButtonContainer>
    </div>
  );
}
