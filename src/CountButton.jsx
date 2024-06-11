import { PlusIcon, MinusIcon } from '@radix-ui/react-icons';

export default function CountButton({ setCount, type, locked }) {
  const handleClick = (event) => {
    setCount((count) => {
      if (type === 'minus') {
        if (count <= 0) return count;

        return count - 1;
      }

      if (count >= 5) return count;

      return count + 1;
    });

    // Duuble click by space key, fixed
    event.currentTarget.blur();
  };

  return (
    <button className='count-btn' onClick={handleClick} disabled={locked}>
      {type === 'plus' && <PlusIcon className='count-btn-icon' />}
      {type === 'minus' && <MinusIcon className='count-btn-icon' />}
    </button>
  );
}
