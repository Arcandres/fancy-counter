export default function Count({ count, incrementCount }) {
  return (
    <p className='count' onClick={incrementCount}>
      {count}
    </p>
  );
}
