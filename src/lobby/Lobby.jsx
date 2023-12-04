import Floor from '../lobby/Floor';
import './lobby.css';
import background from '/lobby.jpeg';
import { useState } from 'react';
import Mov from './Mov';

export default function Lobby() {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <>
      {playVideo ? (
        <Mov setPlayVideo={setPlayVideo} />
      ) : (
        <>
          <img className="background-img" src={background}></img>
          <Floor setPlayVideo={setPlayVideo} text="1" />
          <Floor setPlayVideo={setPlayVideo} text="2" />
          <Floor setPlayVideo={setPlayVideo} text="3" />
          <Floor setPlayVideo={setPlayVideo} text="4" />
          <Floor setPlayVideo={setPlayVideo} text="5" />
        </>
      )}
    </>
  );
}
