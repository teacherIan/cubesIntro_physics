import './lobby.css';
import Mov from './Mov';

export default function Button(props) {
  return (
    <div className="button" onClick={() => props.setPlayVideo(true)}>
      {props.text}
    </div>
  );
}
