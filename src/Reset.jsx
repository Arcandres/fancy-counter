import { ResetIcon } from '@radix-ui/react-icons';

export default function Reset({ setCount }) {
  const reset = () => {
    setCount(0);
  };

  return (
    <button className='reset-btn' onClick={reset}>
      <ResetIcon className='reset-btn-icon' />
    </button>
  );
}
