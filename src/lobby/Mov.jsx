import vid from '../assets/theBox.m4v';
import './lobby.css';

export default function Mov({ setPlayVideo }) {
  const orientation = Screen.orientation;

  console.log(orientation);
  return (
    <video
      onEnded={() => setPlayVideo(false)}
      controls
      className="video"
      autoPlay
      muted
      preload="auto"
    >
      <source src={vid} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
