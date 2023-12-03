import Button from './Button';
import Floor from './Floor';
import './lobby.css';
import background from '/lobby.jpeg';

export default function Lobby() {
  return (
    <>
      <img className="background-img" src={background}></img>
      <Floor />
    </>
  );
}
