export default function Title({ locked }) {
  return locked ? (
    <h1 className='title'>Limit Reached</h1>
  ) : (
    <h1 className='title'>Fancy Counter</h1>
  );
}
