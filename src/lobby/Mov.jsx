import vid from '../assets/theBox.m4v';
import './lobby.css';

export default function Mov({ setPlayVideo }) {
  return (
    <video onEnded={() => setPlayVideo(false)} className="video" autoPlay>
      <source src={vid} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
