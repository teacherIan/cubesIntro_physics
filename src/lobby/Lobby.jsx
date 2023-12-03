import Button from './Button';
import Floor from './Floor';
import './lobby.css';
import background from '/lobby.jpeg';

export default function Lobby() {
  return (
    <>
      <img className="background-img" src={background}></img>
      <Floor text="1" />
      <Floor text="2" />
      <Floor text="3" />
      <Floor text="4" />
      <Floor text="5" />
    </>
  );
}
