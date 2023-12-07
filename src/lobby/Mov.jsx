import vid from '../assets/theBox.m4v';
import Replay from './Replay';
import './lobby.css';
import { useState, useRef } from 'react';

export default function Mov({ setPlayVideo }) {
  //   const orientation = Screen.orientation;  // todo change orientation on cellphones

  const [showOptions, setShowOptions] = useState(false);
  const videoRef = useRef();

  function onEndedHandler() {
    setShowOptions(true);
  }

  function replayVideo() {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  }

  return (
    <>
      {showOptions ? (
        <Replay
          replayVideo={replayVideo}
          setShowOptions={setShowOptions}
          setPlayVideo={setPlayVideo}
        />
      ) : null}
      <video
        ref={videoRef}
        onEnded={onEndedHandler}
        className="video"
        autoPlay
        muted
        preload="auto"
      >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
}
