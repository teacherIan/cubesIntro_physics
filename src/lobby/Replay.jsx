import './lobby.css';
import { FaRotateLeft, FaReply } from 'react-icons/fa6';
import { animated, useSpring } from '@react-spring/web';
export default function Replay(props) {
  function handleReplayClick() {
    props.setShowOptions(false);
    props.replayVideo();
  }

  return (
    <div className="replay">
      <div className="menu">
        <div onClick={handleReplayClick} className="border">
          <FaRotateLeft className="icon" />
          <div>Replay</div>
        </div>

        <div onClick={() => props.setPlayVideo(false)} className="border">
          <FaReply className="icon" />
          <div>Return</div>
        </div>
      </div>
    </div>
  );
}
